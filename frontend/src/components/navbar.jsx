"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname()

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false)
  }, [path])


  return (
    <div className="fixed top-4 inset-x-0 z-50">
      <div className="max-w-2xl mx-auto px-8">
        <div className="w-full mx-auto">
          <div className="relative flex flex-col w-full md:p-3 p-1 mx-auto ring-1 uppercase ring-gray-700 backdrop-blur-xl backdrop-filter rounded-xl md:rounded-full md:items-center md:justify-between md:flex-row bg-secondary-900/50">
            <div className="flex flex-row items-center justify-between md:justify-start">
              <a
                className="text-primary-100  hover:text-primary-50 gap-4 items-center inline-flex font-bold ml-2 text-xl transition-all ease-in-out duration-300"
                href="/"
                style={{ textTransform: 'none' }}
              >
                WebClub
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
              } md:flex md:items-end md:justify-center md:flex-row md:pb-0 pb-5`}
            >
              <ul className="space-y-4 py-1 list-none text-xs text-gray-500 md:space-y-0 md:ml-auto items-center md:inline-flex justify-center text-center md:text-left gap-3">
                <li>
                  <Link
                    href="/events"
                    className="hover:text-white shrink-0"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-white shrink-0">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/members" className="hover:text-white shrink-0">
                   Members
                  </Link>
                </li>
                <li>
                  <Link href="/hackclub_nitk" className="hover:text-white shrink-0">
                   HackClub
                  </Link>
                </li>
                
                <li className="shrink-0">
                  <a
                    href="https://linktr.ee/wecnitk"
                    target="_blank"
                    className="py-2 w-auto px-4 border-2 h-8 rounded-full text-white duration-200 focus:ring-offset-2 ring-2"
                  >
                    Linktree
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
