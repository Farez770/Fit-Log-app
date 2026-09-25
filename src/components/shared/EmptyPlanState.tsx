"use client";

import Link from "next/link";
import { FaArrowRight, FaDumbbell } from "react-icons/fa";

const EmptyPlanState = () => {
  return (
    <div className="flex min-h-[350px] items-center justify-center rounded-2xl border border-dashed border-[#30343d]  px-5 py-12 text-center">
      <div className="flex max-w-md flex-col items-center">
        {/* bg-[#12151b] */}
        {/* <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#1b2410] text-2xl text-[#C2F800]">

          <FaDumbbell />
        </div> */}

        <h2 className="text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl">
          NOTHING HERE YET
        </h2>

        <p className="mt-3 text-sm leading-6 text-[#A1A1AA] sm:text-base">
          Browse the library and add a lift to get today moving.
        </p>

        <Link
          href="/"
          className="mt-6 flex items-center gap-2 rounded-full bg-[#C2F800] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#d4ff3d] "
        >
          Go to Workouts
          {/* <FaArrowRight className="text-xs" /> */}
        </Link>
      </div>
    </div>
  );
};

export default EmptyPlanState;
