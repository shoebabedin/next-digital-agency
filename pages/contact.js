import React from "react";
import Accordion from "../components/Common/Accordion/Accordion";

const Contact = () => {
  return (
    <>
      {/* <!-- contact banner --> */}
      <section className="contact">
        <div className="">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <div className="contact_banner py-28 lg:py-44">
                <h2 className="text-center font-bold text-base md:text-[30px] lg:text-[40px] leading-[60px] text-white">
                  CONTACT US
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- contact banner --> */}

      {/* <!-- get in touch --> */}
      <section className="get_in_touch py-4 md:py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6">
              <div className="lg:max-w-[416px] flex flex-col md:flex-row lg:flex-col items-center lg:items-start justify-around">
                <h2 className="font-bold text-xl md:text-[30px] lg:text-[40px] leading-[60px] text-[#393e50] mb-5 md:mb-10">
                  Contact. <br className="hidden md:block" />
                  <span className="text-[#30A7D7]">Get in Touch</span>
                </h2>
                <ul className="flex flex-col gap-6">
                  <li className="flex items-start gap-4">
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 12.5C13.1046 12.5 14 11.6046 14 10.5C14 9.39543 13.1046 8.5 12 8.5C10.8954 8.5 10 9.39543 10 10.5C10 11.6046 10.8954 12.5 12 12.5Z"
                          stroke="#3C61C9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17 10.5C17 15 12 18.5 12 18.5C12 18.5 7 15 7 10.5C7 9.17392 7.52678 7.90215 8.46447 6.96447C9.40215 6.02678 10.6739 5.5 12 5.5C13.3261 5.5 14.5979 6.02678 15.5355 6.96447C16.4732 7.90215 17 9.17392 17 10.5V10.5Z"
                          stroke="#3C61C9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <rect
                          x="0.5"
                          y="0.5"
                          width="23"
                          height="23"
                          rx="11.5"
                          stroke="#3C61C9"
                        />
                      </svg>
                    </span>
                    <p>198 West 21th Streat, South 721, New York, NY 10016</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.78125 11.8C10.2958 12.8625 11.1549 13.7195 12.2188 14.2313C12.2972 14.2684 12.384 14.2845 12.4706 14.2779C12.5572 14.2714 12.6405 14.2424 12.7125 14.1938L14.275 13.15C14.344 13.1032 14.4238 13.0746 14.5069 13.067C14.5899 13.0593 14.6736 13.0728 14.75 13.1063L17.675 14.3625C17.775 14.4041 17.8585 14.4774 17.9127 14.5712C17.9669 14.6649 17.9888 14.7739 17.975 14.8813C17.8823 15.6049 17.5291 16.2699 16.9815 16.7519C16.4339 17.2339 15.7295 17.4999 15 17.5C12.7457 17.5 10.5837 16.6045 8.98959 15.0104C7.39553 13.4164 6.5 11.2544 6.5 9.00002C6.50016 8.27052 6.76613 7.56607 7.24814 7.01849C7.73015 6.47091 8.39516 6.11773 9.11875 6.02502C9.22615 6.01122 9.33511 6.03312 9.42884 6.08733C9.52258 6.14153 9.59589 6.22505 9.6375 6.32502L10.8938 9.25627C10.9264 9.33149 10.9401 9.41359 10.9335 9.49533C10.927 9.57707 10.9005 9.65595 10.8562 9.72502L9.8125 11.3125C9.76603 11.3843 9.73876 11.4668 9.73329 11.5522C9.72782 11.6375 9.74433 11.7229 9.78125 11.8V11.8Z"
                          stroke="#3C61C9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <rect
                          x="0.5"
                          y="0.5"
                          width="23"
                          height="23"
                          rx="11.5"
                          stroke="#3C61C9"
                        />
                      </svg>
                    </span>
                    <a href="callto:12352355958">+1235 2355 958</a>
                  </li>
                  <li className="flex items-start gap-4">
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.1439 6.24397L5.49387 9.52522C5.3947 9.55234 5.3063 9.60936 5.24071 9.68853C5.17512 9.7677 5.13552 9.86517 5.12733 9.96765C5.11913 10.0701 5.14272 10.1727 5.19489 10.2612C5.24706 10.3498 5.32527 10.4202 5.41887 10.4627L10.7689 12.994C10.8737 13.0425 10.9578 13.1267 11.0064 13.2315L13.5376 18.5815C13.5802 18.6751 13.6505 18.7533 13.7391 18.8055C13.8277 18.8576 13.9302 18.8812 14.0327 18.873C14.1352 18.8648 14.2326 18.8252 14.3118 18.7596C14.391 18.694 14.448 18.6056 14.4751 18.5065L17.7564 6.85647C17.7812 6.77146 17.7828 6.68132 17.7608 6.59551C17.7389 6.5097 17.6942 6.43137 17.6316 6.36874C17.569 6.3061 17.4906 6.26147 17.4048 6.23952C17.319 6.21757 17.2289 6.21911 17.1439 6.24397V6.24397Z"
                          stroke="#3C61C9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.9312 13.0687L13.7562 10.2437"
                          stroke="#3C61C9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <rect
                          x="0.5"
                          y="0.5"
                          width="23"
                          height="23"
                          rx="11.5"
                          stroke="#3C61C9"
                        />
                      </svg>
                    </span>
                    <a href="mailto:info@numohive.xyz">info@numohive.xyz</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="flex items-center justify-center md:p-12">
                {/* <!-- Author: FormBold Team -->
                <!-- Learn More: https://formbold.com --> */}
                <div className="mx-auto w-full max-w-[550px]">
                  <form action="" method="" className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-6">
                      <label
                        for="name"
                        className="mb-2 block text-base font-normal leading-[22px] text-[#393E50]"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        className="w-full rounded-md border border-[rgba(57,62,80,0.4)] bg-white py-3 px-6 text-sm font-normal text-[rgba(57,62,80,0.4)] outline-none focus:border-[rgba(57,62,80,0.4)]"
                      />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <label
                        for="email"
                        className="mb-2 block text-base font-normal leading-[22px] text-[#393E50]"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        className="w-full rounded-md border border-[rgba(57,62,80,0.4)] bg-white py-3 px-6 text-sm font-normal text-[rgba(57,62,80,0.4)] outline-none focus:border-[rgba(57,62,80,0.4)]"
                      />
                    </div>
                    <div className="col-span-12">
                      <label
                        for="message"
                        className="mb-2 block text-base font-normal leading-[22px] text-[#393E50]"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        name="message"
                        id="message"
                        placeholder="Your Message"
                        className="w-full rounded-md border border-[rgba(57,62,80,0.4)] bg-white py-3 px-6 text-sm font-normal text-[rgba(57,62,80,0.4)] outline-none focus:border-[rgba(57,62,80,0.4)]"
                      ></textarea>
                    </div>
                    <div className="col-span-12">
                      <button className="bg-[#30A7D7] text-sm font-semibold text-white leading-5 outline-none rounded-lg py-4 px-28 mx-auto flex items-center justify-center">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- get in touch --> */}

      {/* <!-- frequently asked question --> */}
      <Accordion />
      {/* <!-- frequently asked question --> */}

      {/* <!-- need to know more  --> */}
      <section>
        <div className="max-w-[1076px] px-4 py-4 md:py-16 mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <div className="max-w-[535px] mx-auto text-center">
                <h2 className="font-bold text-xl md:text-2xl lg:text-[40px] leading-[60px] text-[#393e50] mb-6">
                  Need to Know More?
                </h2>
                <p className="font-normal text-base leading-6 text-[rgba(57,62,80,0.4)]">
                  If you still have some queries about us, you can always
                  contact us. We will answer you shortly.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 text-center p-5">
              <span className="flex items-center justify-center mb-[23px]">
                <svg
                  width="34"
                  height="27"
                  viewBox="0 0 34 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.02147 2.11365H31V0.613647H3.02147V2.11365ZM32.25 3.36365V23.3636H33.75V3.36365H32.25ZM31 24.6136H3.00195V26.1136H31V24.6136ZM1.75195 23.3624L1.77147 3.36243L0.271471 3.36096L0.251954 23.361L1.75195 23.3624ZM3.00195 24.6136C2.31112 24.6136 1.75128 24.0533 1.75195 23.3624L0.251954 23.361C0.250471 24.8808 1.48212 26.1136 3.00195 26.1136V24.6136ZM32.25 23.3636C32.25 24.054 31.6904 24.6136 31 24.6136V26.1136C32.5188 26.1136 33.75 24.8824 33.75 23.3636H32.25ZM31 2.11365C31.6904 2.11365 32.25 2.67329 32.25 3.36365H33.75C33.75 1.84486 32.5188 0.613647 31 0.613647V2.11365ZM3.02147 0.613647C1.50373 0.613647 0.272952 1.84323 0.271471 3.36096L1.77147 3.36243C1.77214 2.67255 2.33159 2.11365 3.02147 2.11365V0.613647Z"
                    fill="#393E50"
                  />
                  <path
                    d="M29.1588 9.22876C29.4878 8.97701 29.5503 8.50627 29.2986 8.17734C29.0468 7.84841 28.5761 7.78585 28.2472 8.0376L29.1588 9.22876ZM6.6575 8.05773C6.33823 7.79384 5.86548 7.83874 5.60159 8.15801C5.3377 8.47729 5.3826 8.95003 5.70187 9.21392L6.6575 8.05773ZM15.1675 16.0645L14.6897 16.6426L15.1675 16.0645ZM28.2472 8.0376L18.4463 15.5389L19.3579 16.73L29.1588 9.22876L28.2472 8.0376ZM15.6453 15.4864L6.6575 8.05773L5.70187 9.21392L14.6897 16.6426L15.6453 15.4864ZM18.4463 15.5389C17.6143 16.1756 16.4529 16.1539 15.6453 15.4864L14.6897 16.6426C16.0356 17.7551 17.9713 17.7913 19.3579 16.73L18.4463 15.5389Z"
                    fill="#393E50"
                  />
                </svg>
              </span>
              <a
                href="mailto:help@numohive.com"
                className="font-medium text-base leading-6 text-[#393E50] mb-4 inline-block"
              >
                help@numohive.com
              </a>
              <p className="font-normal text-base leading-6 text-[rgba(57,62,80,0.4)]">
                The best way to get answer faster
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 text-center p-5 bg-[rgba(57,62,80,0.05)]">
              <span className="flex items-center justify-center mb-[23px]">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.1762 24.053L22.9976 25.2502C18.8241 23.1555 16.2462 20.7493 14.7459 16.9985L15.9011 10.8021L13.7175 4.99609L7.05954 4.99609C5.93199 4.99609 5.04228 5.92782 5.17923 7.04702C5.64992 10.8936 7.33091 19.3355 13.2456 25.2502C19.4517 31.4563 28.628 33.8434 32.7963 34.6456C33.9668 34.8708 35 33.9597 35 32.7676L35 26.2722L29.1762 24.053Z"
                    stroke="#30A7D7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <a
                href="callto:+880 1245 586 544"
                className="font-medium text-base leading-6 text-[#30A7D7] mb-4 inline-block"
              >
                +880 1245 586 544
              </a>
              <p className="font-normal text-base leading-6 text-[rgba(57,62,80,0.4)]">
                We are always happy to help you
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- need to know more  --> */}
    </>
  );
};

export default Contact;
