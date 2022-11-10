import Image from "next/image";
import React from "react";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import Accordion from "../components/Common/Accordion/Accordion";
import CustomPlan from "../components/Common/CustomPlan/CustomPlan";
import LogoSlider from "../components/Common/LogoSlider/LogoSlider";
// import Accordion from "../../Common/Accordion/Accordion";
// import CustomPlan from "../../Common/CustomPlan/CustomPlan";
// import LogoSlider from "../../Common/LogoSlider/LogoSlider";

const About = () => {
 

  return (
    <>
      {/* <!-- hero section --> */}
      <section className="about-hero py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="title col-span-12 lg:col-span-4 order-2 lg:order-1">
              <h2 className="font-bold text-xl md:text-[28px] lg:text-[32px] lg:leading-[48px] text-[#393E50] text-left md:text-center lg:text-left mb-2 md:mb-10">
                Affirm unleashes your business potential by the constant
                innovation.
              </h2>
              <p className="font-normal text-sm md:text-base leading-[24px] text-[rgba(57,62,80,0.4)] text-left md:text-center lg:text-left">
                Based in Paris, we work closely with clients from around the
                world, getting to the heart of their business to develop
                successful digital ideas and more.
              </p>
            </div>
            <div className="img col-span-12 lg:col-span-8 order-1 lg:order-2">
              <Image
                className="w-full"
                src={"/assets/images/about-hero/hero.webp"}
                alt=""
                width={939}
                height={549}
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- hero section --> */}

      {/* <!-- what we do --> */}
      <section className="what_we_do py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
              <Image
                src={"/assets/images/what-we-do/img.webp"}
                className="w-full h-full rounded-2xl"
                alt=""
                width={700}
                height={518}
              />
            </div>
            <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
              <span className="font-normal text-base leading-6 text-[#30A7D7]">
                What we do
              </span>
              <h2 className="font-bold text-2xl md:text-[40px] leading-8 md:leading-[60px] text-[#393e50] mb-10">
                Research. Analysis. Grow
              </h2>
              <ul>
                <li className="mb-6">
                  <h4 className="font-bold text-base md:text-2xl leading-9 text-[#393e50] mb-2">
                    Mission
                  </h4>
                  <p className="font-normal text-sm md:text-base leading-6 text-[rgba(57,62,80,0.4)]">
                    Based in Paris, we work closely with clients from around the
                    world, getting to the heart of their business to develop
                    successful digital ideas and more.
                  </p>
                </li>
                <li className="mb-6">
                  <h4 className="font-bold text-base md:text-2xl leading-9 text-[#393e50] mb-2">
                    Vision
                  </h4>
                  <p className="font-normal text-sm md:text-base leading-6 text-[rgba(57,62,80,0.4)]">
                    Based in Paris, we work closely with clients from around the
                    world, getting to the heart of their business to develop
                    successful digital ideas and more.
                  </p>
                </li>
                <li className="mb-6">
                  <h4 className="font-bold text-base md:text-2xl leading-9 text-[#393e50] mb-2">
                    Goals
                  </h4>
                  <p className="font-normal text-sm md:text-base leading-6 text-[rgba(57,62,80,0.4)]">
                    Based in Paris, we work closely with clients from around the
                    world, getting to the heart of their business to develop
                    successful digital ideas and more.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- what we do --> */}

      {/* <!-- frequently asked question --> */}
      <Accordion/>
      {/* <!-- frequently asked question --> */}

      {/* <!-- Our Client Say --> */}
      <section className="recent_section py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="font-bold text-xl md:text-[40px] leading-[30px] md:leading-[60px] text-[#393E50] mb-10">
                We Provide you the best
                <span className="text-[#30A7D7] ml-2">Experience</span>
              </h2>
              <p className="font-medium text-sm md:text-base leading-[24px] text-[#393E50] mb-10">
                Based in Paris, we work closely with clients from around the
                world, getting to the heart of their business to develop
                successful digital ideas and more.
              </p>
              <ul className="flex items-center justify-center md:justify-between flex-wrap gap-5 md:gap-10">
                <li className="text-center">
                  <h2 className="font-bold text-[32px] md:text-[64px] leading-[45px] md:leading-[96px] text-[#393e50]">
                    <CountUp start={0} end={19} duration={2} >
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start}>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    +
                  </h2>
                  <p className="font-normal text-sm md:text-base leading-6 text-[rgba(57,62,80,0.4)]">
                    Total Top Services
                  </p>
                </li>
                <li className="text-center">
                  <h2 className="font-bold text-[32px] md:text-[64px] leading-[45px] md:leading-[96px] text-[#393e50]">
                    <CountUp start={0} end={27} duration={2} >
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start}>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    +
                  </h2>
                  <p className="font-normal text-sm md:text-base leading-6 text-[rgba(57,62,80,0.4)]">
                    Total Top Services
                  </p>
                </li>
                <li className="text-center">
                  <h2 className="font-bold text-[32px] md:text-[64px] leading-[45px] md:leading-[96px] text-[#393e50]">
                    <CountUp start={0} end={100} duration={2} >
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start}>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    %
                  </h2>
                  <p className="font-normal text-sm md:text-base leading-6 text-[rgba(57,62,80,0.4)]">
                    Total Top Services
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Image
                className="py-[17px] md:px-[28px]"
                src={"/assets/images/our_client_say/right-experience.webp"}
                alt=""
                width={580}
                height={365}
              />
            </div>
            <div className="col-span-12 mt-16">
              <LogoSlider/>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Our Client Say --> */}

      {/* <!-- Custome Plan --> */}
      <CustomPlan/>
      {/* <!-- Custome Plan --> */}
    </>
  );
};

export default About;
