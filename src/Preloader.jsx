import { useEffect, useState } from "react";
import videoBackground from "./assets/Video_Background_Removal_For_Logo.mp4";
import summitLogo from "./assets/e summit yellow.png";
import "./Preloader.css";

const Preloader = ({ onComplete, audioRef }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleSkip = () => {
    setIsVisible(false);
    if (onComplete) onComplete();
  };

  useEffect(() => {
    // Detect if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile-only loading progress simulation
  useEffect(() => {
    if (!isMobile) {
      setIsLoading(false);
      return;
    }

    let progress = 0;
    const increment = () => {
      // Simulate realistic loading with variable speed
      if (progress < 30) {
        progress += Math.random() * 15; // Fast initial load
      } else if (progress < 60) {
        progress += Math.random() * 10; // Medium speed
      } else if (progress < 90) {
        progress += Math.random() * 5; // Slower for realism
      } else if (progress < 100) {
        progress += Math.random() * 3; // Very slow near end
      }

      if (progress >= 100) {
        progress = 100;
        setLoadProgress(100);
        setTimeout(() => setIsLoading(false), 300);
      } else {
        setLoadProgress(Math.min(Math.floor(progress), 99));
      }
    };

    const interval = setInterval(increment, 100);
    return () => clearInterval(interval);
  }, [isMobile]);

  useEffect(() => {
    // Start playing audio when preloader appears
    if (audioRef?.current) {
      audioRef.current.play().catch(err => console.log("Audio play error:", err));
    }

    // Desktop: 8 seconds (full video), Mobile: wait for loading to finish
    if (!isMobile) {
      const timer = setTimeout(() => {
        handleSkip();
      }, 8000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onComplete, audioRef, isMobile]);

  // Auto-skip when mobile loading is complete
  useEffect(() => {
    if (isMobile && !isLoading && loadProgress === 100) {
      const timer = setTimeout(() => {
        handleSkip();
      }, 500);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, loadProgress, isMobile]);

  if (!isVisible) return null;

  return (
    <div className="preloader" onClick={isMobile && loadProgress === 100 ? handleSkip : undefined}>
      <video
        className="preloader-video"
        autoPlay
        muted
        playsInline
        onEnded={handleSkip}
      >
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {isMobile && isLoading && (
        <div className="loading-progress">
          <img src={summitLogo} alt="E-Summit 2026" className="loading-logo" />
          <div className="loading-percentage">{loadProgress}%</div>
          <div className="loading-text">Loading Experience...</div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${loadProgress}%` }}
            ></div>
          </div>
        </div>
      )}
      
      {isMobile && !isLoading && loadProgress === 100 && (
        <div className="skip-hint">Tap to continue</div>
      )}
    </div>
  );
};

export default Preloader;
