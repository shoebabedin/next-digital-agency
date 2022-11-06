import Image from "next/image";
import React from "react";
import CustomPlan from "../components/Common/CustomPlan/CustomPlan";
import Pricing from "../components/Common/Pricing/Pricing";

const WebDevelopment = () => {
  return (
    <>
      {/* <!-- hero section --> */}
      <section className="about-hero py-4 md:py-16">
        <div className="max-w-[1056px] mx-auto px-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="title col-span-12">
              <p className="font-medium text-base lg:text-2xl leading-[24px] text-[rgba(57,62,80,0.4)] text-center">
                Web Development
              </p>
              <h2 className="font-bold text-2xl md:text-[28px] lg:text-[64px] lg:leading-[96px] text-[#393E50] text-center mb-2 md:mb-10">
                Optimize your business With our Ecommerce Theme
              </h2>
              <a href="#subscription" role="button"  className="max-w-[305px] w-full mx-auto max-h-[44px] h-full bg-[#30A7D7] rounded-lg text-white hidden mb-16 lg:flex items-center justify-center">
                Get a Quote
              </a>
              <Image
                className="mx-auto"
                src={'/assets/images/web-development/hero.png'}
                alt=""
                width={1024}
                height={430}
              />

              <a href="#subscription" role="button"  className="max-w-[305px] w-full mx-auto max-h-[44px] h-full bg-[#30A7D7] rounded-lg text-white block lg:hidden">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- hero section --> */}

      {/* <!-- Social Media Advertising Services --> */}
      <section className="py-4 md:py-16">
        <div className="max-w-[1296px] mx-auto px-4">
          <h2
            className="font-bold text-xl md:text-3xl lg:text-[40px] leading-[60px] text-[#393e50] md:mb-6 text-center mb-16"
          >
            Website that we make
          </h2>
          <div className="grid grid-cols-12 ga-4">
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 text-center p-5 hover:bg-white hover:shadow-[0px_20px_40px_rgba(0,0,0,0.05)] hover:rounded-[20px]"
            >
              <span
                className="icon w-10 md:w-[80px] h-10 md:h-[80px] bg-[#3C61C9] flex items-center justify-center rounded-lg md:rounded-[20px] mx-auto mb-4"
              >
                <svg
                  className="w-[20px] md:w-[40px] h-[20px] md:h-[40px]"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.9702 0H23.1777C19.1468 0 14.6632 1.59556 14.6632 7.09464C14.6829 9.01072 14.6632 10.8458 14.6632 12.911H10V19.8948H14.8075V40H23.6416V19.7621H29.4724L30 12.8914H23.4894C23.4894 12.8914 23.504 9.83501 23.4894 8.94742C23.4894 6.77431 25.892 6.89875 26.0365 6.89875C27.1799 6.89875 29.4029 6.90189 29.9736 6.89875V0H29.9702Z"
                    fill="white"
                  />
                </svg>
              </span>
              <h4
                className="font-medium text-base md:text-2xl leading-9 text-[#393e50] mb-4"
              >
                Facebook Marketing
              </h4>
            </div>
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 text-center p-5 hover:bg-white hover:shadow-[0px_20px_40px_rgba(0,0,0,0.05)] hover:rounded-[20px]"
            >
              <span
                className="icon w-10 md:w-[80px] h-10 md:h-[80px] bg-[#3C61C9] flex items-center justify-center rounded-lg md:rounded-[20px] mx-auto mb-4"
              >
                <svg
                  className="w-[20px] md:w-[40px] h-[20px] md:h-[40px]"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_17363)">
                    <g clipPath="url(#clip1_1_17363)">
                      <path
                        d="M13.3349 20C13.3349 16.3182 16.3187 13.3328 20.0005 13.3328C23.6822 13.3328 26.6677 16.3182 26.6677 20C26.6677 23.6818 23.6822 26.6672 20.0005 26.6672C16.3187 26.6672 13.3349 23.6818 13.3349 20ZM9.73073 20C9.73073 25.672 14.3285 30.2698 20.0005 30.2698C25.6725 30.2698 30.2703 25.672 30.2703 20C30.2703 14.328 25.6725 9.73024 20.0005 9.73024C14.3285 9.73024 9.73073 14.328 9.73073 20ZM28.2768 9.32304C28.2766 9.79772 28.4172 10.2618 28.6807 10.6566C28.9443 11.0514 29.319 11.3591 29.7575 11.5409C30.196 11.7228 30.6785 11.7705 31.1441 11.6781C31.6097 11.5857 32.0374 11.3572 32.3732 11.0217C32.709 10.6862 32.9377 10.2587 33.0305 9.79316C33.1233 9.32764 33.076 8.84506 32.8945 8.40645C32.713 7.96783 32.4055 7.59288 32.011 7.32901C31.6164 7.06513 31.1524 6.92419 30.6778 6.924H30.6768C30.0405 6.9243 29.4304 7.17712 28.9804 7.62693C28.5304 8.07675 28.2774 8.68678 28.2768 9.32304ZM11.9205 36.2795C9.97057 36.1907 8.91073 35.8659 8.20641 35.5915C7.27265 35.228 6.60641 34.795 5.90593 34.0955C5.20545 33.396 4.77185 32.7304 4.40993 31.7966C4.13537 31.0926 3.81057 30.0325 3.72193 28.0826C3.62497 25.9744 3.60561 25.3411 3.60561 20.0002C3.60561 14.6592 3.62657 14.0277 3.72193 11.9178C3.81073 9.96784 4.13793 8.90976 4.40993 8.20368C4.77345 7.26992 5.20641 6.60368 5.90593 5.9032C6.60545 5.20272 7.27105 4.76912 8.20641 4.4072C8.91041 4.13264 9.97057 3.80784 11.9205 3.7192C14.0286 3.62224 14.6619 3.60288 20.0005 3.60288C25.3391 3.60288 25.973 3.62384 28.0829 3.7192C30.0328 3.808 31.0909 4.1352 31.797 4.4072C32.7307 4.76912 33.397 5.20368 34.0975 5.9032C34.7979 6.60272 35.2299 7.26992 35.5935 8.20368C35.868 8.90768 36.1928 9.96784 36.2815 11.9178C36.3784 14.0277 36.3978 14.6592 36.3978 20.0002C36.3978 25.3411 36.3784 25.9726 36.2815 28.0826C36.1926 30.0325 35.8662 31.0923 35.5935 31.7966C35.2299 32.7304 34.797 33.3966 34.0975 34.0955C33.3979 34.7944 32.7307 35.228 31.797 35.5915C31.093 35.8661 30.0328 36.1909 28.0829 36.2795C25.9747 36.3765 25.3414 36.3958 20.0005 36.3958C14.6595 36.3958 14.028 36.3765 11.9205 36.2795ZM11.7549 0.12112C9.62577 0.21808 8.17089 0.55568 6.90033 1.05008C5.58449 1.56064 4.47057 2.2456 3.35745 3.35696C2.24433 4.46832 1.56113 5.584 1.05057 6.89984C0.556168 8.1712 0.218568 9.62528 0.121608 11.7544C0.0230483 13.8869 0.000488281 14.5686 0.000488281 20C0.000488281 25.4314 0.0230483 26.1131 0.121608 28.2456C0.218568 30.3749 0.556168 31.8288 1.05057 33.1002C1.56113 34.4152 2.24449 35.5322 3.35745 36.643C4.47041 37.7539 5.58449 38.4379 6.90033 38.9499C8.17329 39.4443 9.62577 39.7819 11.7549 39.8789C13.8885 39.9758 14.5691 40 20.0005 40C25.4318 40 26.1136 39.9774 28.2461 39.8789C30.3754 39.7819 31.8293 39.4443 33.1007 38.9499C34.4157 38.4379 35.5304 37.7544 36.6435 36.643C37.7566 35.5317 38.4384 34.4152 38.9504 33.1002C39.4448 31.8288 39.784 30.3747 39.8794 28.2456C39.9763 26.1115 39.9989 25.4314 39.9989 20C39.9989 14.5686 39.9763 13.8869 39.8794 11.7544C39.7824 9.62512 39.4448 8.1704 38.9504 6.89984C38.4384 5.5848 37.7549 4.47008 36.6435 3.35696C35.5322 2.24384 34.4157 1.56064 33.1023 1.05008C31.8293 0.55568 30.3752 0.21648 28.2477 0.12112C26.1152 0.02416 25.4334 0 20.0021 0C14.5707 0 13.8885 0.02256 11.7549 0.12112Z"
                        fill="white"
                      />
                      <path
                        d="M13.3349 20C13.3349 16.3182 16.3187 13.3328 20.0005 13.3328C23.6822 13.3328 26.6677 16.3182 26.6677 20C26.6677 23.6818 23.6822 26.6672 20.0005 26.6672C16.3187 26.6672 13.3349 23.6818 13.3349 20ZM9.73073 20C9.73073 25.672 14.3285 30.2698 20.0005 30.2698C25.6725 30.2698 30.2703 25.672 30.2703 20C30.2703 14.328 25.6725 9.73024 20.0005 9.73024C14.3285 9.73024 9.73073 14.328 9.73073 20ZM28.2768 9.32304C28.2766 9.79772 28.4172 10.2618 28.6807 10.6566C28.9443 11.0514 29.319 11.3591 29.7575 11.5409C30.196 11.7228 30.6785 11.7705 31.1441 11.6781C31.6097 11.5857 32.0374 11.3572 32.3732 11.0217C32.709 10.6862 32.9377 10.2587 33.0305 9.79316C33.1233 9.32764 33.076 8.84506 32.8945 8.40645C32.713 7.96783 32.4055 7.59288 32.011 7.32901C31.6164 7.06513 31.1524 6.92419 30.6778 6.924H30.6768C30.0405 6.9243 29.4304 7.17712 28.9804 7.62693C28.5304 8.07675 28.2774 8.68678 28.2768 9.32304ZM11.9205 36.2795C9.97057 36.1907 8.91073 35.8659 8.20641 35.5915C7.27265 35.228 6.60641 34.795 5.90593 34.0955C5.20545 33.396 4.77185 32.7304 4.40993 31.7966C4.13537 31.0926 3.81057 30.0325 3.72193 28.0826C3.62497 25.9744 3.60561 25.3411 3.60561 20.0002C3.60561 14.6592 3.62657 14.0277 3.72193 11.9178C3.81073 9.96784 4.13793 8.90976 4.40993 8.20368C4.77345 7.26992 5.20641 6.60368 5.90593 5.9032C6.60545 5.20272 7.27105 4.76912 8.20641 4.4072C8.91041 4.13264 9.97057 3.80784 11.9205 3.7192C14.0286 3.62224 14.6619 3.60288 20.0005 3.60288C25.3391 3.60288 25.973 3.62384 28.0829 3.7192C30.0328 3.808 31.0909 4.1352 31.797 4.4072C32.7307 4.76912 33.397 5.20368 34.0975 5.9032C34.7979 6.60272 35.2299 7.26992 35.5935 8.20368C35.868 8.90768 36.1928 9.96784 36.2815 11.9178C36.3784 14.0277 36.3978 14.6592 36.3978 20.0002C36.3978 25.3411 36.3784 25.9726 36.2815 28.0826C36.1926 30.0325 35.8662 31.0923 35.5935 31.7966C35.2299 32.7304 34.797 33.3966 34.0975 34.0955C33.3979 34.7944 32.7307 35.228 31.797 35.5915C31.093 35.8661 30.0328 36.1909 28.0829 36.2795C25.9747 36.3765 25.3414 36.3958 20.0005 36.3958C14.6595 36.3958 14.028 36.3765 11.9205 36.2795ZM11.7549 0.12112C9.62577 0.21808 8.17089 0.55568 6.90033 1.05008C5.58449 1.56064 4.47057 2.2456 3.35745 3.35696C2.24433 4.46832 1.56113 5.584 1.05057 6.89984C0.556168 8.1712 0.218568 9.62528 0.121608 11.7544C0.0230483 13.8869 0.000488281 14.5686 0.000488281 20C0.000488281 25.4314 0.0230483 26.1131 0.121608 28.2456C0.218568 30.3749 0.556168 31.8288 1.05057 33.1002C1.56113 34.4152 2.24449 35.5322 3.35745 36.643C4.47041 37.7539 5.58449 38.4379 6.90033 38.9499C8.17329 39.4443 9.62577 39.7819 11.7549 39.8789C13.8885 39.9758 14.5691 40 20.0005 40C25.4318 40 26.1136 39.9774 28.2461 39.8789C30.3754 39.7819 31.8293 39.4443 33.1007 38.9499C34.4157 38.4379 35.5304 37.7544 36.6435 36.643C37.7566 35.5317 38.4384 34.4152 38.9504 33.1002C39.4448 31.8288 39.784 30.3747 39.8794 28.2456C39.9763 26.1115 39.9989 25.4314 39.9989 20C39.9989 14.5686 39.9763 13.8869 39.8794 11.7544C39.7824 9.62512 39.4448 8.1704 38.9504 6.89984C38.4384 5.5848 37.7549 4.47008 36.6435 3.35696C35.5322 2.24384 34.4157 1.56064 33.1023 1.05008C31.8293 0.55568 30.3752 0.21648 28.2477 0.12112C26.1152 0.02416 25.4334 0 20.0021 0C14.5707 0 13.8885 0.02256 11.7549 0.12112Z"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_17363">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_1_17363">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <h4
                className="font-medium text-base md:text-2xl leading-9 text-[#393e50] mb-4"
              >
                Instagram Marketing
              </h4>
            </div>
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 text-center p-5 hover:bg-white hover:shadow-[0px_20px_40px_rgba(0,0,0,0.05)] hover:rounded-[20px]"
            >
              <span
                className="icon w-10 md:w-[80px] h-10 md:h-[80px] bg-[#3C61C9] flex items-center justify-center rounded-lg md:rounded-[20px] mx-auto mb-4"
              >
                <svg
                  className="w-[20px] md:w-[40px] h-[20px] md:h-[40px]"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5796 37.6667C27.6746 37.6667 35.9296 24.3307 35.9296 12.7663C35.9296 12.3876 35.9224 12.0106 35.9063 11.6351C37.5126 10.3957 38.8988 8.86113 40 7.10332C38.5295 7.80047 36.9472 8.26968 35.2872 8.48123C36.9815 7.39781 38.2823 5.68381 38.896 3.64073C37.285 4.65984 35.5226 5.37825 33.6848 5.76501C32.1872 4.06392 30.0552 3 27.6944 3C23.1624 3 19.4872 6.91924 19.4872 11.7503C19.4872 12.4371 19.5593 13.105 19.7002 13.7458C12.8794 13.3798 6.8313 9.89737 2.78358 4.60212C2.05454 5.93769 1.67108 7.45558 1.67236 9.0008C1.67236 12.0371 3.12114 14.7174 5.32439 16.2856C4.02114 16.2431 2.7465 15.8677 1.60764 15.191C1.60642 15.2277 1.60642 15.2635 1.60642 15.3028C1.60642 19.541 4.4352 23.0797 8.19032 23.8816C7.48506 24.0864 6.75731 24.1899 6.02634 24.1895C5.49846 24.1895 4.98398 24.1341 4.48398 24.0317C5.52878 27.509 8.55837 30.0394 12.1503 30.1101C9.34146 32.4578 5.80317 33.8562 1.95756 33.8562C1.30337 33.8568 0.649721 33.8163 0 33.7349C3.63203 36.2175 7.94471 37.6661 12.58 37.6661"
                    fill="white"
                  />
                </svg>
              </span>
              <h4
                className="font-medium text-base md:text-2xl leading-9 text-[#393e50] mb-4"
              >
                Twitter Marketing
              </h4>
            </div>
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 text-center p-5 hover:bg-white hover:shadow-[0px_20px_40px_rgba(0,0,0,0.05)] hover:rounded-[20px]"
            >
              <span
                className="icon w-10 md:w-[80px] h-10 md:h-[80px] bg-[#3C61C9] flex items-center justify-center rounded-lg md:rounded-[20px] mx-auto mb-4"
              >
                <svg
                  className="w-[20px] md:w-[40px] h-[20px] md:h-[40px]"
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_17380)">
                    <path
                      d="M20.8862 33.3043L12.6797 33.1687C10.0227 33.1214 7.35898 33.2158 4.75401 32.7262C0.791256 31.9948 0.51052 28.4083 0.21676 25.4C-0.188012 21.1707 -0.0313125 16.8646 0.732544 12.6706C1.16377 10.3173 2.8608 8.91305 5.48521 8.76025C14.3445 8.20569 23.2627 8.27141 32.1024 8.53013C33.0359 8.55385 33.9759 8.68348 34.8965 8.83104C39.4406 9.55071 39.5514 13.6149 39.8459 17.0362C40.1397 20.4928 40.0157 23.9672 39.4542 27.4002C39.0037 30.2427 38.1419 32.6264 34.5047 32.8565C29.9477 33.1575 25.4952 33.3997 20.9252 33.3226C20.9254 33.3043 20.8992 33.3043 20.8862 33.3043ZM16.0616 26.1079C19.4957 24.3264 22.8643 22.5745 26.2789 20.805C22.8383 19.0234 19.4761 17.2716 16.0616 15.502V26.1079Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_17380">
                      <rect
                        width="40"
                        height="40"
                        fill="white"
                        transform="translate(0 0.83667)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <h4
                className="font-medium text-base md:text-2xl leading-9 text-[#393e50] mb-4"
              >
                Youtube Marketing
              </h4>
            </div>
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 text-center p-5 hover:bg-white hover:shadow-[0px_20px_40px_rgba(0,0,0,0.05)] hover:rounded-[20px]"
            >
              <span
                className="icon w-10 md:w-[80px] h-10 md:h-[80px] bg-[#3C61C9] flex items-center justify-center rounded-lg md:rounded-[20px] mx-auto mb-4"
              >
                <svg
                  className="w-[20px] md:w-[40px] h-[20px] md:h-[40px]"
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_17387)">
                    <path
                      d="M17.5136 1.13577C10.3925 1.88419 3.30028 7.25023 3.01197 14.9321C2.82458 19.6203 4.82829 23.1365 9.61412 24.125C10.1619 21.908 10.2628 20.7077 10.2628 20.7077C10.2628 20.7077 8.15819 18.7307 7.94196 17.4739C6.18331 7.3632 20.4399 0.457956 27.9214 7.51853C33.082 12.4186 29.68 27.4858 21.3481 25.9184C13.3621 24.4215 25.2546 12.4327 18.8831 10.0745C13.708 8.15398 10.9547 15.9347 13.4053 19.7898C11.9638 26.4267 8.86453 32.6824 10.1187 40.9998C14.1981 38.2461 15.5676 32.9648 16.692 27.4576C18.7389 28.6155 19.8345 29.8299 22.4436 30.0135C32.0729 30.7054 37.4498 21.0466 36.138 12.122C34.956 4.21418 26.5087 0.189655 17.5136 1.13577Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_17387">
                      <rect
                        width="40"
                        height="40"
                        fill="white"
                        transform="translate(0 0.83667)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <h4
                className="font-medium text-base md:text-2xl leading-9 text-[#393e50] mb-4"
              >
                Pinterest Marketing
              </h4>
            </div>
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 text-center p-5 hover:bg-white hover:shadow-[0px_20px_40px_rgba(0,0,0,0.05)] hover:rounded-[20px]"
            >
              <span
                className="icon w-10 md:w-[80px] h-10 md:h-[80px] bg-[#3C61C9] flex items-center justify-center rounded-lg md:rounded-[20px] mx-auto mb-4"
              >
                <svg
                  className="w-[20px] md:w-[40px] h-[20px] md:h-[40px]"
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_17394)">
                    <path
                      d="M9.08014 40.9986V14.0097H0.505422V40.9986H9.08104H9.08014ZM4.79457 10.3254C7.78413 10.3254 9.64533 8.25302 9.64533 5.66306C9.58937 3.0141 7.78413 0.999512 4.85143 0.999512C1.91671 0.999512 0 3.0141 0 5.66283C0 8.25278 1.86053 10.3252 4.73839 10.3252H4.7939L4.79457 10.3254ZM13.8264 40.9986H22.4004V25.9284C22.4004 25.1228 22.4564 24.3152 22.6829 23.7398C23.3025 22.1275 24.7133 20.4586 27.0826 20.4586C30.1846 20.4586 31.4262 22.9333 31.4262 26.5618V40.9986H40V25.524C40 17.2345 35.7704 13.377 30.129 13.377C25.5039 13.377 23.4726 16.0814 22.344 17.9234H22.4011V14.0106H13.8268C13.9387 16.5425 13.8261 40.9995 13.8261 40.9995L13.8264 40.9986Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_17394">
                      <rect
                        width="40"
                        height="40"
                        fill="white"
                        transform="translate(0 0.83667)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <h4
                className="font-medium text-base md:text-2xl leading-9 text-[#393e50] mb-4"
              >
                Linkedin Marketing
              </h4>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Social Media Advertising Services --> */}

      {/* <!-- Recent Works --> */}
      <section>
        <div className="container py-4 md:py-16">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <div className="max-w-[884px] mx-auto px-4 mb-[64px]">
                <h2
                  className="font-bold text-xl md:text-3xl lg:text-[40px] leading-[60px] text-[#393e50] text-center mb-5"
                >
                  Recent Works
                </h2>
                <p
                  className="font-medium text-base leading-[22px] text-[#393e50]/40 text-center"
                >
                  Get a kick off on building your pages and bulletins! Pick a
                  plan that accommodates your business needs and make it your
                  own. Our drag and drop editors make it very simple for anybody
                  to tweak formats like an ace.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div
                className="img max-h-[276px] mb-6 rounded-[10px] overflow-hidden"
              >
                <Image
                  className="w-full h-full"
                  src={'/assets/images/web-development/recent_item1.png'}
                  alt=""
                  width={461}
                  height={306}
                />
              </div>
              <h2
                className="font-medium text-xl leading-[30px] text-[#393e50] mb-4"
              >
                React, Next, REST & GraphQL Ecommerce
              </h2>
              <p
                className="font-normal text-base leading-6 text-[rgba(57,62,80,0.4)]"
              >
                Pixer is a digital eCommerce Marketplace script build with
                Laravel, Next JS, TypeScript & Tailwind.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div
                className="img max-h-[276px] mb-6 rounded-[10px] overflow-hidden"
              >
                <Image
                  className="w-full h-full"
                  src={'/assets/images/web-development/recent_item2.png'}
                  alt=""
                  width={461}
                  height={306}
                />
              </div>
              <h2
                className="font-medium text-xl leading-[30px] text-[#393e50] mb-4"
              >
                React, Next, REST & GraphQL Ecommerce
              </h2>
              <p
                className="font-normal text-base leading-6 text-[rgba(57,62,80,0.4)]"
              >
                Pixer is a digital eCommerce Marketplace script build with
                Laravel, Next JS, TypeScript & Tailwind.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div
                className="img max-h-[276px] mb-6 rounded-[10px] overflow-hidden"
              >
                <Image
                  className="w-full h-full"
                  src={'/assets/images/web-development/recent_item3.png'}
                  alt=""
                  width={461}
                  height={306}
                />
              </div>
              <h2
                className="font-medium text-xl leading-[30px] text-[#393e50] mb-4"
              >
                React, Next, REST & GraphQL Ecommerce
              </h2>
              <p
                className="font-normal text-base leading-6 text-[rgba(57,62,80,0.4)]"
              >
                Pixer is a digital eCommerce Marketplace script build with
                Laravel, Next JS, TypeScript & Tailwind.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Recent Works --> */}

      {/* <!-- plan every thing from sketch --> */}
      <Pricing/>
      {/* <!-- plan every thing from sketch --> */}

      {/* <!-- Custome Plan --> */}
      <CustomPlan/>
      {/* <!-- Custome Plan --> */}
    </>
  );
};

export default WebDevelopment;
