import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomPlan from "../components/Common/CustomPlan/CustomPlan";
import Pricing from "../components/Common/Pricing/Pricing";

const SmsMarketing = () => {
  return (
    <>
      {/* <!-- hero section --> */}
      <section className="about-hero py-4 md:py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="title col-span-12 lg:col-span-6">
              <p className="font-medium text-base lg:text-2xl leading-[24px] text-[rgba(57,62,80,0.4)] text-center lg:text-left">
                SMS Marketing
              </p>
              <h2 className="font-bold text-2xl md:text-[28px] lg:text-[64px] lg:leading-[96px] text-[#393E50] text-center lg:text-left mb-2 md:mb-10">
                Connect directly with targeted
                <span className="text-[#30A7D7]">SMS</span>
              </h2>
              <Link href="#subscription" role="button" className="max-w-[305px] w-full mx-auto lg:mr-auto lg:ml-0 max-h-[44px] h-full bg-[#30A7D7] rounded-lg text-white hidden lg:flex items-center justify-center">
                Get a Quote
              </Link>
            </div>
            <div className="img col-span-12 lg:col-span-6">
              <Image
                src={'/assets/images/sms-marketing/hero-section.webp'}
                alt=""
                width={676}
                height={406}
              />

              <Link href="#subscription" role="button" className="max-w-[305px] w-full mx-auto max-h-[44px] h-full bg-[#30A7D7] rounded-lg text-white mt-10 flex items-center justify-center lg:hidden">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- hero section --> */}

      {/* <!-- marketing part --> */}
      <section>
        <div className="container">
          <div className="grid grid-cols-12 ga-4">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 text-center p-5">
              <span className="icon w-10 md:w-[80px] h-10 md:h-[80px] bg-[#3C61C9] flex items-center justify-center rounded-lg md:rounded-[20px] mx-auto mb-4">
                <svg
                  className="w-[20px] md:w-[40px] h-[20px] md:h-[40px]"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.27433 2.10751C1.72619 2.52564 0.582635 3.63524 0.131434 5.15718C0.0136332 5.5545 0 6.66915 0 15.8978C0 25.1324 0.0135516 26.2409 0.131597 26.6385C0.579533 28.1473 1.66945 29.2372 3.17825 29.6852C3.49875 29.7803 3.95607 29.8167 4.82819 29.8167H6.03485L6.05836 33.5516L6.08187 37.2864L6.30857 37.672C6.75186 38.4262 7.76414 38.7597 8.51168 38.3978C8.77757 38.2692 9.9061 37.1425 12.8964 34.0207L16.9231 29.8167H26.6578C36.1018 29.8167 36.4079 29.8119 36.9112 29.6564C38.3137 29.2231 39.3297 28.224 39.8149 26.801L39.9973 26.2656L39.9994 15.9762C40.0017 4.89251 40.015 5.26249 39.5845 4.40515C39.1057 3.45156 38.1937 2.63504 37.1562 2.23102L36.6137 2.01975L20.1641 2.00424C5.98513 1.99085 3.65369 2.00505 3.27433 2.10751ZM36.5928 3.88447C37.133 4.0942 37.7439 4.67022 38.0178 5.22779L38.2464 5.69336V15.8978V26.1023L38.0325 26.5583C37.7607 27.138 37.3228 27.5758 36.7431 27.8477L36.2871 28.0616L26.2315 28.1024C16.33 28.1426 16.1726 28.1457 15.9708 28.3065C15.858 28.3963 13.991 30.3198 11.8218 32.5809L7.87786 36.692L7.83704 32.7033C7.80757 29.8251 7.76904 28.6673 7.69867 28.5447C7.47662 28.1579 7.41441 28.1453 5.5185 28.1024C3.7848 28.0631 3.69696 28.0533 3.26543 27.8483C2.69431 27.577 2.23976 27.1224 1.96848 26.5513L1.75517 26.1023V15.8978V5.69336L1.93159 5.31163C2.30336 4.50727 3.05498 3.92039 3.89664 3.77729C4.11069 3.74088 11.4678 3.71622 20.2457 3.72259C35.5393 3.73361 36.2217 3.74039 36.5928 3.88447ZM9.16411 9.89997C9.06337 9.94047 8.90549 10.0943 8.81332 10.2417C8.58613 10.605 8.64875 11.0087 8.97839 11.3058L9.22746 11.5303H13.9265H18.6255L18.8642 11.2917C19.2755 10.8803 19.1606 10.174 18.6388 9.90716C18.4187 9.79458 9.44314 9.78781 9.16411 9.89997ZM9.16411 15.1247C9.06337 15.1652 8.90549 15.319 8.81332 15.4664C8.58613 15.8297 8.64875 16.2334 8.97839 16.5305L9.22746 16.755H20.0008H30.7741L31.0232 16.5305C31.4844 16.1147 31.3672 15.3313 30.8121 15.1203C30.5412 15.0172 9.42069 15.0215 9.16411 15.1247ZM9.16411 20.3494C9.06337 20.3899 8.90549 20.5437 8.81332 20.6911C8.58613 21.0544 8.64875 21.4581 8.97839 21.7552L9.22746 21.9797L18.2673 21.9779C26.7092 21.9762 27.3187 21.9667 27.4813 21.8351C27.9288 21.4726 27.9611 20.9438 27.5603 20.5429L27.2827 20.2654L18.315 20.2705C13.1891 20.2735 9.26885 20.3072 9.16411 20.3494Z"
                    fill="white"
                  />
                </svg>
              </span>
              <h4 className="font-medium text-base md:text-2xl leading-9 text-[#393e50] mb-4">
                SMS Campaigns
              </h4>
              <p className="font-normal text-sm md:text-base leading-6 text-[rgba(57,62,80,0.4)]">
                Capably straightforward email advertising intended to assist
                your independent venture with developing.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 text-center p-5">
              <span className="icon w-10 md:w-[80px] h-10 md:h-[80px] bg-[#3C61C9] flex items-center justify-center rounded-lg md:rounded-[20px] mx-auto mb-4">
                <svg
                  className="w-[20px] md:w-[40px] h-[20px] md:h-[40px]"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.9363 3.01063C19.8026 3.12279 16.6041 4.04221 14.0649 5.56088C11.9761 6.81014 10.1037 8.63786 9.02672 10.479C8.72432 10.996 8.72291 10.9971 8.05299 11.248C2.58747 13.2948 -0.649976 18.0213 0.109909 22.8444C0.448035 24.9903 1.3884 26.8093 3.06746 28.5656L3.45131 28.9672L3.36424 32.1219C3.22073 37.3205 3.22042 37.2075 3.37745 37.4476C3.71042 37.9569 4.32469 38.0698 4.79803 37.7087C4.94787 37.5944 6.30397 36.3586 7.81147 34.9624C9.31905 33.5662 10.5868 32.4239 10.6288 32.4239C10.6707 32.4239 11.0653 32.4781 11.5057 32.5445C12.5552 32.7026 14.7599 32.7021 15.9584 32.5435C18.3298 32.2296 20.7966 31.2976 22.5998 30.034L23.2048 29.6101L23.8131 29.6098C24.7386 29.6094 26.0999 29.4707 27.3031 29.2543C28.19 29.0947 28.4093 29.0774 28.5086 29.1588C28.5754 29.2136 29.6879 30.2384 30.9809 31.4362C32.2738 32.6341 33.4372 33.6824 33.5662 33.7658C33.941 34.0083 34.4295 33.9218 34.7673 33.5532L35.0359 33.2601L34.9841 31.142C34.9557 29.977 34.9101 28.3556 34.8828 27.5388L34.8332 26.0537L35.5581 25.4337C40.1659 21.4929 41.3151 15.4923 38.411 10.5367C36.601 7.44817 33.1583 4.92184 29.1928 3.77216C27.3257 3.23089 24.9301 2.93927 22.9363 3.01063ZM25.6719 5.073C27.9929 5.31225 30.5085 6.14287 32.4125 7.2988C37.5212 10.4003 39.3999 15.7789 37.0253 20.5043C36.3888 21.7711 35.1029 23.2955 33.7878 24.3424C33.3903 24.6589 33.0234 24.9956 32.9725 25.0907C32.9032 25.2201 32.8943 25.9269 32.9367 27.9058C32.9679 29.359 32.9736 30.548 32.9495 30.548C32.9254 30.548 32.1497 29.8472 31.2258 28.9907C29.424 27.3202 29.132 27.0762 28.854 27.0089C28.7557 26.9852 28.316 27.0461 27.877 27.1445C25.6431 27.6452 23.6831 27.7524 21.5293 27.4919C15.9857 26.8213 11.4205 23.6367 9.88736 19.3709C9.21392 17.4971 9.19211 15.1829 9.83069 13.3479C11.3562 8.96349 16.0713 5.68305 21.7247 5.07284C23.1133 4.92293 24.2162 4.92301 25.6719 5.073ZM14.5563 13.5833C12.664 14.273 11.8599 16.4531 12.8645 18.1707C12.9687 18.3488 13.2298 18.659 13.4447 18.8601C14.6908 20.0256 16.5834 19.987 17.8008 18.7712C19.3396 17.2344 18.8802 14.6584 16.9002 13.7206C16.442 13.5035 16.276 13.4674 15.6672 13.4523C15.1373 13.4392 14.8633 13.4714 14.5563 13.5833ZM22.9363 13.5359C22.0635 13.8249 21.3794 14.4202 20.9916 15.2284C20.7663 15.6977 20.7477 15.7989 20.7477 16.5571C20.7477 17.3118 20.7671 17.4187 20.9886 17.8861C21.5759 19.1254 22.9201 19.8597 24.2669 19.677C25.2762 19.54 26.2347 18.8292 26.6816 17.8861C26.9031 17.4187 26.9225 17.3118 26.9225 16.5571C26.9225 15.7989 26.9039 15.6977 26.6786 15.2284C26.3732 14.592 25.8246 14.0435 25.1726 13.7226C24.7397 13.5094 24.5751 13.473 23.9603 13.4541C23.5211 13.4407 23.1293 13.4719 22.9363 13.5359ZM30.9998 13.6219C30.382 13.8759 29.9823 14.1654 29.6184 14.6225C28.6276 15.8669 28.7424 17.6447 29.8875 18.7898C31.6189 20.5211 34.5278 19.6967 35.1451 17.2996C35.3864 16.3626 35.1098 15.2325 34.457 14.4883C33.6205 13.5348 32.1238 13.1597 30.9998 13.6219ZM7.60926 14.0559C7.33539 15.344 7.3228 17.198 7.57964 18.433C8.26512 21.729 10.3785 24.6425 13.6121 26.7491C15.2467 27.8141 17.2547 28.6364 19.4581 29.1434L20.0443 29.2782L19.4971 29.532C18.7191 29.8928 17.5068 30.2762 16.5176 30.4743C15.3054 30.7171 12.9647 30.7725 11.7201 30.5879C10.2112 30.3641 10.0269 30.3564 9.79599 30.5077C9.6825 30.5821 8.62458 31.5396 7.44505 32.6355C6.26559 33.7314 5.28904 34.6158 5.27505 34.6008C5.26106 34.5857 5.27919 33.6588 5.3153 32.5411C5.35149 31.4234 5.38284 29.9696 5.38502 29.3105L5.38901 28.1119L4.5469 27.2392C3.61412 26.2723 3.11139 25.5679 2.65868 24.593C1.05152 21.1324 2.29225 17.158 5.75903 14.6619C6.27567 14.2899 7.66171 13.485 7.70368 13.5326C7.71119 13.541 7.66867 13.7765 7.60926 14.0559ZM16.0917 15.4991C16.6812 15.804 16.9212 16.4574 16.6602 17.0474C16.2877 17.8894 15.1457 17.9926 14.5812 17.2353C14.3397 16.9114 14.3512 16.2189 14.6039 15.8646C14.9226 15.4178 15.6086 15.2493 16.0917 15.4991ZM24.4416 15.5406C25.1968 16.001 25.1968 17.1042 24.4416 17.5782C24.0803 17.805 23.3742 17.7591 23.0862 17.4901C22.2517 16.7105 22.7232 15.3852 23.8351 15.3852C24.0485 15.3852 24.287 15.4464 24.4416 15.5406ZM32.6686 15.5296C33.7401 16.0998 33.3041 17.7426 32.0811 17.7426C31.0153 17.7426 30.4928 16.4877 31.2447 15.7338C31.3608 15.6174 31.5262 15.4934 31.6122 15.4584C31.8868 15.3464 32.3877 15.3801 32.6686 15.5296Z"
                    fill="white"
                  />
                </svg>
              </span>
              <h4 className="font-medium text-base md:text-2xl leading-9 text-[#393e50] mb-4">
                2-Way SMS Messaging
              </h4>
              <p className="font-normal text-sm md:text-base leading-6 text-[rgba(57,62,80,0.4)]">
                Capably straightforward email advertising intended to assist
                your independent venture with developing.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 text-center p-5">
              <span className="icon w-10 md:w-[80px] h-10 md:h-[80px] bg-[#3C61C9] flex items-center justify-center rounded-lg md:rounded-[20px] mx-auto mb-4">
                <svg
                  className="w-[20px] md:w-[40px] h-[20px] md:h-[40px]"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_17029)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.8657 0.16744C10.2932 0.387226 9.76115 0.926653 9.54371 1.5078C9.39604 1.90253 9.37627 2.11622 9.37627 3.31977V4.68412L8.61448 4.6842C4.89803 4.68475 1.53435 7.12576 0.432053 10.6222C-0.144018 12.4496 -0.144018 14.1078 0.432053 15.9352C1.53435 19.4316 4.89803 21.8726 8.61448 21.8732L9.37627 21.8733V29.957C9.37627 38.0297 9.3765 38.0415 9.54371 38.4884C9.76646 39.0837 10.2925 39.6098 10.8879 39.8326L11.3354 40H24.6902H38.045L38.4926 39.8326C39.0879 39.6098 39.614 39.0837 39.8368 38.4884L40.0042 38.0408V23.2338C40.0042 10.5194 39.9883 8.3969 39.8921 8.21571C39.7566 7.96084 31.9894 0.205099 31.7468 0.0824315C31.6248 0.020785 28.686 -0.00265478 21.4334 0.00023612C11.3411 0.00429901 11.2884 0.00515847 10.8657 0.16744ZM30.6283 5.14924C30.6283 7.76653 30.6536 8.79522 30.7217 8.94453C30.9152 9.36941 30.9408 9.37207 34.8442 9.37207H38.4428L38.4226 23.6685L38.4025 37.965L38.1858 38.1816L37.9692 38.3983H24.6902H11.4112L11.1946 38.1816L10.978 37.965V29.7573V21.5496L11.6421 21.2996C14.3072 20.2962 16.2185 18.1267 16.9628 15.2599C17.115 14.6735 17.1424 14.3711 17.1424 13.2787C17.1424 12.1862 17.115 11.8839 16.9628 11.2975C16.2185 8.43073 14.3078 6.26177 11.6421 5.25761L10.978 5.00743V3.52557C10.978 2.15365 10.9895 2.03082 11.1342 1.87018C11.2202 1.7747 11.3608 1.6679 11.4468 1.63266C11.5327 1.5975 15.8837 1.56648 21.1157 1.56374L30.6283 1.55882V5.14924ZM34.7693 5.27011L37.3077 7.80942H34.7493H32.191V5.27011C32.191 3.8735 32.1999 2.73081 32.211 2.73081C32.2219 2.73081 33.3732 3.8735 34.7693 5.27011ZM19.6202 4.79319C19.0966 5.08338 19.1138 5.90979 19.6485 6.1534C19.9415 6.28693 28.3451 6.28693 28.6381 6.1534C28.862 6.05136 29.0657 5.72375 29.0657 5.46545C29.0657 5.20714 28.862 4.87953 28.6381 4.77749C28.3261 4.63529 19.8784 4.64998 19.6202 4.79319ZM7.81362 9.87626C7.81362 12.4632 7.83893 13.4832 7.90699 13.6325C8.10044 14.057 8.12873 14.06 11.9987 14.06H15.5665L15.5126 14.4311C15.4259 15.0293 15.0199 16.1626 14.6659 16.7947C14.2348 17.5643 12.9886 18.8343 12.2236 19.2836C9.22469 21.0447 5.48629 20.4312 3.24599 17.8104C1.94548 16.289 1.33636 14.1232 1.67053 12.2087C1.93454 10.6959 2.52139 9.51927 3.54219 8.45597C4.24937 7.71941 4.98483 7.19749 5.80819 6.84784C6.37512 6.60712 7.31584 6.34115 7.63782 6.33069L7.81362 6.3249V9.87626ZM10.2924 6.48007C12.8079 7.08318 14.8194 9.14009 15.4312 11.7352C15.6318 12.5858 15.9763 12.4974 12.4625 12.4974H9.37627V9.41114C9.37627 6.52375 9.3851 6.3249 9.513 6.32545C9.58824 6.32576 9.93898 6.3953 10.2924 6.48007ZM19.6202 7.91849C19.0966 8.20868 19.1138 9.03508 19.6485 9.2787C19.9415 9.41223 28.3451 9.41223 28.6381 9.2787C28.862 9.17666 29.0657 8.84905 29.0657 8.59074C29.0657 8.33244 28.862 8.00483 28.6381 7.90279C28.3261 7.76059 19.8784 7.77528 19.6202 7.91849ZM3.50758 12.6146C3.19497 12.7844 3.09551 13.1153 3.15294 13.7943C3.27178 15.2005 3.98747 16.539 5.13164 17.4949C5.9636 18.1899 7.02581 18.6316 8.07935 18.7207C8.76879 18.779 9.09359 18.6773 9.26274 18.3502C9.56316 17.7692 9.18016 17.1853 8.49861 17.1853C8.10826 17.1853 7.26693 16.9502 6.7761 16.7041C6.52771 16.5795 6.11564 16.2687 5.86031 16.0133C5.60497 15.758 5.29416 15.3459 5.16954 15.0975C4.92342 14.6067 4.68832 13.7654 4.68832 13.375C4.68832 12.6918 4.08287 12.3019 3.50758 12.6146ZM19.1514 12.6064C18.4741 12.9819 18.7575 14.06 19.5335 14.06C19.9294 14.06 20.3148 13.6783 20.3148 13.2863C20.3148 12.6997 19.6665 12.3209 19.1514 12.6064ZM22.2767 12.6064C21.7531 12.8966 21.7703 13.723 22.305 13.9666C22.5997 14.101 34.594 14.101 34.8887 13.9666C35.1126 13.8646 35.3162 13.537 35.3162 13.2787C35.3162 13.0204 35.1126 12.6928 34.8887 12.5907C34.5748 12.4477 22.5361 12.4627 22.2767 12.6064ZM19.1514 15.7317C18.4741 16.1072 18.7575 17.1853 19.5335 17.1853C19.9294 17.1853 20.3148 16.8036 20.3148 16.4116C20.3148 15.825 19.6665 15.4462 19.1514 15.7317ZM22.2767 15.7317C21.7531 16.0219 21.7703 16.8483 22.305 17.0919C22.5997 17.2263 34.594 17.2263 34.8887 17.0919C35.1126 16.9899 35.3162 16.6623 35.3162 16.404C35.3162 16.1457 35.1126 15.8181 34.8887 15.716C34.5748 15.573 22.5361 15.588 22.2767 15.7317ZM33.446 20.9507C32.2272 21.4186 31.6 22.982 32.1773 24.1126L32.3433 24.4377L29.6607 27.3161L26.9781 30.1944L26.3225 30.207C25.9619 30.2139 25.5759 30.2315 25.4647 30.246C25.286 30.2695 25.1246 30.1022 24.0752 28.8063L22.8879 27.3401L23.0077 26.9365C23.2644 26.072 23.0556 25.2316 22.4281 24.6042C20.7291 22.9052 17.8606 24.6124 18.5524 26.911L18.6651 27.2856L17.2469 28.8285L15.8287 30.3713L15.5226 30.2633C14.7719 29.9984 13.8131 30.2427 13.201 30.8547C12.2819 31.7739 12.2819 33.2247 13.201 34.1438C14.9001 35.8428 17.7686 34.1355 17.0768 31.837L16.964 31.4624L18.3815 29.9204L19.799 28.3783L20.14 28.4945C20.3711 28.5733 20.6241 28.5954 20.9253 28.5631C21.1697 28.537 21.4606 28.5066 21.5718 28.4955C21.7481 28.478 21.9258 28.663 22.9613 29.9416L24.1486 31.4079L24.0288 31.8115C23.7721 32.6759 23.9809 33.5163 24.6084 34.1438C26.126 35.6615 28.7251 34.4821 28.5772 32.343C28.5564 32.0411 28.4748 31.7033 28.3761 31.51L28.2101 31.185L30.9015 28.2974L33.5927 25.4098L34.1224 25.4463C35.1652 25.5182 36.1181 24.915 36.4771 23.9557C37.1867 22.0589 35.3367 20.2247 33.446 20.9507ZM34.8457 22.6174C35.123 22.8946 35.1142 23.361 34.8261 23.649C34.3544 24.1207 33.5618 23.7952 33.5618 23.1296C33.5618 22.4324 34.347 22.1191 34.8457 22.6174ZM21.3287 25.7427C21.6061 26.0199 21.5973 26.4863 21.3092 26.7743C20.8374 27.246 20.0449 26.9205 20.0449 26.2549C20.0449 25.5577 20.8301 25.2444 21.3287 25.7427ZM15.3907 31.9933C15.668 32.2705 15.6592 32.7369 15.3711 33.0249C14.8994 33.4966 14.1068 33.1711 14.1068 32.5055C14.1068 31.8083 14.892 31.495 15.3907 31.9933ZM26.798 31.9933C27.0754 32.2705 27.0666 32.7369 26.7785 33.0249C26.3067 33.4966 25.5141 33.1711 25.5141 32.5055C25.5141 31.8083 26.2994 31.495 26.798 31.9933Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_17029">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <h4 className="font-medium text-base md:text-2xl leading-9 text-[#393e50] mb-4">
                SMS Channel Reports
              </h4>
              <p className="font-normal text-sm md:text-base leading-6 text-[rgba(57,62,80,0.4)]">
                Capably straightforward email advertising intended to assist
                your independent venture with developing.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- marketing part --> */}

      {/* <!-- SMS that works faster then email???s --> */}
      <section className="py-4 md:py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <h2 className="font-bold text-2xl md:text-3xl lg:text-[40px] leading-8 md:leading-[60px] text-center md:text-left text-[#393e50] mt-10">
                Easy to reach Global <br className="hidden lg:block" />
                Subscribers
              </h2>
              <p className="font-normal text-base leading-6 text-[rgba(57,62,80,0.4)] mt-5 text-center md:text-left">
                SMS promoting, very much like email, need not be restricted to a
                specific country. We upholds all nation codes for SMS (Short
                Messaging Service) sending so you can arrive at your global
                clients and drive transformations from anyplace on the planet.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <Image
                src={'/assets/images/sms-marketing/easy-reach.webp'}
                alt=""
                width={639}
                height={636}
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- SMS that works faster then email???s --> */}

      {/* <!-- SMS that works faster then  email???s --> */}
      <section className="py-4 md:py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6 order-2 md:order-1">
              <Image
                src={'/assets/images/sms-marketing/sms-faster-email.webp'}
                alt=""
                width={636}
                height={532}
              />
            </div>
            <div className="col-span-12 md:col-span-6 order-1 md:order-2">
              <h2 className="font-bold text-2xl md:text-3xl lg:text-[40px] leading-8 md:leading-[60px] text-[#393e50] mt-10 text-center md:text-left">
                SMS that works faster then <br className="hidden lg:block" />
                email&apos;s
              </h2>
              <p className="font-normal text-base leading-6 text-[rgba(57,62,80,0.4)] mt-5 text-center md:text-left">
                SMS promoting, very much like email, need not be restricted to a
                specific country. We upholds all nation codes for SMS (Short
                Messaging Service) sending so you can arrive at your global
                clients and drive transformations from anyplace on the planet.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- SMS that works faster then  email???s --> */}

      {/* <!-- plan every thing from sketch --> */}
      <Pricing/>
      {/* <!-- plan every thing from sketch --> */}

      {/* <!-- Custome Plan --> */}
      <CustomPlan/>
      {/* <!-- Custome Plan --> */}
    </>
  );
};

export default SmsMarketing;
