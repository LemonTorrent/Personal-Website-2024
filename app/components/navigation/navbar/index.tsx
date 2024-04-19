import React, { useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = () => {

  // const windowObject = window

  // console.log("Window width:", window)

  return (
    <>
      <div className="w-full h-18 sticky top-0 bg-[#F2B0BD] text-white">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full text-2xl">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-ffee93">
              <li>
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link href="/experience">
                  <p>Experience</p>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <p>Past Projects</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;