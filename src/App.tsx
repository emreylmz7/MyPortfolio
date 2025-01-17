import React, { useState, useEffect } from 'react';
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import Spinner from './components/Spinner';

function App() {
    const [mode, setMode] = useState<string>('dark');
    const [isLoading, setIsLoading] = useState(true);

    const handleModeChange = () => {
        setMode(mode === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        const loadImages = async () => {
            try {
                // Sayfadaki tüm img etiketlerini al
                const images = document.getElementsByTagName('img');
                const imagePromises = Array.from(images).map(img => {
                    if (img.complete) {
                        return Promise.resolve();
                    }
                    return new Promise((resolve, reject) => {
                        img.onload = resolve;
                        img.onerror = reject;
                    });
                });

                // Tüm resimlerin yüklenmesini bekle
                await Promise.all(imagePromises);
                setIsLoading(false);
            } catch (error) {
                console.error('Resim yüklenirken hata oluştu:', error);
                setIsLoading(false); // Hata durumunda da spinner'ı kaldır
            }
        };

        // Sayfa yüklendiğinde resimleri kontrol et
        window.addEventListener('load', loadImages);
        
        return () => {
            window.removeEventListener('load', loadImages);
        };
    }, []);

    return (
        isLoading ? (
            <Spinner />
        ) : (
            <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
                <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
                <FadeIn transitionDuration={700}>
                    <Main />
                    <Expertise />
                    <Timeline />
                    <Project />
                    <Contact mode={mode} />
                </FadeIn>
                <Footer />
            </div>
        )
    );
}

export default App;
