"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-4 inset-x-0 z-50">
      <div className="max-w-2xl mx-auto px-8">
        <div className="w-full mx-auto">
          <div className="relative flex flex-col w-full lg:p-3 p-1 mx-auto ring-1 uppercase ring-gray-600 backdrop-blur-xl backdrop-filter rounded-xl md:rounded-full md:items-center md:justify-between md:flex-row">
            <div className="flex flex-row items-center justify-between md:justify-start">
              <a
                className="text-white hover:text-white/50 gap-4 items-center tracking-tighter inline-flex font-bold ml-2 text-xl"
                href="/"
                title="link to main page"
              >
                WEC
              </a>
              <button
                onClick={toggleNavbar}
                className="inline-flex items-center justify-center p-2 text-white hover:text-primary-200 focus:outline-none focus:text-white md:hidden"
                aria-controls="navbar-default"
                aria-expanded={isOpen ? "true" : "false"}
              >
                <svg
                  className="w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </>
                  ) : (
                    <>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </>
                  )}
                </svg>
              </button>
            </div>
            <nav
              id="navbar-default"
              className={`${
                isOpen ? "block" : "hidden"
              } md:flex md:items-end md:justify-center md:flex-row`}
            >
              <ul className="space-y-4 py-1 list-none text-xs text-gray-500 md:space-y-0 md:ml-auto items-center md:inline-flex justify-center text-center md:text-left gap-3">
                <li>
                  <a
                    href="https://lexingtonthemes.com/"
                    className="text-white shrink-0"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#work" className="hover:text-white shrink-0">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#how" className="hover:text-white shrink-0">
                   Teams
                  </a>
                </li>
                
                <li className="shrink-0">
                  <a
                    href="https://github.com/michael-andreuzza/minimalstudio"
                    className="py-2 w-auto px-4 border-2 h-8 focus:ring-2 rounded-full border-black bg-black/5 hover:bg-transparent text-white duration-200 focus:ring-offset-2 hover:text-black inline-flex items-center justify-center ring-2 focus:ring-black ring-transparent"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
