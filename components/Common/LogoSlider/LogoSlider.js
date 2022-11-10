import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const LogoSlider = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/Data/client.json")
      .then((res) => res.json())
      .then((differnet) => setData(differnet));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <Slider {...settings} className="logo_slider">
        {data.length > 0 &&
          data.map((item, index) => (
            <div key={index} className="logo_slider_item">
              <Image
                className="mx-auto"
                src={`/assets/images/logo_slider/${item.img}.webp`}
                alt=""
                width={100}
                height={100}
              />
            </div>
          ))}
      </Slider>
    </>
  );
};

export default LogoSlider;
