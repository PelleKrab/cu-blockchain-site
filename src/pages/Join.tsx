import React from "react";
import { Background } from "../assets/Flatirons_WInter_Sunrise_banner.jpg"

const Join: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className = "flex flex-col h-[30rem]">
      <section
        className="relative bg-fixed bg-[center_bottom_30%] bg-flatirons h-full flex items-center justify-center text-center px-4"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Join Us</h1>
        </div>
      </section>
      </div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-cu-gold mb-6">
            Connect with Our Community
          </h2>
          <p className="text-cu-dark-gray text-lg mb-8">
            Join our Telegram group to stay updated with the latest news,
            events, and discussions. Engage with fellow blockchain enthusiasts
            and be a part of our growing community.
          </p>
          <a
            href="https://t.me/yourtelegramgroup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-cu-gold text-black font-semibold rounded-full hover:bg-yellow-500 transition duration-300"
          >
            Join Telegram
          </a>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-cu-gold mb-12">
            Weekly Meetings
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h3 className="text-2xl font-semibold text-cu-dark-gray mb-4">
                What to Expect
              </h3>
              <p className="text-cu-dark-gray text-lg mb-4">
                Our weekly meetings are a platform for learning, collaboration,
                and innovation. Session may include:
              </p>
              <ul className="list-disc list-inside text-cu-dark-gray text-lg">
                <li>Guest Speaker Presentations</li>
                <li>Hands-On Workshops</li>
                <li>Project Showcases</li>
                <li>Networking Opportunities</li>
                <li>Discussions</li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h3 className="text-2xl font-semibold text-cu-dark-gray mb-4">
                Meeting Schedule
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-cu-dark-gray text-lg mb-2">
                  <strong>Day:</strong> Every Wednesday
                </p>
                <p className="text-cu-dark-gray text-lg mb-2">
                  <strong>Time:</strong> 6:00 PM - 7:00 PM
                </p>
                <p className="text-cu-dark-gray text-lg">
                  <strong>Location:</strong> ECCR 131
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
  );
};

export default Join;