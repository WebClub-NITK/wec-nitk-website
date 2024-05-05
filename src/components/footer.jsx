import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full  dark:bg-secondary-800 backdrop-blur-xl backdrop-filter">
      <div class="mx-auto w-full max-w-screen-xl">
        <div class="px-4 py-6 bg-secondary-800 dark:bg-secondary-700 md:flex md:items-center md:justify-between">
          <span class="text-sm  dark:text-primary-100 sm:text-center">
            Made with ❤️ by Web Enthusiasts' Club, NITK
          </span>
          <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            {/* <div className="flex justify-center space-x-4 mt-2"> */}
            <Link aria-label="Facebook page" className="text-primary-100" href="#">
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link aria-label="Twitter profile" className="text-primary-100" href="#">
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link
              aria-label="Instagram profile"
              className="text-primary-100"
              href="#"
            >
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link aria-label="LinkedIn profile" className="text-primary-100" href="#">
              <LinkedinIcon className="h-6 w-6" />
            </Link>
          </div>
          {/* </div> */}
        </div>
      </div>
      {/* Alternate footer */}
      {/* <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none text-white">
          Keep in touch
        </h2>
        <p className="mx-auto text-secondary-100 md:text-lg dark:text-zinc-800">
          Follow us on social media to stay updated with our latest events.
        </p>

        <div className="flex justify-center space-x-4 mt-2">
          <Link aria-label="Facebook page" className="text-white" href="#">
            <FacebookIcon className="h-6 w-6" />
          </Link>
          <Link aria-label="Twitter profile" className="text-white" href="#">
            <TwitterIcon className="h-6 w-6" />
          </Link>
          <Link aria-label="Instagram profile" className="text-white" href="#">
            <InstagramIcon className="h-6 w-6" />
          </Link>
          <Link aria-label="LinkedIn profile" className="text-white" href="#">
            <LinkedinIcon className="h-6 w-6" />
          </Link>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
