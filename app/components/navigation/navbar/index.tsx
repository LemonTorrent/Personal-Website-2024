import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-40 sticky top-0">
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