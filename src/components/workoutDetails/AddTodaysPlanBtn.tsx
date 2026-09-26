"use client";

import { useContext } from "react";
import { FaRegCalendarCheck } from "react-icons/fa";

import { FitlogContext } from "@/context/FitlogContextProvider";
import { IWorkOutType } from "@/types/type";
import { toast } from "react-toastify";

interface IAddTodaysPlanProps {
  workout: IWorkOutType;
}

const AddTodaysPlanBtn = ({ workout }: IAddTodaysPlanProps) => {
  const context = useContext(FitlogContext);

  if (!context) {
    throw new Error(
      "AddTodaysPlanBtn must be used inside FitlogContextProvider",
    );
  }

  const { plan, addToPlan } = context;

  const handleAddToPlan = () => {
    const added = addToPlan(workout);
    if (added) {
      toast.success(`${workout.name} Added to today's plan`, { theme: "dark" });
    }
  };

  return (
    <button
      onClick={handleAddToPlan}
      // disabled={plan.length >= 5}
      className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#C2F800] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#d0ff33] sm:flex-1"
    >
      <FaRegCalendarCheck />
      {/* {plan.length >= 5
        ? `Plan is Full `
        : "Add to today's plan"} */}
      Add to today&apos;s plan
    </button>
  );
};

export default AddTodaysPlanBtn;
