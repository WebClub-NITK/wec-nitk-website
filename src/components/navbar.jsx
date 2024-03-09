import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div class="fixed top-4 inset-x-0 z-50">
      <div class="max-w-2xl mx-auto lg:px-8 px-4">
        <div class="w-full mx-auto">
          <div
            x-data="{ open: false }"
            class="relative flex flex-col w-full p-1 lg:p-3 mx-auto bg-transparent opacity-90 ring-1 uppercase ring-white backdrop-blur-xl backdrop-filter rounded-xl md:rounded-full md:items-center md:justify-between md:flex-row"
          >
            <div class="flex flex-row items-center justify-between md:justify-start">
              <a
                class="text-white hover:text-white/50 gap-4 items-center tracking-tighter inline-flex font-bold ml-2 text-xl"
                href="/"
                title="linke to main page"
              >
                WEC
              </a>
              <button class="inline-flex items-center justify-center p-2 text-zinc-200 hover:text-primary-blue focus:outline-none focus:text-black md:hidden">
                <svg
                  class="w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    class="inline-flex"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                  <path
                    class="hidden"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <nav class="flex-col flex-grow hidden py-12 md:py-0 md:flex md:items-end justify-center md:flex-row">
              <ul class="space-y-2 list-none text-xs text-zinc-500 md:space-y-0 md:ml-auto items-center md:inline-flex justify-center text-center md:text-left gap-3">
                <li>
                  <a
                    href="https://lexingtonthemes.com/"
                    class="hover:text-white shrink-0"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a href="#work" class="hover:text-white shrink-0">
                    {" "}
                    Team
                  </a>
                </li>
                <li>
                  <a href="#how" class="hover:text-white shrink-0">
                    {" "}
                    Blog
                  </a>
                </li>
                <li>
                  <Link href="/alumni" class="hover:text-white shrink-0">
                    {" "}
                    alumni
                  </Link>
                </li>

                <li class="shrink-0">
                  <a
                    href="https://github.com/Shubham-Rasal/wec-nitk-website"
                    class="py-2 w-auto px-4 border-2 h-8 focus:ring-2 rounded-full border-slate-400 bg-white/5 hover:bg-transparent text-slate-200 duration-200 focus:ring-offset-2 hover:text-white inline-flex items-center justify-center ring-2 focus:ring-black ring-transparent"
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


