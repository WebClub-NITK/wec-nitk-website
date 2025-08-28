import React from "react";
import Link from "next/link";
import { TwitterIcon } from "./icons/twitter";
import { LinkedinIcon } from "./icons/linkedin";
import { InstagramIcon } from "./icons/instagram";
import { FacebookIcon } from "./icons/facebook";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { WebClubText } from "./icons/webclub_text";
import { Email } from "./icons/email";
import Image from "next/image";
import {IconBrandGithub} from "@tabler/icons-react";


const Footer = () => {

  const currentYear = new Date().getFullYear();
  const gdg_sig_path = `/blogs/${process.env.GDG_SIG_ID}`;
  const algo_sig_path =  `/blogs/${process.env.ALGO_SIG_ID}`;
  const intel_sig_path =  `/blogs/${process.env.INTEL_SIG_ID}`;
  const systems_sig_path =  `/blogs/${process.env.SYSTEMS_SIG_ID}`;

  return (
  <>
    <footer className="relative z-10 bg-secondary-900 pt-20 dark:bg-dark lg:pt-[120px]">
      <div className="container">
        
        <div className="-mx-4 flex flex-wrap ">
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="mb-10 w-full">
              <a href="/#" className="mb-6 flex max-w-[100px]">
                <Image
                  src="/wec_logo.png"
                  alt="wec_logo"
                  width={500}
                  height={500}
                  className=""
                />
              </a>
              <p className="mb-7  text-white">
              A group of passionate computer science students helping the community of NITK
              </p>

              <p className="flex items-center text-sm font-medium text-white mb-3">
                <span className="mr-3 text-primary">
                  <Email></Email>
                </span>

                <span>
                  <a href="mailto:web_enthusiasts_club@nitk.edu.in" className="md:text-[15px]">
                    web_enthusiasts_club@nitk.edu.in
                  </a>
                </span>
              </p>
                <span className="text-white">Faculty Advisor: Dr. Radhika B.S.</span>

              <div className="mt-6 flex items-center">
                <a
                  href="https://www.github.com/WebClub-NITK"
                  className="mr-3 flex h-8 w-8 p-1 items-center justify-center rounded-full border border-stroke bg-white hover:border-primary hover:bg-primary dark:border-dark-3 text-black dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  target="_blank"
                >
                  <IconBrandGithub className="text-black" />
                  
                </a>

                <a
                  href="https://www.linkedin.com/school/web-enthusiasts-club-nitk/"
                  className="mr-3 flex h-8 w-8 p-1 items-center justify-center rounded-full border border-stroke bg-white text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  target="_blank"
                >
                  <LinkedinIcon />
                </a>

                <a
                  href="https://www.instagram.com/wecnitk/"
                  className="mr-3 flex h-8 w-8 p-1 items-center justify-center rounded-full border border-stroke bg-white text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  target="_blank"
                >
                  <InstagramIcon />
                </a>

                <a
                  href="https://www.facebook.com/web.club.nitk/"
                  className="mr-3 flex h-8 w-8 p-1 items-center justify-center rounded-full border border-stroke bg-white text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  target="_blank"
                >
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </div>
          <LinkGroup header="QUICK LINKS">
            <NavLink link="/" label="Home" />
            <NavLink link="/blogs" label="Blogs" />
            <NavLink link="/events" label="Events" />
            <NavLink link="/members" label="Team" />
          </LinkGroup>
          <LinkGroup header="OUR SIGS">
            <NavLink link ={algo_sig_path} label="Algorithms SIG" />
            <NavLink link ={intel_sig_path} label="Intel SIG" />
            <NavLink link={gdg_sig_path} label="Dev SIG" />
            <NavLink link={systems_sig_path} label="Systems SIG" />
          </LinkGroup>
          <LinkGroup header="OUR INITIATIVES">
            <NavLink link="/blogs/3" label="UniDAO" />
            <NavLink link="/hackclub_nitk" label="HackClub" />
          </LinkGroup>
         <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10 w-full">
                <h4 className=" mb-9 text-lg font-semibold text-dark dark:text-white">
                  SUBSCRIBE TO NEWSLETTER
                </h4>
                <div className="flex items-center">
                  <div className="flex w-full max-w-sm items-center space-x-2">
                      <Input className="bg-white" type="email" placeholder="hello@gmail.com" disabled />
                      <Button className=" border text-white font-bold hover:bg-white hover:text-secondary-950 transition-all duration-300 ease-in-out disabled" type="submit" disabled >Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="">
            <p className="text-white pb-5 md:hidden">
                &copy; {currentYear}{" "}WebClub
              </p>
        </div>
      </div>
      <div className="md:flex justify-center mx-auto opacity-25 hidden"><WebClubText></WebClubText></div>
    </footer>
  </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold text-white">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block leading-loose text-white opacity-70 hover:text-primary-50"
      >
        {label}
      </a>
    </li>
  );
};
