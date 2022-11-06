import React from "react";

const CustomPlan = () => {
  return (
    <>
      <section className="custom_plan pt-16 md:py-16">
        <div className="container">
          <div className="flex items-center justify-center flex-col custom_plan_bg py-10 rounded-[40px]">
            <p className="font-medium text-sm md:text-base text-white leading-6">
              All you’ll ever need
            </p>
            <h3 className="font-medium text-xl md:text-[40px] leading-[60px] text-white mb-10">
              Custome Plan
            </h3>
            <div className="flex items-center justify-between max-w-[280px] md:max-w-[450px] w-full mx-auto relative">
              <input
                className="border w-full bg-white py-3 px-4 shadow-[0px_4px_40px_rgba(0,0,0,0.05)] rounded-lg focus-within:outline-none"
                type="text"
                placeholder="Your Email Here"
              />
              <span className="absolute top-[50%] right-3 -translate-y-[50%]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5766 7.29556L2.05121 1.07401C1.92508 1.01137 1.78471 0.987775 1.64639 1.00597C1.50806 1.02417 1.37747 1.08341 1.26977 1.17681C1.16207 1.27021 1.08168 1.39395 1.03794 1.53365C0.994194 1.67334 0.988892 1.82327 1.02265 1.96603L1.91564 5.73706L7.63166 7.99937L1.91564 10.2617L1.02265 14.0327C0.988257 14.1756 0.993116 14.3258 1.03666 14.4659C1.0802 14.6059 1.16062 14.73 1.26851 14.8235C1.37641 14.9171 1.50732 14.9763 1.64592 14.9942C1.78453 15.0122 1.92511 14.9881 2.05121 14.9247L14.5766 8.70318C14.7032 8.64038 14.8103 8.54084 14.8852 8.41621C14.9602 8.29158 15 8.147 15 7.99937C15 7.85174 14.9602 7.70716 14.8852 7.58253C14.8103 7.4579 14.7032 7.35836 14.5766 7.29556V7.29556Z"
                    fill="#393E50"
                    fillOpacity="0.4"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomPlan;
