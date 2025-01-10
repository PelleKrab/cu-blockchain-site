import React from "react";

const Home: React.FC = () => (
  <div className="flex flex-col">
    <div className="relative bg-campus bg-fixed bg-center bg-cover h-screen">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-cu-gold">
          Welcome to CU Blockchain Club
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-white max-w-2xl mx-auto">
          Exploring the future of technology and innovation with blockchain.
        </p>
        <a
          href="#learn-more"
          className="mt-8 inline-block px-6 py-3 bg-cu-gold text-black font-semibold rounded-full hover:bg-yellow-500 transition duration-300"
        >
          Learn More
        </a>
      </div>
    </div>

    <section id="learn-more" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-cu-gold mb-12">
          Discover Our Initiatives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Workshops",
              description:
                "Participate in hands-on workshops to deepen your understanding of blockchain technology.",
            },
            {
              title: "Networking Events",
              description:
                "Connect with industry experts, entrepreneurs, and fellow enthusiasts to expand your network.",
            },
            {
              title: "Hackathons",
              description:
                "Engage in collaborative projects and compete in hackathons to showcase your skills and creativity.",
            },
          ].map((initiative, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-cu-dark-gray mb-4">
                {initiative.title}
              </h3>
              <p className="text-gray-700">{initiative.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-cu-gold">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-black mb-6">Join Us Today!</h2>
        <p className="text-black mb-8">
          Become a part of our vibrant community and start your journey with
          blockchain technology.
        </p>
        <a
          href="/signup"
          className="px-6 py-3 bg-black text-cu-gold font-semibold rounded-full hover:bg-gray-800 transition duration-300"
        >
          Sign Up Now
        </a>
      </div>
    </section>
  </div>
);

export default Home;
