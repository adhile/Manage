import React from "react";

function Hero() {
  return (
    <div>
      <div className="section" id="hero">
        {/* flex-container */}
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          {/* left-item */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2  ">
            <h1 className="max-w-md  text-4xl font-bold text-center md:text-5xl md:text-left">
              Bring everyone togather to build better products.
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              magnam aut, quasi ipsa perspiciatis reprehenderit.
            </p>
            {/* button */}
            <div className="flex justify-center md:justify-start">
              <a
                href="#"
                className="  bg-brightRed p-3 px-6 pt-2 rounded-full text-white baseline hover:bg-brightRedLight max-w-[40%] text-center "
              >
                Get Started
              </a>
            </div>
          </div>
          {/* image */}
          <div className=" md:w-1/2">
            <img src="../../public/img/illustration-intro.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
