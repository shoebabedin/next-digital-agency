import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer mt-[60px] md:mt-[131px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 pb-10 border-b border-[#A8ADB9]">
            <div className="col-span-12 lg:col-span-5">
              <Link href="./index.html" passHref legacyBehavior>
                <Image
                  className="max-w-[160px] lg:max-w-[330px] mx-auto lg:mr-auto lg:ml-0"
                  src="/assets/images/footer/footer_logo.png"
                  alt=""
                  width={330}
                  height={80}
                />
              </Link>
              <p className="lg:max-w-[424px] py-10 font-normal text-base text-[#393e50]/[0.6] leading-6 text-center lg:text-left">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate
              </p>
              <Link
                className="font-normal text-base text-[#393e50]/[0.6] leading-6 text-center lg:text-left block"
                href="mailto:info@neumohive.xyz"
              >
                info@neumohive.xyz
              </Link>
            </div>
            <div className="col-span-6 lg:col-span-2">
              <h4 className="font-semibold text-base leading-6 text-[#393e50] mb-10">
                Services
              </h4>
              <ul className="flex items-start justify-center gap-4 flex-col">
                <li>
                  <Link
                    className="font-normal text-base leading-6 text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500"
                    href="/email-marketing"
                  >
                    Email Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-normal text-base leading-6 text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500"
                    href="/sms-marketing"
                  >
                    SMS Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-normal text-base leading-6 text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500"
                    href="/social-marketing"
                  >
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-normal text-base leading-6 text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500"
                    href="/web-development"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-normal text-base leading-6 text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500"
                    href="/video-marketing"
                  >
                    Video Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-normal text-base leading-6 text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500"
                    href="/seo"
                  >
                    SEO
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-6 lg:col-span-2">
              <h4 className="font-semibold text-base leading-6 text-[#393e50] mb-10 text-right lg:text-left">
                Comapny
              </h4>
              <ul className="flex items-end lg:items-start justify-center gap-4 flex-col">
                <li>
                  <Link
                    className="font-normal text-base leading-6 text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500"
                    href="/about-us"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-normal text-base leading-6 text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500"
                    href="/case-studies"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-normal text-base leading-6 text-[#393e50] hover:text-[#30A7D7] ease-in-out duration-500"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <h4 className="font-semibold text-base leading-6 text-[#393e50] mb-10 text-center lg:text-left">
                Our Address
              </h4>
              <p className="font-normal text-base leading-6 text-[#393e50] mb-[14px] text-center lg:text-left">
                198 West 21th Streat, South 721, New York, NY 10016
              </p>
              <ul className="flex items-center gap-[15px] justify-center lg:justify-start">
                <li>
                  <Link
                    className="w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#3D5998] flex items-center justify-center group hover:shadow-[0px_3px_10px_rgba(0,0,0,.25)] ease-in-out duration-500"
                    href="#"
                  >
                    <svg
                      className="group-hover:fill-[#fff]"
                      width="8"
                      height="16"
                      viewBox="0 0 8 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-[#fff] group-hover:!opacity-100 ease-in-out duration-500"
                        opacity="0.4"
                        d="M5.17237 4.83298V3.56797C5.1592 3.47018 5.1679 3.37069 5.19778 3.27665C5.22767 3.18261 5.27803 3.09637 5.34523 3.02412C5.41244 2.95188 5.49477 2.89542 5.58641 2.85882C5.67804 2.82223 5.77671 2.8064 5.87519 2.81248H7.63215V0.0979861H5.18116C4.7361 0.0610166 4.28834 0.121163 3.86881 0.274275C3.44928 0.427387 3.06804 0.669805 2.75141 0.984761C2.43478 1.29972 2.19029 1.6797 2.03497 2.09841C1.87964 2.51713 1.81708 2.96459 1.8517 3.40984V4.84176H0.279297V8.01306H1.86929V15.9194H5.03178V8.01306H7.37736L7.49156 6.76563L7.66722 4.84176L5.17237 4.83298Z"
                        fill="#393E50"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    className="w-[30px] h-[30px] rounded-full bg-transparent hover:bg-white flex items-center justify-center group hover:shadow-[0px_3px_10px_rgba(0,0,0,.25)] ease-in-out duration-500"
                    href="#"
                  >
                    <svg
                      width="17"
                      height="15"
                      viewBox="0 0 17 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-[#1DA1F2] group-hover:!opacity-100 ease-in-out duration-500"
                        opacity="0.4"
                        d="M16.9468 2.24297C16.3162 2.52173 15.6466 2.70244 14.9614 2.77884C15.6796 2.35767 16.2199 1.68939 16.4813 0.898899C15.7994 1.29262 15.0574 1.57159 14.2851 1.72467C13.8106 1.22639 13.1988 0.880392 12.5273 0.730646C11.8557 0.5809 11.1548 0.634165 10.5136 0.883672C9.8724 1.13318 9.31986 1.56766 8.92617 2.13192C8.53248 2.69618 8.31544 3.36473 8.30259 4.05264C8.30481 4.31268 8.33423 4.57178 8.39042 4.82569C7.02051 4.76192 5.67909 4.41248 4.45218 3.79978C3.22527 3.18708 2.13998 2.32466 1.26598 1.26786C0.949462 1.79881 0.785297 2.4067 0.791568 3.02481C0.793467 3.58796 0.934868 4.14187 1.20314 4.63702C1.47141 5.13218 1.85819 5.55314 2.3289 5.8623C1.78124 5.84271 1.24583 5.6953 0.765295 5.43184V5.47576C0.767871 6.26811 1.04643 7.03481 1.55305 7.64404C2.05967 8.25326 2.76262 8.66695 3.54121 8.81398C3.25475 8.89192 2.95957 8.93324 2.66273 8.93697C2.44451 8.9387 2.22669 8.9181 2.01266 8.87547C2.23905 9.55652 2.67206 10.1501 3.25145 10.5736C3.83085 10.9971 4.52788 11.2296 5.24551 11.2386C4.01416 12.1862 2.50349 12.699 0.949741 12.6968C0.668628 12.6968 0.396351 12.6968 0.124023 12.6968C1.70144 13.6938 3.52886 14.2237 5.39489 14.2254C7.63309 14.263 9.81489 13.5224 11.5677 12.1301C13.3205 10.7378 14.5356 8.78011 15.0054 6.59143C15.1617 5.91736 15.2413 5.22776 15.2426 4.53579C15.2426 4.38645 15.2426 4.23711 15.2426 4.09656C15.9203 3.58927 16.4981 2.9608 16.9468 2.24297V2.24297Z"
                        fill="#393E50"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    className="w-[30px] h-[30px] rounded-full bg-transparent hover:bg-[#125688] ease-in-out duration-500 flex items-center justify-center group hover:shadow-[0px_3px_10px_rgba(0,0,0,.25)]"
                    href="#"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-[#fff] group-hover:!opacity-100 ease-in-out duration-500"
                        opacity="0.4"
                        d="M12.6161 0.375977H3.3745C2.60331 0.375977 1.86378 0.678235 1.31847 1.21625C0.773154 1.75426 0.466797 2.48397 0.466797 3.24483V12.3628C0.469114 13.1229 0.77623 13.8513 1.32104 14.3888C1.86585 14.9263 2.60403 15.2293 3.3745 15.2316H12.6161C13.3873 15.2316 14.1269 14.9294 14.6722 14.3913C15.2176 13.8533 15.5239 13.1236 15.5239 12.3628V3.24483C15.5239 2.48397 15.2176 1.75426 14.6722 1.21625C14.1269 0.678235 13.3873 0.375977 12.6161 0.375977V0.375977ZM13.4946 2.10942H13.8284V4.63159H11.2808V2.11809L13.4946 2.10942ZM5.88704 6.30437C6.13044 5.96455 6.45288 5.68732 6.82739 5.49599C7.20191 5.30465 7.61752 5.20478 8.03927 5.20478C8.46102 5.20478 8.87662 5.30465 9.25114 5.49599C9.62566 5.68732 9.9481 5.96455 10.1915 6.30437L10.3497 6.55572C10.5763 6.94294 10.6946 7.38265 10.6923 7.8298C10.6837 8.22218 10.5851 8.60754 10.404 8.957C10.223 9.30645 9.96396 9.61093 9.64663 9.8476C9.32929 10.0843 8.96185 10.247 8.57169 10.3236C8.18154 10.4001 7.77879 10.3886 7.39381 10.2898C7.00883 10.1909 6.65154 10.0074 6.34869 9.75295C6.04584 9.49848 5.8053 9.17967 5.64512 8.82042C5.48493 8.46117 5.40928 8.07081 5.42378 7.6786C5.43828 7.28638 5.54258 6.9025 5.72887 6.55572L5.88704 6.30437ZM14.1008 12.3714C14.1008 12.7484 13.949 13.11 13.6788 13.3765C13.4086 13.6431 13.0422 13.7929 12.6601 13.7929H3.41847C3.03708 13.7906 2.67199 13.6401 2.4023 13.374C2.13261 13.1079 1.98006 12.7477 1.97775 12.3714V6.30437H4.22671C4.16916 6.44021 4.11926 6.5791 4.07733 6.7204C3.97499 7.08164 3.92177 7.45472 3.91915 7.8298C3.91915 8.90789 4.35333 9.94182 5.12599 10.7041C5.89865 11.4665 6.94656 11.8947 8.03927 11.8947C9.13197 11.8947 10.1799 11.4665 10.9525 10.7041C11.7252 9.94182 12.1593 8.90789 12.1593 7.8298C12.1567 7.45472 12.1035 7.08164 12.0012 6.7204C11.9593 6.5791 11.9094 6.44021 11.8518 6.30437H14.1008V12.3714V12.3714Z"
                        fill="#393E50"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="tiny_footer py-[30px]">
        <div className="container">
          <div className="flex items-center justify-center">
            <p className="font-normal text-base leading-6 text-[rgba(57,62,80,0.4)]">
              &copy; {new Date().getFullYear()} Your Company Name. All Rights
              Reserved
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
