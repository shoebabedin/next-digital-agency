import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { List, X } from "phosphor-react";
import * as React from "react";
import { useEffect, useState } from "react";

const NavBar = () => {
  // const page = window.location.pathname === "/";

  // const [show, setShow] = useState(false);
  const [mobNavShow, setMobNavShow] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  

  const asPath = useRouter();
  const page = asPath.route;

  useEffect(() => {
    window.onscroll = () => {
      setStickyNav(window.pageYOffset < 100 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);

  const navShow = () => {
    setMobNavShow(!mobNavShow);
  };

  return (
    <header
      className={`bg-[#F6FDFF] shadow-[0px_4px_32px_rgba(48,167,215,0.2)] ${
        stickyNav ? "sticky" : ""
      }`}
    >
      <nav className="relative px-2 py-4">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image src="/assets/images/logo/logo.png" className="object-scale-down" alt="" width={135} height={33}/>
            </Link>
            <ul className="hidden md:flex space-x-6">
              <li>
                <Link
                  href="/"
                  className={`text-base font-normal leading-[22px] text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500 ${page === '/' ? 'active' : ''}`}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="about-us"
                  className={`text-base font-normal leading-[22px] text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500 ${page === '/about-us' ? 'active' : ''}`}
                >
                  ABOUT US
                </Link>
              </li>
              <li className="flex relative group">
                <Link
                  href="#"
                  className={`mr-1 text-base font-normal leading-[22px] text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500`}
                >
                  SERVICES
                </Link>
                {/* <!-- Submenu starts --> */}
                <ul className="absolute bg-white p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg flex items-start justify-center flex-col gap-4 rounded-[12px]">
                  <li className={`text-base font-normal leading-[22px] text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500 ${page === '/web-development' ? 'active' : ''}`}>
                    <Link href="/web-development">Web Development</Link>
                  </li>
                  <li className={`text-base font-normal leading-[22px] text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500 ${page === '/email-marketing' ? 'active' : ''}`}>
                    <Link href="/email-marketing">Email Marketing</Link>
                  </li>
                  <li className={`text-base font-normal leading-[22px] text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500 ${page === '/video-marketing' ? 'active' : ''}`}>
                    <Link href="/video-marketing">Video Marketing</Link>
                  </li>
                  <li className={`text-base font-normal leading-[22px] text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500 ${page === '/seo' ? 'active' : ''}`}>
                    <Link href="/seo">SEO</Link>
                  </li>
                  <li className={`text-base font-normal leading-[22px] text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500 ${page === '/social-marketing' ? 'active' : ''}`}>
                    <Link href="/social-marketing">Social Marketing</Link>
                  </li>
                  <li className={`text-base font-normal leading-[22px] text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500 ${page === '/sms-marketing' ? 'active' : ''}`}>
                    <Link href="/sms-marketing">SMS Marketing</Link>
                  </li>
                </ul>
                {/* <!-- Submenu ends --> */}
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className={`text-base font-normal leading-[22px] text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500 ${page === '/case-studies' ? 'active' : ''}`}
                >
                  CASE STUDIES
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`text-base font-normal leading-[22px] text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500 ${page === '/contact' ? 'active' : ''}`}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
            {/* <!-- Mobile menu icon --> */}
            <button onClick={navShow} id="mobile-icon" className="md:hidden">
              {/* <List size={28} color="#404040" weight="bold" /> */}
              {mobNavShow ? (
                <X size={28} color="#404040" weight="bold"/>
              ) : (
                <List size={28} color="#404040" weight="bold"/>
              )}
            </button>
          </div>
        </div>

        {/* <!-- Mobile menu --> */}
       <div className={`md:hidden flex justify-center w-full`} >
          <div
            id="mobile-menu"
            className={`mobile-menu absolute top-[65px] w-full bg-white shadow-lg leading-9 font-bold h-[calc(100vh-1rem)] overflow-y-auto pt-6 pb-12 px-6 ${mobNavShow ? 'block active' : ''}`}
          >
            <ul className="flex items-start justify-start flex-col gap-2">
              <li className={`border-b-2 border-white text-[#393e50] hover:text-[#30A7D7] font-normal text-sm leading-5 ${page === '/' ? 'active' : ''}`}>
                <Link href="/" className="">
                  HOME
                </Link>
              </li>
              <li className={`border-b-2 border-white text-[#393e50] hover:text-[#30A7D7] font-normal text-sm leading-5 ${page === '/about-us' ? 'active' : ''}`}>
                <Link href="/about-us" className="">
                  ABOUT US
                </Link>
              </li>
              <li className={`border-b-2 border-white text-[#393e50] hover:text-[#30A7D7] font-normal text-sm leading-5`}>
                <p href="#" className="">
                  SERVICES
                </p>

                {/* <!-- Submenu starts --> */}
                <ul className="border-l border-[#393E50] ml-4 px-4 items-start justify-start flex-col gap-4">
                  <li className={`text-[#393e50] hover:text-[#30A7D7] font-normal text-sm leading-5 ${page === '/web-development' ? 'active' : ''}`}>
                    <Link className="" href="/web-development">
                      Web Development
                    </Link>
                  </li>
                  <li className={`text-[#393e50] hover:text-[#30A7D7] font-normal text-sm leading-5 ${page === '/email-marketing' ? 'active' : ''}`}>
                    <Link className="" href="/email-marketing">
                      Email Marketing
                    </Link>
                  </li>
                  <li className={`text-[#393e50] hover:text-[#30A7D7] font-normal text-sm leading-5 ${page === '/video-marketing' ? 'active' : ''}`}>
                    <Link className="" href="/video-marketing">
                      Video Marketing
                    </Link>
                  </li>
                  <li className={`text-[#393e50] hover:text-[#30A7D7] font-normal text-sm leading-5 ${page === '/seo' ? 'active' : ''}`}>
                    <Link className="" href="/seo">
                      SEO
                    </Link>
                  </li>
                  <li className={`text-[#393e50] hover:text-[#30A7D7] font-normal text-sm leading-5 ${page === '/social-marketing' ? 'active' : ''}`}>
                    <Link
                      className=""
                      href="/social-marketing"
                    >
                      Social Marketing
                    </Link>
                  </li>
                  <li className={`text-[#393e50] hover:text-[#30A7D7] font-normal text-sm leading-5 ${page === '/sms-marketing' ? 'active' : ''}`}>
                    <Link className="" href="/sms-marketing">
                      SMS Marketing
                    </Link>
                  </li>
                </ul>
                {/* <!-- Submenu ends --> */}
              </li>
              <li className={`border-b-2 border-white text-[#393e50] hover:text-[#30A7D7] font-normal text-sm leading-5 ${page === '/case-studies' ? 'active' : ''}`}>
                <Link href="/case-studies" className="">
                  CASE STUDIES
                </Link>
              </li>
              <li className={`border-b-2 border-white text-[#393e50] hover:text-[#30A7D7] font-normal text-sm leading-5 ${page === '/contact' ? 'active' : ''}`}>
                <Link href="/contact" className="">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
