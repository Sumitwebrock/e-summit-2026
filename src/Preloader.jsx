import { useEffect, useState } from "react";
import videoBackground from "./assets/Video_Background_Removal_For_Logo.mp4";
import "./Preloader.css";

const Preloader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 8000); //deo ends

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="preloader">
      <video
        className="preloader-video"
        autoPlay
        muted
        playsInline
        onEnded={() => {
          setIsVisible(false);
          if (onComplete) onComplete();
        }}
      >
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Preloader;
