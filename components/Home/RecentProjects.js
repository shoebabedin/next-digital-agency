import Image from "next/image";
import { ArrowsOut } from "phosphor-react";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const RecentProjects = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/Data/project.json")
      .then((res) => res.json())
      .then((differnet) => setData(differnet));
  }, []);

  
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <>
      <section className="recent_section md:py-16">
        <div className="heading max-w-[635px] mx-auto text-center mb-16 overflow-x-hidden">
          <h2 className="font-bold text-xl md:text-[40px] leading-[60px] text-[#393E50]">
            Recent
            <span className="text-[#30A7D7] ml-1">Projects</span>
          </h2>
          <p className="font-normal text-base leading-[24px] text-[rgba(57,62,80,0.4)]">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate
          </p>
        </div>

        <Slider {...settings} className="project_slider overflow-hidden max-h-[400px]">
          {data.length > 0 && data.map((item, index) => (
            <div key={index} className="project_slider_item relative">
              <Image
                className="w-full focus-visible:outline-[0px] focus-visible:border-[0px]"
                src={`/assets/images/recent_project/${item.img}.webp`}
                alt=""
                width={807}
                height={316}
              />
              <div className="absolute bottom-0 flex items-center justify-between bg-black/[0.4] w-full py-[34px] px-[13px]">
                <p className="font-medium text-base text-white leading-[22px]">
                  {item.title}
                </p>
                <span className="">
                  <ArrowsOut size={28} color="#fff" weight="bold" />
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default RecentProjects;
