import React from "react";

function Features() {
  return (
    <section id="features">
      {/* flex-container */}
      <div className="container flex flex-col mx-auto px-4 mt-10 space-y-12 md:space-x-12 md:space-y-0 md:flex-row ">
        {/* left-item */}
        <div className="flex flex-col space-y-12 md:w-1/2  ">
          <h2 className="mx-w-md text-4xl font-bold text-center md:text-left ">
            What's different about Manage?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        {/* right-item */}
        <div className="  flex flex-col  space-y-8 md:w-1/2">
          {/* item-1 */}
          <div className="mb-4 flex flex-col  space-y-3 md:flex-row md:space-y-0 md:space-x-6  ">
            {/* heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-white">
              <div className="flex space-x-3 items-center ">
                <div className="px-4 py-2 text-white rounded-full bg-brightRed">
                  01
                </div>
                <h3 className=" mb-2 text-base font-bold md:hidden">
                  Track company-wide progress
                </h3>
              </div>
            </div>
            {/* body */}
            <div>
              <h3 className="hidden  mb-2 text-lg font-bold md:block">
                Track company-wide progress
              </h3>
              <p className="text-darkGrayishBlue">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way down to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>
          {/* item-2 */}
          <div className="mb-4 flex flex-col  space-y-3 md:flex-row md:space-y-0 md:space-x-6  ">
            {/* heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-white">
              <div className="flex space-x-3 items-center ">
                <div className="px-4 py-2 text-white rounded-full bg-brightRed">
                  02
                </div>
                <h3 className=" mb-2 text-base font-bold md:hidden">
                  Advanced built-in reports
                </h3>
              </div>
            </div>
            {/* body */}
            <div>
              <h3 className="hidden  mb-2 text-lg font-bold md:block">
                Advanced built-in reports
              </h3>
              <p className="text-darkGrayishBlue">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed
              </p>
            </div>
          </div>
          {/* item-3 */}
          <div className="mb-4 flex flex-col  space-y-3 md:flex-row md:space-y-0 md:space-x-6  ">
            {/* heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-white">
              <div className="flex space-x-3 items-center ">
                <div className="px-4 py-2 text-white rounded-full bg-brightRed">
                  03
                </div>
                <h3 className=" mb-2 text-base font-bold md:hidden">
                  Everything you need in one place
                </h3>
              </div>
            </div>
            {/* body */}
            <div>
              <h3 className="hidden  mb-2 text-lg font-bold md:block">
                Everything you need in one place
              </h3>
              <p className="text-darkGrayishBlue">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
