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
                // Sayfa içeriğinin yüklenmesi için kısa bir bekleme
                await new Promise(resolve => setTimeout(resolve, 100));

                // Sayfadaki tüm img etiketlerini al
                const images = document.getElementsByTagName('img');
                
                if (images.length === 0) {
                    setIsLoading(false);
                    return;
                }

                const imagePromises = Array.from(images).map(img => {
                    // Eğer resim zaten yüklenmişse veya src boşsa
                    if (img.complete || !img.src) {
                        return Promise.resolve();
                    }

                    return new Promise((resolve) => {
                        img.onload = resolve;
                        img.onerror = resolve; // Hata durumunda da devam et
                        
                        // Timeout ekle - 5 saniye sonra resolve et
                        setTimeout(resolve, 5000);
                    });
                });

                await Promise.all(imagePromises);
                setIsLoading(false);
            } catch (error) {
                console.error('Resim yüklenirken hata oluştu:', error);
                setIsLoading(false);
            }
        };

        // Doğrudan loadImages'i çağır
        loadImages();

        // Temizleme işlevi
        return () => {
            setIsLoading(false);
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
