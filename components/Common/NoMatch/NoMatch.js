import Image from "next/image";
import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <>
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="flex items-start justify-start flex-col gap-4">
                <h1 className="text-gray-800 font-bold text-2xl">
                  Looks like you&apos;ve found the doorway to the great nothing
                </h1>
                <p className="text-gray-800">
                  Sorry about that! Please visit our hompage to get where you
                  need to go.
                </p>
                <Link to="/" role="button" className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                  Take me there!
                </Link>
              </div>
            </div>
            <div>
              <Image alt="" src={'/assets/images/notfound/404.png'} width={100} height={100} />
            </div>
          </div>
        </div>
        <div>
          <Image alt="" src={'/assets/images/notfound/error.png'} width={100} height={100} />
        </div>
      </div>
    </>
  );
};

export default NoMatch;
