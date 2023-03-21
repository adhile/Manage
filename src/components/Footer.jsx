import React from "react";
import {
  FaYoutube,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <section id="footer" className="bg-veryDarkBlue py-12 md:py-6">
        <div className="container  flex flex-col items-center space-y-6 space-x-0 mx-auto  pt-6    md:flex-row-reverse  lg:justify-around md:items-center md:mx-auto md:space-x-2 ">
          <div className="flex space-x-2 items-center  ">
            {/* form-section */}
            <input
              className="rounded-full bg-white px-4 py-2 pr-12 md:pr-0   focus:outline-none "
              type="text"
              name=""
              id=""
              placeholder="Updated in your inbox"
            />
            {/* button */}
            <div>
              <a
                href="#"
                className=" bg-brightRed p-3 px-6 pt-2  rounded-full text-white baseline hover:bg-brightRedLight appearance-none focus:outline-none "
              >
                Go
              </a>
            </div>
          </div>
          {/* links-section */}
          <div className="flex justify-around space-x-32   ">
            {/* left-box */}
            <div className="flex flex-col  space-y-2 text-white  ">
              <a className="hover:text-brightRed" href="">
                Home
              </a>
              <a className="hover:text-brightRed" href="">
                Pricing
              </a>
              <a className="hover:text-brightRed" href="">
                Products
              </a>
              <a className="hover:text-brightRed" href="">
                About
              </a>
            </div>
            {/* right-box  */}
            <div className="flex flex-col space-y-2 text-white  ">
              <a className="hover:text-brightRed" href="">
                Careers
              </a>
              <a className="hover:text-brightRed" href="">
                Community
              </a>
              <a className="hover:text-brightRed" href="">
                Privacy Policy
              </a>
            </div>
          </div>
          {/* social-icons */}
          <div className=" flex flex-col   p-6 space-y-4  text-white   md:flex-col-reverse md:items-center md:justify-between ">
            <div className="flex items-center p-2 space-x-4 md:mt-4">
              <FaFacebookSquare size={30} className="cursor-pointer" />
              <FaTwitter size={30} className="cursor-pointer" />
              <FaYoutube size={30} className="cursor-pointer" />
              <FaInstagram size={30} className="cursor-pointer" />
              <FaPinterest size={30} className="cursor-pointer" />
            </div>

            {/* brand-logo */}
            <div className="flex items-center justify-center ">
              <img
                className="w-[200px]"
                src="../../public/img/logo-white.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <p className="text-white text-center md:mt-6">
          Copyright © 2022, All Rights Reserved
        </p>
      </section>
    </div>
  );
}

export default Footer;
