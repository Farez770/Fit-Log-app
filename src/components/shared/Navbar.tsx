"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";

import logo from "@/assets/logo.png";
import { FitlogContext } from "@/context/FitlogContextProvider";

const Navbar = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const context = useContext(FitlogContext);
  if (!context) {
    throw new Error("Navbar must be used inside FitlogContextProvider");
  }

  const { plan, saved } = context;

  // Active link
  const isWorkoutActive = pathname === "/";
  const isMyPlanActive = pathname === "/my-plan";

  return (
    <nav className="w-full border-b border-[#202125]   bg-transparent backdrop-blur-md  text-white sticky top-0 left-0 z-10">
      <div className="mx-auto flex h-18 max-w-[1650px] items-center justify-between px-3 sm:px-5 md:px-4 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 md:gap-1.5 lg:gap-2.5"
        >
          <Image
            src={logo}
            alt="FITLOG logo"
            width={32}
            height={32}
            className="h-7 w-7 md:h-7 md:w-7 lg:h-8 lg:w-8"
          />

          <h2 className=" text-lg font-bold tracking-[1px] md:text-base lg:text-xl">
            FITLOG
          </h2>
        </Link>

        <ul className=" hidden items-center gap-0.5 md:flex lg:gap-1">
          {/* Workouts */}
          <li>
            <Link
              href="/"
              className={` block rounded-full px-3 py-2 text-xs font-medium transition lg:px-5 lg:text-sm
                ${
                  isWorkoutActive
                    ? "bg-[#18260d] text-[#c8ff00]"
                    : "text-[#a0a3ad] hover:text-white"
                }
              `}
            >
              Workouts
            </Link>
          </li>

          {/* My Plan */}

          <li>
            <Link
              href="/my-plan"
              className={` block rounded-full px-3 py-2 text-xs font-medium transition lg:px-5 lg:text-sm
                ${
                  isMyPlanActive
                    ? "bg-[#18260d] text-[#c8ff00]"
                    : "text-[#a0a3ad] hover:text-white"
                }
              `}
            >
              My Plan
            </Link>
          </li>
        </ul>

        <div className=" hidden items-center md:flex md:gap-2 lg:gap-7">
          {/* PLAN */}

          <Link
            href="/my-plan"
            className=" flex items-center gap-1.5 text-xs text-[#b4b6be] transition hover:text-white lg:gap-2 lg:text-sm"
          >
            <span>Plan</span>

            <span className=" flex h-6 w-6 items-center justify-center rounded-full bg-[#c8ff00] text-[11px] font-bold text-black">
              {plan.length}
            </span>
          </Link>

          {/* SAVED */}

          <Link
            href="/my-plan"
            className=" flex items-center gap-1.5 text-xs text-[#b4b6be] transition hover:text-white lg:gap-2 lg:text-sm"
          >
            <span>Saved</span>

            <span className=" flex h-6 w-6 items-center justify-center rounded-full border border-[#373941] text-[11px] text-[#aeb0b8]">
              {saved.length}
            </span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className=" flex h-9 w-9 items-center justify-center rounded-lg border border-[#292b30] text-[#c8ff00] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="text-xl leading-none">
            {isMenuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <div className=" border-t border-[#202125] bg-[#0d0e10] px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-2">
            {/* WORKOUTS */}

            <li>
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={` block rounded-lg px-4 py-2.5 text-sm font-medium transition
                  ${
                    isWorkoutActive
                      ? "bg-[#18260d] text-[#c8ff00]"
                      : "text-[#a0a3ad] hover:bg-[#17181b] hover:text-white"
                  }
                `}
              >
                Workouts
              </Link>
            </li>

            {/* MY PLAN */}

            <li>
              <Link
                href="/my-plan"
                onClick={() => setIsMenuOpen(false)}
                className={` block rounded-lg px-4 py-2.5 text-sm font-medium transition
                  ${
                    isMyPlanActive
                      ? "bg-[#18260d] text-[#c8ff00]"
                      : "text-[#a0a3ad] hover:bg-[#17181b] hover:text-white"
                  }
                `}
              >
                My Plan
              </Link>
            </li>

            {/* DIVIDER */}

            <li className="my-1 h-px bg-[#202125]" />

            {/* PLAN */}

            <li>
              <Link
                href="/my-plan"
                onClick={() => setIsMenuOpen(false)}
                className=" flex items-center justify-between rounded-lg px-4 py-2.5 text-sm text-[#b4b6be] transition hover:bg-[#17181b] hover:text-white"
              >
                <span>Plan</span>

                <span className=" flex h-6 w-6 items-center justify-center rounded-full bg-[#c8ff00] text-xs font-bold text-black">
                  {plan.length}
                </span>
              </Link>
            </li>

            {/* SAVED */}

            <li>
              <Link
                href="/my-plan"
                onClick={() => setIsMenuOpen(false)}
                className=" flex items-center justify-between rounded-lg px-4 py-2.5 text-sm text-[#b4b6be] transition hover:bg-[#17181b] hover:text-white"
              >
                <span>Saved</span>

                <span className=" flex h-6 w-6 items-center justify-center rounded-full border border-[#373941] text-xs text-[#aeb0b8]">
                  {saved.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
