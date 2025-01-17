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
    const [isLoading, setIsLoading] = useState(true); // Yükleme durumu

    const handleModeChange = () => {
        setMode(mode === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        const images = Array.from(document.images); // Sayfadaki tüm img etiketlerini alın
        const imagePromises = images.map((img) => 
            new Promise((resolve) => {
                if (img.complete) {
                    resolve(true);
                } else {
                    img.onload = () => resolve(true);
                    img.onerror = () => resolve(true);
                }
            })
        );

        Promise.all(imagePromises).then(() => {
            setIsLoading(false); // Tüm görseller yüklendi
        });

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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
