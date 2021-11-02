import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure to receive our best vacation deals.
        </p>
        <p className="footer-subscription-text">You unsubscribe at any time.</p>
        <div className="input-areas">
          <input
            className="footer-input"
            type="email"
            name="email"
            placeholder="You Email"
          />
          <Button buttonStyle="btn--outline">Subscribe</Button>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Services</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TRVL <i class="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">TRVL © 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
