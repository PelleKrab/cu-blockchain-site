import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/CUBoulderLogo.svg';
import { Transition } from "@headlessui/react"; // Optional: For smooth transitions

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // To determine active link

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define your navigation links
  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Leadership", path: "/leadership" },
    { name: "Join Us", path: "/join" },
  ];

  return (
    <nav className="bg-cu-light-black shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="CU Logo" className="w-12 h-12 mr-2" />
              <span className="text-xl font-bold text-cu-gold">CU Blockchain</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-white hover:text-cu-gold transition duration-300 ${
                  location.pathname === item.path
                    ? "border-b-2 border-cu-gold"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cu-light-black">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)} // Close menu on link click
                  className={`block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-cu-gold hover:text-black transition duration-300 ${
                    location.pathname === item.path
                      ? "bg-cu-gold text-black"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
