import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <span className="badge badge-blue">Open Source · Free to Use</span>
        <h1 id="hero-title" className="hero__title">
          Passport Photos,
          <br />
          <span className="hero__title-highlight">Powered by AI</span>
        </h1>
        <p className="hero__subtitle">
          Upload once. Get a perfectly centred, background-removed, print-ready
          passport photo sheet in seconds.
        </p>
        <div className="hero__actions">
          <Link to="/upload" className="btn btn-primary hero__btn-primary">
            Upload Your Photo
          </Link>
        </div>
      </div>
      <div className="hero__visual" aria-hidden="true">
        <div className="hero__photo-mock">
          <div className="hero__photo-frame" />
          <div className="hero__photo-frame" />
          <div className="hero__photo-frame" />
          <div className="hero__photo-frame" />
        </div>
        <span className="hero__ai-badge"> AI Processed</span>
      </div>
    </section>
  );
};

export default HeroSection;
