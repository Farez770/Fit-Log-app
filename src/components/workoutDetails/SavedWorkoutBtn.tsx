"use client";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { IWorkOutType } from "../../types/type";
import { FitlogContext } from "@/context/FitlogContextProvider";
import { FaRegBookmark, FaRegCalendarCheck } from "react-icons/fa";

interface IAddTodaysPlanProps {
  workout: IWorkOutType;
}

const SavedWorkoutBtn = (workout: IAddTodaysPlanProps) => {
  const context = useContext(FitlogContext);

  if (!context) {
    throw new Error(
      "AddTodaysPlanButton must be used inside FitlogContextProvider",
    );
  }
  const { plan, addToPlan } = context;

  const handleAddToPlan = () => {
    addToPlan(workout.workout);
  };

  return (
    <div>
      <button className="flex items-center justify-center gap-2 rounded-lg border border-[#373a43] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#191c22] sm:flex-1 cursor-pointer">
        <FaRegBookmark />
        Save for later
      </button>
    </div>
  );
};

export default SavedWorkoutBtn;
