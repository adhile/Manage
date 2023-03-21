import React from "react";
import { handleClick } from "../functions/buttonToggle";
function Navbar() {
  return (
    <>
      {/* navbar */}
      <nav className="relative container mx-auto p-6">
        {/* flex-container */}
        <div className="flex item-center justify-between">
          {/* logo */}
          <div className="pt-2">
            <img src="../../public/img/logo.svg" alt="" />
          </div>
          {/* menu-items */}
          <div className="hidden md:flex  space-x-6">
            <a href="#" className="hover:text-darkGrayishBlue">
              Product
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Pricing
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Careers
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Community
            </a>
          </div>
          {/* button */}
          <a
            href=""
            className="hidden md:block bg-brightRed p-3 px-6 pt-2 rounded-full text-white baseline hover:bg-brightRedLight "
          >
            Get Started
          </a>
          {/* hamburger-icon */}
          <button
            id="menu-btn"
            className="block   hamburger md:hidden focus:outline-none "
            onClick={handleClick}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* Mobile-menu */}
        <div className="md:hidden">
          <div
            id="menu"
            className=" absolute  flex-col items-center self-end  space-y-6 py-8 mt-10 font-bold  drop-shadow-md sm:w-auto sm:self-center left-6 right-6 hidden bg-white border-2"
          >
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
