import React from "react";
import "../styles/JoinDark.css";

const Join: React.FC = () => {
  return (
    <div className="join-dark-theme">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="mountain-layer mountain-layer-1"></div>
        <div className="mountain-layer mountain-layer-2"></div>
        <div className="mountain-layer mountain-layer-3"></div>
      </div>

      {/* Connect with Community Section */}
      <section className="section-dark hero-section">
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

      {/* Contact Section */}
      <section className="section-dark">
        <div className="container-dark">
          <h2 className="section-heading-center">
            Get in <span className="gold-gradient">Touch</span>
          </h2>
          <p className="body-text-center mb-large">
            Have questions or want to connect? Reach out to our team members directly!
          </p>

          {/* Club Social Media */}
          <div className="contact-card club-contact">
            <h3 className="contact-heading">Club Social Media</h3>
            <div className="social-links">
              <a
                href="https://twitter.com/cublockchain_"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                @cublockchain_
              </a>
            </div>
          </div>

          {/* Team Contacts */}
          <div className="team-contacts-grid">
            <div className="contact-card">
              <h3 className="contact-name">Brock</h3>
              <p className="contact-role">Co-President</p>
              <div className="contact-links">
                <a href="mailto:brock.benton@colorado.edu" className="contact-link">
                  <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  brock.benton@colorado.edu
                </a>
                <a href="https://twitter.com/brock4bc" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <svg className="contact-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  @brock4bc
                </a>
              </div>
            </div>

            <div className="contact-card">
              <h3 className="contact-name">Jack</h3>
              <p className="contact-role">Co-President</p>
              <div className="contact-links">
                <a href="mailto:jabr2451@colorado.edu" className="contact-link">
                  <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  jabr2451@colorado.edu
                </a>
                <a href="https://twitter.com/Jack_Brehmer" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <svg className="contact-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  @Jack_Brehmer
                </a>
              </div>
            </div>

            <div className="contact-card">
              <h3 className="contact-name">Tyler</h3>
              <p className="contact-role">Treasurer</p>
              <div className="contact-links">
                <a href="mailto:tyma5370@colorado.edu" className="contact-link">
                  <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  tyma5370@colorado.edu
                </a>
                <a href="https://twitter.com/TylerMarticnfd" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <svg className="contact-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  @TylerMarticnfd
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;