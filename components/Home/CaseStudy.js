import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CaseStudy = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/Data/caseimg.json")
      .then((res) => res.json())
      .then((differnet) => setData(differnet));
  }, []);

  return (
    <>
      <section className="case_studies py-16">
        <div className="container">
          <div className="grid grid-cols-12 lg:gap-[64px]">
            <div className="col-span-12 max-w-[635px] mx-auto text-center">
              <h2 className="font-bold text-xl md:text-[40px] leading-[60px] text-[#393E50]">
                Case
                <span className="text-[#30A7D7]">Studies</span>
              </h2>
              <p className="font-normal text-sm leading-[24px] text-[rgba(57,62,80,0.4)]">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate
              </p>
            </div>
            <div className="col-span-12">
              <div className="gellary !hidden md:!grid">
                {data.length > 0 &&
                  data.map((item, index) => (
                    <div
                      key={index}
                      className="gellary_img relative rounded-[20px] overflow-hidden"
                    >
                      <Image
                        src={`/assets/images/case_studies/${item.img}.png`}
                        alt=""
                        width={696}
                        height={327}
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-black/30">
                        <p className="text-white font-normal text-sm leading-6 absolute bottom-11 left-11">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              {/* <!-- gellary slider --> */}
              <div className="gellary_slider md:hidden mt-10">
                {data.length > 0 &&
                  data.map((item, index) => (
                    <div
                      key={index}
                      className="gellary_img relative rounded-[20px] overflow-hidden mb-2"
                    >
                      <Image
                        className="h-full w-full object-cover"
                        src={`/assets/images/case_studies/${item.img}.png`}
                        alt=""
                        width={461}
                        height={286}
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-black/30">
                        <p className="text-white font-normal text-sm leading-6 absolute bottom-11 left-11">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
              {/* <!-- gellary slider --> */}
              <Link
                role="button"
                href="/case-studies"
                className="bg-[#30A7D7] max-w-[267px] max-h-[44px] flex items-center justify-center w-full h-full rounded-[8px] mt-10 mx-auto font-semibold text-sm leading-[20px] text-white"
              >
                See All
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudy;
