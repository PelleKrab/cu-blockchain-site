import React from "react";
import "../styles/HomeDark.css";

const Home: React.FC = () => (
  <div className="home-dark-theme">
    {/* Animated Background */}
    <div className="animated-background">
      <div className="mountain-layer mountain-layer-1"></div>
      <div className="mountain-layer mountain-layer-2"></div>
      <div className="mountain-layer mountain-layer-3"></div>
    </div>

    {/* Hero Section */}
    <div className="hero-dark">
      <div className="hero-overlay"></div>
      <div className="hero-content-dark">
        <div className="hero-text">
          <h1 className="hero-title-dark">
            Welcome to <span className="gold-gradient">CU Blockchain Club</span>
          </h1>
          <p className="hero-subtitle-dark">
            Exploring the future of technology and innovation with blockchain.
          </p>
          <a href="#learn-more" className="hero-cta-btn">
            Learn More
          </a>
        </div>
      </div>
    </div>

    {/* Initiatives Section */}
    <section id="learn-more" className="section-dark">
      <div className="container-dark">
        <h2 className="section-heading-center">
          Discover Our <span className="gold-gradient">Initiatives</span>
        </h2>
        <div className="initiatives-grid">
          <div className="initiative-card">
            <div className="initiative-icon">🎓</div>
            <h3 className="initiative-title">Workshops</h3>
            <p className="initiative-description">
              Participate in hands-on workshops to deepen your understanding of blockchain technology.
            </p>
          </div>
          <div className="initiative-card">
            <div className="initiative-icon">🤝</div>
            <h3 className="initiative-title">Networking Events</h3>
            <p className="initiative-description">
              Connect with industry experts, entrepreneurs, and fellow enthusiasts to expand your network.
            </p>
          </div>
          <div className="initiative-card">
            <div className="initiative-icon">💻</div>
            <h3 className="initiative-title">Hackathons</h3>
            <p className="initiative-description">
              Engage in collaborative projects and compete in hackathons to showcase your skills and creativity.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="cta-section">
      <div className="container-dark text-center">
        <div className="cta-card">
          <h2 className="cta-heading">
            Join Us <span className="gold-gradient">Today!</span>
          </h2>
          <p className="cta-text">
            Become a part of our vibrant community and start your journey with
            blockchain technology.
          </p>
          <a href="/Join" className="cta-button">
            Join Today
            <svg className="button-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Home;