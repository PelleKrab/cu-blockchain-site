import React from "react";
import ClubActivities from "../assets/club-activities.jpg";
import PellePFP from "../assets/pelle_pfp.jpg";
import VamsiPFP from "../assets/vamsi_pfp.jpg";
import Redacted from "../assets/redacted.png";
import MicrosoftLogo from "../assets/microsoft-logo.png";
import CoinbaseLogo from "../assets/coinbase-logo.png";
import OptiverLogo from "../assets/optiver-logo.png";
import GalaxyDigitalLogo from "../assets/galaxy-digital-logo.png";
import MBCHackathon from "../assets/mbc-hackathon.jpg";
import SponsorPrizes from "../assets/sponsor-prizes.jpg";
import "../styles/AboutDark.css";

const About: React.FC = () => (
  <div className="about-dark-theme">
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
            About <span className="gold-gradient">Us</span>
          </h1>
        </div>
      </section>
    </div>

    {/* Who We Are Section */}
    <section className="section-dark">
      <div className="container-dark">
        <div className="two-col-layout">
          <div className="image-col">
            <img
              src={ClubActivities}
              alt="Club Activities"
              className="feature-image"
            />
          </div>
          <div className="text-col">
            <h2 className="section-heading">
              Who We <span className="gold-gradient">Are</span>
            </h2>
            <p className="body-text">
              The CU Blockchain Club is a vibrant community of students passionate
              about blockchain technology and its applications. We aim to provide
              a platform for learning, collaboration, and innovation in the blockchain space.
            </p>
            <p className="body-text">
              Whether you're a beginner looking to understand the basics or an
              experienced developer eager to contribute to cutting-edge projects,
              our club offers resources, events, and networking opportunities to
              help you grow.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Meet Our Team Section */}
    <section className="section-dark">
      <div className="container-dark">
        <h2 className="section-heading-center">
          Meet Our <span className="gold-gradient">Team</span>
        </h2>
        <div className="team-grid-dark">
          <div className="team-member-card">
            <img
              src={PellePFP}
              alt="Pelle"
              className="member-photo"
            />
            <h3 className="member-name">Pelle</h3>
            <p className="member-role">President</p>
          </div>
          <div className="team-member-card">
            <img
              src={VamsiPFP}
              alt="Vamsi"
              className="member-photo"
            />
            <h3 className="member-name">Vamsi</h3>
            <p className="member-role">Vice President</p>
          </div>
          <div className="team-member-card">
            <img
              src={Redacted}
              alt="Gavin"
              className="member-photo"
            />
            <h3 className="member-name">Gavin</h3>
            <p className="member-role">Treasurer</p>
          </div>
        </div>
      </div>
    </section>

    {/* Our History Section */}
    <section className="section-dark">
      <div className="container-dark">
        <h2 className="section-heading-center">
          Our <span className="gold-gradient">History</span>
        </h2>
        <p className="body-text-center">
          Founded in 2014, the CU Blockchain Club has evolved through many to become what it is today. 
          Over the years, we have hosted conferences, hackathons, and guest speaker events, fostering 
          a collaborative environment where members can learn and innovate together.
        </p>
      </div>
    </section>

    {/* Alumni/Internships Section */}
    <section className="section-dark">
      <div className="container-dark">
        <h2 className="section-heading-center">
          Members have interned and accepted offers from:
        </h2>
        <div className="company-logos-wrapper">
          <div className="company-grid">
            <div className="company-logo-card">
              <img
                src={MicrosoftLogo}
                alt="Microsoft"
                className="logo-image"
              />
            </div>
            <div className="company-logo-card">
              <img
                src={CoinbaseLogo}
                alt="Coinbase"
                className="logo-image"
              />
            </div>
            <div className="company-logo-card">
              <img
                src={OptiverLogo}
                alt="Optiver"
                className="logo-image"
              />
            </div>
            <div className="company-logo-card">
              <img
                src={GalaxyDigitalLogo}
                alt="Galaxy Digital"
                className="logo-image"
              />
            </div>
          </div>
        </div>

        {/* Hackathon Wins */}
        <h2 className="section-heading-center mt-large">
          Hackathon <span className="gold-gradient">Wins</span>
        </h2>
        <div className="hackathon-container">
          <div className="hackathon-grid">
            <div className="hackathon-card-dark">
              <img
                src={MBCHackathon}
                alt="MBC Hackathon"
                className="hackathon-img"
              />
              <div className="hackathon-info">
                <h3 className="hackathon-heading">
                  MBC - 5th Place Solana Track
                </h3>
                <p className="hackathon-description">
                  Greg secured 5th place in the competitive Solana track, showcasing innovative blockchain solutions.
                </p>
              </div>
            </div>
            <div className="hackathon-card-dark">
              <img
                src={SponsorPrizes}
                alt="Sponsor Prizes"
                className="hackathon-img"
              />
              <div className="hackathon-info">
                <h3 className="hackathon-heading">
                  Sponsor Prizes - Nethermind & Privy
                </h3>
                <p className="hackathon-description">
                  Pelle won multiple sponsor puzzles, earning prizes from Nethermind and Privy for technical excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;