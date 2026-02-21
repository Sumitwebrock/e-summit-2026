import "./App.css";
import { useState, useRef } from "react";
import Preloader from "./Preloader";
import heroImage from "./assets/4 1.png";
import edgeStrip from "./assets/e-summit'26 4.png";
import summitWordmark from "./assets/e summit yellow.png";
import openUnstop from "./assets/OPEM UNSTOP.png";
import navLogo from "./assets/W 1 (1).png";
import scheduleHeading from "./assets/schedule.png";
import eventsHeading from "./assets/EVENTS.png";
import galleryTile from "./assets/schedule.png";
import hackathonBadge from "./assets/HACKATHON_12.png";
import mehboobaMusic from "./assets/Mehbooba Mehbooba Song.mp3";
import grungeBackground from "./assets/grunge-style-starburst-background.jpg";
import Masonry from "./Masonry";
import img1 from "./assets/gallery/IMG_3162.JPG";
import img2 from "./assets/gallery/IMG_4011.JPG";
import img3 from "./assets/gallery/IMG_4015.JPG";
import img4 from "./assets/gallery/_DSC3228.JPG";
import img5 from "./assets/gallery/_DSC3292.JPG";
import img6 from "./assets/gallery/_DSC3297.JPG";
import img7 from "./assets/gallery/_DSC3304.JPG";
import img8 from "./assets/gallery/_DSC3310.JPG";
import img9 from "./assets/gallery/_DSC4129.JPG";
import img10 from "./assets/gallery/_DSC4157.JPG";
import img11 from "./assets/gallery/_DSC4190.JPG";
import artistShow from "./assets/events/artist show.JPG";
import firstDay from "./assets/events/first day.JPG";
import hackathonEvent from "./assets/events/hackathon.JPG";
import iplAuction from "./assets/events/ipl auction.JPG";
import startupShow from "./assets/events/startup show.JPG";
import uiUx from "./assets/events/ui_ux.JPG";

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Audio play error:", err));
      }
      setMusicPlaying(!musicPlaying);
    }
  };
  const galleryItems = [
    { id: 1, img: img1, height: 520, url: "#gallery" },
    { id: 2, img: img2, height: 420, url: "#gallery" },
    { id: 3, img: img3, height: 360, url: "#gallery" },
    { id: 4, img: img4, height: 420, url: "#gallery" },
    { id: 5, img: img5, height: 520, url: "#gallery" },
    { id: 6, img: img6, height: 360, url: "#gallery" },
    { id: 7, img: img7, height: 420, url: "#gallery" },
    { id: 8, img: img8, height: 360, url: "#gallery" },
    { id: 9, img: img9, height: 520, url: "#gallery" },
    { id: 10, img: img10, height: 420, url: "#gallery" },
    { id: 11, img: img11, height: 360, url: "#gallery" }
  ];

  const eventItems = [
    { id: 1, name: "Artist Show", img: artistShow },
    { id: 2, name: "First Day", img: firstDay },
    { id: 3, name: "Hackathon", img: hackathonEvent },
    { id: 4, name: "IPL Auction", img: iplAuction },
    { id: 5, name: "Startup Show", img: startupShow },
    { id: 6, name: "UI/UX", img: uiUx }
  ];

  return (
    <div className="page" style={{ "--hero-bg": `url(${grungeBackground})` }}>
      <audio ref={audioRef} loop>
        <source src={mehboobaMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {!preloaderComplete && <Preloader onComplete={() => setPreloaderComplete(true)} audioRef={audioRef} />}
      <img
        className="edge-strip edge-strip--top"
        src={edgeStrip}
        alt=""
        aria-hidden="true"
      />
      <header className="nav">
        <nav className="nav-links nav-links--left">
          <a href="#home">Home</a>
          <a href="#schedule">Schedule</a>
        </nav>
        <div className="nav-logo">
          <img src={navLogo} alt="E-Cell" />
        </div>
        <nav className="nav-links nav-links--right">
          <a href="#events">Events</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <button className="music-btn" onClick={toggleMusic} aria-label="Toggle music">
            <span className="music-icon">{musicPlaying ? "🔊" : "🔇"}</span>
          </button>
          <div className="hero-card">
            <img className="hero-image" src={heroImage} alt="E-Summit 26" />
          </div>
        </section>

        <section id="hackathon" className="intro">
          <div className="intro-media">
            <img src={summitWordmark} alt="E-Summit 2026" />
            <p>
              Welcome to the flagship event of Entrepreneur Cell of IIIT Naya
              Raipur, where dreams take flight and ventures succeed. Join us in
              shaping tomorrow&apos;s innovations.
            </p>
          </div>
          <div className="intro-divider" aria-hidden="true" />
          <div className="intro-media intro-media--right">
            <a
              className="intro-link"
              href="https://unstop.com/college-fests/e-summit-2026-international-institute-of-information-technology-iiit-naya-raipur-441702"
              aria-label="Open Unstop"
            >
              <img src={openUnstop} alt="Open Unstop" />
            </a>
          </div>
        </section>

        <section id="schedule" className="schedule">
          <div className="section-title section-title--image">
            <img src={scheduleHeading} alt="Schedule" />
          </div>
          <div className="timeline">
            <div className="timeline-row">
              <div className="event-badge left">
                <img src={hackathonBadge} alt="Case Study 13 March" />
              </div>
              <div className="timeline-mid"><span className="dot" /></div>
              <div className="event-badge right">
                <img src={hackathonBadge} alt="Hackathon 12 March" />
              </div>
            </div>
            <div className="timeline-row">
              <div className="event-badge left">
                <img src={hackathonBadge} alt="Case Study 13 March" />
              </div>
              <div className="timeline-mid"><span className="dot" /></div>
              <div className="event-badge right">
                <img src={hackathonBadge} alt="Pitch Competition 14 March" />
              </div>
            </div>
            <div className="timeline-row">
              <div className="event-badge left">
                <img src={hackathonBadge} alt="Case Study 13 March" />
              </div>
              <div className="timeline-mid"><span className="dot" /></div>
              <div className="event-badge right">
                <img src={hackathonBadge} alt="Pitch Competition 14 March" />
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="events">
          <div className="section-title section-title--image">
            <img src={eventsHeading} alt="Events" />
          </div>
          <div className="events-carousel-container">
            <div className="events-carousel">
              {eventItems.map((event) => (
                <div key={event.id} className="event-card-carousel">
                  <img src={event.img} alt={event.name} className="event-card-image" />
                  <h3 className="event-card-name">{event.name}</h3>
                </div>
              ))}
              {eventItems.map((event) => (
                <div key={`duplicate-${event.id}`} className="event-card-carousel">
                  <img src={event.img} alt={event.name} className="event-card-image" />
                  <h3 className="event-card-name">{event.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery">
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-masonry">
            <Masonry items={galleryItems} />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">E</div>
        <div className="footer-col">
          <h3>About Us</h3>
          <a href="https://ecell.iiitnr.ac.in/">ecell iiit nr</a>
          <a href="https://ecell.iiitnr.ac.in/team">Team</a>
          <a href="#home">Committee</a>
        </div>
        <div className="footer-col">
          <h3>Social</h3>
          <a href="https://www.instagram.com/ecell_iiitnr/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
      <img
        className="edge-strip edge-strip--bottom"
        src={edgeStrip}
        alt=""
        aria-hidden="true"
      />
    </div>
  );
}

export default App;