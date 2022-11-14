import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero py-16">
        <div className="container">
          <div className="flex flex-row items-center justify-between flex-col md:flex-row gap-4">
            <div className="title basis-full md:basis-1/2 pr-0 md:pr-[5%]">
              <h2 className="font-bold text-2xl md:text-[30px] lg:text-[43px] xl:text-[64px] lg:leading-[96px] text-[#393E50] text-center md:text-left mb-2 md:mb-10">
                Digital Solutions for
                <span className="text-[#30A7D7] ml-2">Growing Busniess</span>
              </h2>
              <p className="font-normal text-base leading-[24px] text-[rgba(57,62,80,0.4)] text-center md:text-left">
                “We have a chance, if we stay focused and choose wisely, to
                really continue to impact people’s lives in some small way for
                the better.”
              </p>
            </div>
            <div className="img basis-full md:basis-1/2">
              <Image
                src={"/assets/images/hero/imac.webp"}
                alt=""
                width={700}
                height={565}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
