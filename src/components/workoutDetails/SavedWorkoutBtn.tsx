"use client";
import React, { useContext } from "react";
// import React, { Dispatch, SetStateAction, useContext } from "react";
import { IWorkOutType } from "../../types/type";
import { FitlogContext } from "@/context/FitlogContextProvider";
import { FaRegBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

interface IAddTodaysPlanProps {
  workout: IWorkOutType;
}

const SavedWorkoutBtn = ({ workout }: IAddTodaysPlanProps) => {
  const context = useContext(FitlogContext);

  if (!context) {
    throw new Error(
      "AddTodaysPlanButton must be used inside FitlogContextProvider",
    );
  }
  const { addToSaved } = context;

  const handleSavedWorkout = () => {
    const added = addToSaved(workout);
    if (added) {
      toast.success(`${workout.name} is Saved for later!`);
    }
  };

  return (
    <div>
      <button
        onClick={() => handleSavedWorkout()}
        className="flex items-center justify-center gap-2 rounded-lg border border-[#373a43] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#191c22] sm:flex-1 cursor-pointer"
      >
        <FaRegBookmark />
        Save for later
      </button>
    </div>
  );
};

export default SavedWorkoutBtn;
