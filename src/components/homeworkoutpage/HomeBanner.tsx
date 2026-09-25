import Image from "next/image";
import React from "react";
import heroimg from "@/assets/banner.png";

const HomeBanner = () => {
  return (
    <section className="container mx-auto mt-8 px-4 sm:mt-10 sm:px-5 md:mt-12 md:px-6 md:mb-16">
      <div className="flex flex-col items-center justify-between gap-10 rounded-2xl bg-[#222630] px-5 py-8 sm:px-8 sm:py-10 md:flex-row md:gap-6 md:px-6 md:py-12 ">
        <div className="w-full ">
          <h2 className="text-sm font-bold text-[#C2F800] sm:text-base">
            WORKOUT LIBRARY
          </h2>

          <h1 className="my-4 text-3xl font-extrabold leading-tight sm:my-5 sm:text-4xl md:text-4xl md:leading-tight lg:text-5xl xl:text-6xl xl:leading-16">
            TRAIN WITH INTENT. LOG <br className="hidden sm:block" /> EVERY SET.
          </h1>

          <p className="mb-5 max-w-[460px] text-sm leading-6 text-[#9CA3AF] sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a href="#library">
            <button className="px-5 py-3 text-sm font-bold text-black bg-[#C2F800] rounded sm:px-6 sm:text-base cursor-pointer">
              BROWSE WORKOUTS
            </button>
          </a>
        </div>

        {/* right part */}
        <div className="flex w-full justify-center md:w-1/2 md:justify-end">
          <Image
            src={heroimg}
            alt="hero banner"
            width={400}
            className="h-auto w-[220px] sm:w-[280px] md:w-[300px] lg:w-[350px] xl:w-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
