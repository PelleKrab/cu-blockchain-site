import React from "react";
import ClubActivities from "../assets/club-activities.jpg";
// import JamesonPFP from "../assets/jameson_pfp.jpg";
import PellePFP from "../assets/pelle_pfp.jpg";
import VamsiPFP from "../assets/vamsi_pfp.jpg";
// import GavinPFP from "../assets/gavin_pfp.jpg";
import Redacted from "../assets/redacted.png";

const About: React.FC = () => (
  <div className="flex flex-col">
    <div className="flex flex-col h-[30rem]">
    <section
      className="relative bg-[center_bottom_30%] bg-flatirons bg-cover bg-no-repeat h-full flex items-center justify-center text-center px-4"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-white"> 
          About Us
        </h1>
      </div>
    </section>
    </div>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src={ClubActivities}
              alt="Club Activities"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold text-cu-gold mb-4">
              Who We Are
            </h2>
            <p className="text-cu-dark-gray text-lg">
              The CU Blockchain Club is a vibrant community of students passionate
              about blockchain technology and its applications. We aim to provide
              a platform for learning, collaboration, and innovation in the blockchain space.
            </p>
            <p className="text-cu-dark-gray text-lg mt-4">
              Whether you're a beginner looking to understand the basics or an
              experienced developer eager to contribute to cutting-edge projects,
              our club offers resources, events, and networking opportunities to
              help you grow.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-cu-gold mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <img
              src={PellePFP}
              alt="Pelle"
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="text-xl font-semibold text-cu-dark-gray mt-4 text-center">
             Pelle 
            </h3>
            <p className="text-gray-600 text-center">President</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <img
              src={ VamsiPFP }
              alt="Vamsi"
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="text-xl font-semibold text-cu-dark-gray mt-4 text-center">
              Vamsi
            </h3>
            <p className="text-gray-600 text-center">Vice President</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <img
              src={ Redacted }
              alt="Gavin"
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="text-xl font-semibold text-cu-dark-gray mt-4 text-center">
              Gavin
            </h3>
            <p className="text-gray-600 text-center">Treasurer</p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-cu-gold mb-12">
          Our History
        </h2>
        <p className="text-cu-dark-gray text-lg max-w-3xl mx-auto">
          Founded in 2014, the CU Blockchain Club has evolved through many to become what it is today. Over the years, we have hosted conferences, hackathons, and guest speaker events, fostering a collaborative environment where members can learn and innovate together.
           </p>
      </div>
    </section>

    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-cu-gold mb-12">
          Member Accomplishments
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-cu-dark-gray mb-4">
              Career Success
            </h3>
            <p className="text-cu-dark-gray text-lg">
              Our members have secured internships and full-time offers from leading companies in tech and blockchain, including Microsoft, Coinbase, Optiver, and Galaxy Digital.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-cu-dark-gray mb-4">
              Hackathon Achievements
            </h3>
            <p className="text-cu-dark-gray text-lg">
              At MBC, Greg earned 5th place in the Solana track. Pelle won Nethermind Sponsor Puzzles and Privy prizes.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;