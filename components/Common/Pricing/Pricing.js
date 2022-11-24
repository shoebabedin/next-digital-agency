import React from "react";

const Pricing = () => {
  return (
    <>
      <section id="subscription">
        <div className="max-w-[1184px] mx-auto px-4">
          <h2 className="font-bold text-2xl md:text-[40px] leading-9 md:leading-[60px] text-[#393e50] text-center md:mb-20 capitalize">
            Plan Every Thing from Sketch
          </h2>
          <div className="flex justify-center flex-col lg:flex-row gap-4">
            <div
              className="card basis-2/6 bg-white rounded-[20px] p-9 md:p-10 hover:shadow-[0px_25px_32px_rgba(48,167,215,0.08)] transition ease-in-out delay-500 flex items-start justify-between flex-col"
            >
              <p
                className="font-medium text-xl md:text-2xl leading-9 text-[#393e50] mb-5"
              >
                Free
              </p>
              <p
                className="font-light text-[30px] md:text-[40px] leading-9 text-[rgba(57,62,80,0.4)] mb-5"
              >
                $0/<sub>mo</sub>
              </p>
              <ul className="bg-[rgba(48,167,215,0.05)] p-[10px] mb-5 w-full">
                <li
                  className="font-normal text-xs md:text-sm text-[rgba(57,62,80,0.6)] leading-[21px] mb-[10px]"
                >
                  Reach up to 500k contacts
                </li>
                <li
                  className="font-normal text-xs md:text-sm text-[rgba(57,62,80,0.6)] leading-[21px] mb-[10px]"
                >
                  Unlimited emails/mo
                </li>
                <li
                  className="font-normal text-xs md:text-sm text-[rgba(57,62,80,0.6)] leading-[21px]"
                >
                  Unlimited Web Push
                </li>
              </ul>
              <h5
                className="font-medium text-sm md:text-base text-[#393e50] leading-6"
              >
                Others included Features
              </h5>
              <ul className="my-5">
                <li
                  className="font-normal text-xs md:text-sm leading-[21px] text-[rgba(57,62,80,0.6)] mb-[10px]"
                >
                  Professional Looking Email Templates
                </li>
                <li
                  className="font-normal text-xs md:text-sm leading-[21px] text-[rgba(57,62,80,0.6)] mb-[10px]"
                >
                  Pre-built Automations & Workflows
                </li>
                <li
                  className="font-normal text-xs md:text-sm leading-[21px] text-[rgba(57,62,80,0.6)] mb-[10px]"
                >
                  Popups & Signup Forms
                </li>
                <li
                  className="font-normal text-xs md:text-sm leading-[21px] text-[rgba(57,62,80,0.6)] mb-[10px]"
                >
                  Segmentation & Customer Analytics
                </li>
                <li
                  className="font-normal text-xs md:text-sm leading-[21px] text-[rgba(57,62,80,0.6)] mb-[10px]"
                >
                  A/B Testing
                </li>
              </ul>

              <button
                className="bg-[#30A7D7] rounded-lg font-semibold text-xs md:text-sm leading-5 text-white py-2 md:py-3 w-full mt-5"
              >
                Start
              </button>
            </div>
            <div
              className="card basis-2/6 bg-white rounded-[20px] p-9 md:p-10 hover:shadow-[0px_25px_32px_rgba(48,167,215,0.08)] transition ease-in-out delay-500 flex items-start justify-between flex-col"
            >
              <p
                className="font-medium text-xl md:text-2xl leading-9 text-[#393e50] mb-5"
              >
                Standard
              </p>
              <p
                className="font-light text-[30px] md:text-[40px] leading-9 text-[rgba(57,62,80,0.4)] mb-5"
              >
                $150/<sub>mo</sub>
              </p>
              <ul className="bg-[rgba(48,167,215,0.05)] p-[10px] mb-5  w-full">
                <li
                  className="font-normal text-xs md:text-sm text-[rgba(57,62,80,0.6)] leading-[21px] mb-[10px]"
                >
                  Reach up to 50000 contacts
                </li>
                <li
                  className="font-normal text-xs md:text-sm text-[rgba(57,62,80,0.6)] leading-[21px] mb-[10px]"
                >
                  Unlimited emails/mo
                </li>
                <li
                  className="font-normal text-xs md:text-sm text-[rgba(57,62,80,0.6)] leading-[21px]"
                >
                  Unlimited Web Push
                </li>
              </ul>
              <h5
                className="font-medium text-sm md:text-base text-[#393e50] leading-6"
              >
                Others included Features
              </h5>
              <ul className="my-5">
                <li
                  className="font-normal text-xs md:text-sm leading-[21px] text-[rgba(57,62,80,0.6)] mb-[10px]"
                >
                  Customer Success Manager
                </li>
                <li
                  className="font-normal text-xs md:text-sm leading-[21px] text-[rgba(57,62,80,0.6)] mb-[10px]"
                >
                  24/7 Priority Support
                </li>
                <li
                  className="font-normal text-xs md:text-sm leading-[21px] text-[rgba(57,62,80,0.6)] mb-[10px]"
                >
                  A/B Testing
                </li>
                <li
                  className="font-normal text-xs md:text-sm leading-[21px] text-[rgba(57,62,80,0.6)] mb-[10px]"
                >
                  Customer Support Via Email
                </li>
              </ul>

              <button
                className="bg-[#30A7D7] rounded-lg font-semibold text-xs md:text-sm leading-5 text-white py-2 md:py-3 w-full mt-5"
              >
                Start
              </button>
            </div>
            <div
              className="card basis-2/6 bg-white rounded-[20px] p-9 md:p-10 hover:shadow-[0px_25px_32px_rgba(48,167,215,0.08)] transition ease-in-out delay-500 flex items-start justify-between flex-col"
            >
              <p
                className="font-medium text-xl md:text-2xl leading-9 text-[#393e50] mb-5"
              >
                Premium
              </p>
              <p
                className="font-light text-[30px] md:text-[40px] leading-9 text-[rgba(57,62,80,0.4)] mb-5"
              >
                $650/<sub>mo</sub>
              </p>
              <ul className="bg-[rgba(48,167,215,0.05)] p-[10px] mb-5  w-full">
                <li
                  className="font-normal text-xs md:text-sm text-[rgba(57,62,80,0.6)] leading-[21px] mb-[10px]"
                >
                  Reach up to 500k contacts
                </li>
                <li
                  className="font-normal text-xs md:text-sm text-[rgba(57,62,80,0.6)] leading-[21px] mb-[10px]"
                >
                  Unlimited emails/mo
                </li>
                <li
                  className="font-normal text-xs md:text-sm text-[rgba(57,62,80,0.6)] leading-[21px]"
                >
                  Unlimited Web Push
                </li>
              </ul>
              <h5
                className="font-medium text-xs md:text-base text-[#393e50] leading-6"
              >
                Others included Features
              </h5>
              <ul className="my-5">
                <li
                  className="font-normal text-xs md:text-sm leading-[21px] text-[rgba(57,62,80,0.6)] mb-[10px]"
                >
                  Advanced Reporting
                </li>
                <li
                  className="font-normal text-xs md:text-sm leading-[21px] text-[rgba(57,62,80,0.6)] mb-[10px]"
                >
                  Customer Success Manager
                </li>
                <li
                  className="font-normal text-xs md:text-sm leading-[21px] text-[rgba(57,62,80,0.6)] mb-[10px]"
                >
                  24/7 Priority Support
                </li>
              </ul>

              <button
                className="bg-[#30A7D7] rounded-lg font-semibold text-xs md:text-sm leading-5 text-white py-2 md:py-3 w-full mt-5"
              >
                Start
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
