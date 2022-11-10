import Image from "next/image";
import React, { useEffect, useState } from "react";
import LogoSlider from "../Common/LogoSlider/LogoSlider";

const OurClient = () => {
  const [dotbg, setDotbg] = useState({});

  useEffect(() => {
    fetch("/Data/DifferentPart.json")
      .then((res) => res.json())
      .then((differnet) => setDotbg(differnet));
  }, []);
 
  return (
    <>
      <section className="recent_section md:py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <div className="max-w-[536px] relative">
                <h2 className="font-bold text-xl md:text-[40px] leading-[30px] md:leading-[60px] text-[#393E50] text-center md:text-left mb-10 z-10 md:pl-[71px] pt-10 md:pt-[54px]">
                  Our Client Says We Love
                  <span className="text-[#30A7D7] ml-1">What We Do</span>
                </h2>
                <span className="absolute top-0 left-0 -z-10 hidden md:block">
                  <Image src="/assets/images/our_client_say/dot-bg.webp" alt="" width={131} height={132}/>
                </span>
              </div>
              <div className="max-w-[760px] mx-auto mb-[64px]">
                <p className="font-medium text-sm md:text-base leading-[24px] text-[#393E50] text-center mb-10">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate
                </p>
                <h4 className="font-medium text-base md:text-2xl leading-9 text-[#393e50] text-center">
                  Azad Alim
                </h4>
                <p className="font-normal text-sm md:text-base leading-6 text-[rgba(57,62,80,0.4)] text-center">
                  CTO, Eric Frank
                </p>
              </div>
                <LogoSlider/>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurClient;
