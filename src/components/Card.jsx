import React from "react";

function Card() {
  return (
    <div>
      <section id="cards">
        <div className="flex flex-col mt-12 max-w-6xl text-center space-y-6 container mx-auto ">
          {/* heading */}
          <h3 className="text-4xl text-center font-bold mb-12  ">
            What's Different About Manage?
          </h3>
          {/* cards */}
          <div className="flex flex-col px-6  pt-12  space-y-24  overflow-y-scroll max-h-[300px] scrollable   md:space-y-0 md:flex-row md:space-x-6  ">
            {/* card1 */}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img
                src="../../public/img/avatar-anisha.png"
                className="w-16 -mt-14"
                alt=""
              />
              <h1 className="font-bold">Anisha Li</h1>
              <p className="text-center text-darkGrayishBlue">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
            {/* card2 */}
            <div className=" flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3 ">
              <img
                src="../../public/img/avatar-richard.png"
                className="w-16 -mt-14"
                alt=""
              />
              <h1 className="font-bold">Richard Watts</h1>
              <p className="text-center text-darkGrayishBlue">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
            {/* card3 */}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3 ">
              <img
                src="../../public/img/avatar-shanai.png"
                className="w-16 -mt-14"
                alt=""
              />
              <h1 className="font-bold">Ali Bravo</h1>
              <p className="text-center text-darkGrayishBlue">
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>
          </div>
          {/* button */}
          <div className=" my-16  ">
            <a
              href=""
              className=" bg-brightRed p-3 px-6 pt-2  rounded-full text-white baseline hover:bg-brightRedLight "
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;
