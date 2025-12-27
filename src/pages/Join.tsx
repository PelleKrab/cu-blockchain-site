import React from "react";
import "../styles/JoinDark.css";

const Join: React.FC = () => {
  return (
    <div className="join-dark-theme">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
      </div>

      {/* Hero Section */}
      <div className="hero-dark">
        <section className="hero-content-dark">
          <div className="hero-overlay"></div>
          <div className="hero-text">
            <h1 className="hero-title-dark">
              Join <span className="gold-gradient">Us</span>
            </h1>
          </div>
        </section>
      </div>

      {/* Connect with Community Section */}
      <section className="section-dark">
        <div className="container-dark text-center">
          <h2 className="section-heading-center">
            Connect with Our <span className="gold-gradient">Community</span>
          </h2>
          <p className="body-text-center mb-large">
            Join our Telegram group to stay updated with the latest news,
            events, and discussions. Engage with fellow blockchain enthusiasts
            and be a part of our growing community.
          </p>
          <a
            href="https://t.me/cublockchain"
            target="_blank"
            rel="noopener noreferrer"
            className="join-button"
          >
            <svg className="telegram-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
            </svg>
            Join Telegram
          </a>
        </div>
      </section>

      {/* Weekly Meetings Section */}
      <section className="section-dark">
        <div className="container-dark">
          <h2 className="section-heading-center">
            Weekly <span className="gold-gradient">Meetings</span>
          </h2>
          <div className="two-col-layout">
            <div className="text-col">
              <h3 className="subsection-heading">What to Expect</h3>
              <p className="body-text mb-4">
                Our weekly meetings are a platform for learning, collaboration,
                and innovation. Sessions may include:
              </p>
              <ul className="features-list">
                <li>
                  <span className="list-icon">🎤</span>
                  <span>Guest Speaker Presentations</span>
                </li>
                <li>
                  <span className="list-icon">💻</span>
                  <span>Hands-On Workshops</span>
                </li>
                <li>
                  <span className="list-icon">🚀</span>
                  <span>Project Showcases</span>
                </li>
                <li>
                  <span className="list-icon">🤝</span>
                  <span>Networking Opportunities</span>
                </li>
                <li>
                  <span className="list-icon">💬</span>
                  <span>Community Discussions</span>
                </li>
              </ul>
            </div>
            <div className="schedule-col">
              <h3 className="subsection-heading">Meeting Schedule</h3>
              <div className="schedule-card">
                <div className="schedule-item">
                  <div className="schedule-label">Day</div>
                  <div className="schedule-value">Every Monday</div>
                </div>
                <div className="schedule-divider"></div>
                <div className="schedule-item">
                  <div className="schedule-label">Time</div>
                  <div className="schedule-value">6:00 PM - 7:00 PM</div>
                </div>
                <div className="schedule-divider"></div>
                <div className="schedule-item">
                  <div className="schedule-label">Location</div>
                  <div className="schedule-value">ECCR 131</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;