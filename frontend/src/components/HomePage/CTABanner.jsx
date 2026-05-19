import React from "react";
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <section className="cta-banner" aria-label="Call to action">
      <div className="cta-banner__inner">
        <h2 className="cta-banner__title">
          Ready to generate your passport photo?
        </h2>
        <p className="cta-banner__subtitle">
          No account required. Completely free and open-source.
        </p>
        <Link to="/upload" className="btn btn-primary">
          Get Started →
        </Link>
      </div>
    </section>
  );
};

export default CTABanner;
