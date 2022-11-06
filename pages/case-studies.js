import Image from "next/image";
import React, { useEffect, useState } from "react";

const CaseStudies = () => {
  const [expanded, setExpanded] = useState(false);
  const [recentPost, setRecentPost] = useState({});
  const [futuredPost, setFuturedPost] = useState({});
  
  const [blog, setBlog] = useState([]);
  const dataForDisplay = expanded ? blog : blog.slice(0, 6);



  useEffect(() => {
    fetch("/Data/recentPost.json")
      .then((res) => res.json())
      .then((recentPost) => setRecentPost(recentPost));
  }, []);


  useEffect(() => {
    fetch("/Data/futuredPost.json")
      .then((res) => res.json())
      .then((futuredPost) => setFuturedPost(futuredPost));
  }, []);

  useEffect(() => {
    fetch("/Data/blog.json")
      .then((res) => res.json())
      .then((blog) => setBlog(blog));
  }, []);


  
  return (
    <>
      {/* <!-- hero section --> */}
      <section className="case-hero py-4 md:py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="title col-span-12 lg:col-span-8 relative">
              <div className="">
                <Image
                  className="rounded-[10px] max-w-[526px] w-full ml-auto"
                  src={"/assets/images/case-studies-hero/hero-left.png"}
                  alt=""
                  width={526}
                  height={344}
                />
                <div className="bg-white rounded-[10px] shadow-[0px_4px_40px_rgba(48,167,215,0.1)] p-5 max-w-[450px] w-full inherit md:absolute top-1/2 left-[0%] mt-10 md:mt-0 md:-translate-y-1/2">
                  <h2 className="font-bold text-xl md:text-[28px] lg:text-[32px] lg:leading-[48px] text-[#30A7D7] text-left md:text-center lg:text-left mb-2 md:mb-10">
                    Increase your monthly traffic and sales
                  </h2>
                  <div className="flex items-center justify-between">
                    <p className="date font-normal text-sm leading-[21px] text-[rgba(57,62,80,0.4)]">
                      Posted 04.25.2019
                    </p>
                    <p className="min font-normal text-sm leading-[21px] text-[rgba(57,62,80,0.4)]">
                      5min to read
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="img col-span-12 lg:col-span-4">
              <h4 className="font-bold text-lg md:text-2xl leading-9 text-[#30A7D7] mb-6 text-center">
                Trending Post
              </h4>
              <div>
                <Image
                  className="rounded-[10px] mb-2 w-full object-cover"
                  src={"/assets/images/case-studies-hero/hero-right.png"}
                  alt=""
                  width={461}
                  height={277}
                />
              </div>
              <p className="font-medium text-base leading-6 text-[#393e50] text-center lg:text-left">
                Increase your monthly traffic and sales
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- hero section --> */}

      {/* <!-- futured --> */}
      <section className="futured py-4 lg:py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <h2 className="font-bold text-lg md:text-[40px] leading-[60px] text-[#30a7d7] text-center mb-10 md:mb-16">
                Featured Post
              </h2>
              <div className="futured-slider grid grid-cols-12 gap-4">
                {futuredPost.length > 0 &&
                  futuredPost.map((item) => (
                    <div
                      key={item.id}
                      className="futured-slider-item col-span-12 md:col-span-6 lg:col-span-3"
                    >
                      <div className="mb-[15px]">
                        <Image
                          className="rounded-[10px] w-full"
                          src={`/assets/images/futured/${item.img}.png`}
                          alt=""
                          width={342}
                          height={212}
                        />
                      </div>
                      <p className="font-normal text-sm leading-6 text-[#393e50]">
                        {item.desc}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- futured --> */}

      {/* <!-- recent post section --> */}
      <section className="recent-post py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="title col-span-12 lg:col-span-8">
              <div className="">
                <Image
                  className="rounded-[20px] w-full"
                  src={"/assets/images/recent-post/left-img.jpg"}
                  alt=""
                  width={939}
                  height={395}
                />
                <div className="max-w-[484px] mx-auto">
                  <p className="min font-normal text-sm leading-[21px] text-[rgba(57,62,80,0.4)] block md:hidden mt-10 text-center">
                    Posted 04.25.2019
                  </p>
                  <h2 className="font-bold text-2xl leading-[36px] text-[#393E50] text-left md:text-center my-6">
                    Increase your monthly traffic and sales
                  </h2>
                  <div className="flex items-center justify-between md:justify-around">
                    <p className="date font-normal text-sm leading-[21px] text-[rgba(57,62,80,0.4)]">
                      500 views
                    </p>
                    <p className="min font-normal text-sm leading-[21px] text-[rgba(57,62,80,0.4)] hidden md:block">
                      Posted 04.25.2019
                    </p>
                    <p className="min font-normal text-sm leading-[21px] text-[rgba(57,62,80,0.4)]">
                      5min to read
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="img col-span-12 lg:col-span-4">
              <h4 className="font-bold text-2xl leading-9 text-[#30A7D7] mb-6 text-center">
                Recent Post
              </h4>
              <div className="flex items-center gap-4 flex-col">
                {recentPost.length > 0 &&
                  recentPost.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-start gap-6"
                    >
                      <div className="img max-w-[86px] max-h-[86px] rounded-[8px] overflow-hidden">
                        <Image
                          className="w-full h-full"
                          src={`/assets/images/recent-post/${item.img}.png`}
                          alt=""
                          width={86}
                          height={86}
                        />
                      </div>
                      <div className="content">
                        <h4 className="font-medium text-base leading-6 text-[#393e50] mb-2">
                          {item.desc}
                        </h4>
                        <p className="font-normal text-sm leading-5 text-[rgba(57,62,80,0.4)]">
                          <span>Posted</span> {item.date}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- recent post section --> */}

      {/* <!-- blog item --> */}
      
        <section className="blog">
          <div className="container">
         <div className="blog_item grid grid-cols-12 gap-4">
              {dataForDisplay.length > 0 && dataForDisplay.map((item, index) => 
                <div key={index} className="col-span-12 md:col-span-4">
                  <div className="img rounded-[10px] overflow-hidden mb-4">
                    <Image
                      className="w-full"
                      src={`/assets/images/blog/${item.img}.png`}
                      alt=""
                      width={461}
                      height={286}
                    />
                  </div>
                  <div className="content">
                    <h4 className="font-medium text-base leading-6 text-[#393e50] mb-5">
                      {item.title}
                    </h4>
                    <p className="font-normal text-sm leading-[21px] text-[rgba(57,62,80,0.8)] mb-[10px]">
                      {item.desc}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="font-normal text-sm leading-[21px] text-[rgba(57,62,80,0.4)]">
                        <span>Posted</span> {item.date}
                      </p>
                      <p className="font-normal text-sm leading-[21px] text-[rgba(57,62,80,0.4)]">
                        {item.readTime}min to read
                      </p>
                    </div>
                  </div>
                </div>
              )}
              <div className="col-span-12">
                <button
                  type="button"
                  onClick={() => setExpanded(!expanded)}
                  className="mt-5 text-sm font-semibold uppercase text-white bg-[#30A7D7] rounded-lg max-w-[294px] max-h-[44px] w-full h-full mx-auto block"
                >
                  {expanded ? "Show Less" : "Show More"}
                </button>
              </div>
            </div>
          </div>
        </section>
      
      {/* <!-- blog item --> */}
    </>
  );
};

export default CaseStudies;
