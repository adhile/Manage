import React from 'react'

function Banner() {
  return (
    <div>
      <section id="banner" className=" mt-16 bg-brightRed ">
        {/* banner-contaner */}
        <div className="container flex  flex-col items-center px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0 justify-between">
          <h2 className='text-white text-5xl font-bold leading-tight text-center md:text-4xl md:text-left md:max-w-xl '>Simplify how your team works today</h2>
          {/* button */}
          <div>
            <a
              href="#"
              className=" bg-veryLightGray p-3 px-6 pt-2  rounded-full text-brightRed baseline hover:bg-veryDarkBlue "
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner