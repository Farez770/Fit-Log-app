"use client";

import { useContext } from "react";
import { FitlogContext } from "@/context/FitlogContextProvider";

interface IMyPlanInfoSecProps {
  activeTab: "plan" | "saved";
}

const MyPlanInfoSec = ({ activeTab }: IMyPlanInfoSecProps) => {
  const context = useContext(FitlogContext);

  if (!context) {
    throw new Error("MyPlanInfoSec must be used inside FitlogContextProvider");
  }

  const { plan, saved } = context;

  const currentWorkouts = activeTab === "plan" ? plan : saved;

  const totalExercises = currentWorkouts.length;

  const totalMinutes = currentWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = currentWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  return (
    <section className="my-6 rounded-2xl border border-[#292c34] bg-[#12151b] px-6 py-7">
      <div className="grid grid-cols-1 divide-y divide-[#20232a] md:grid-cols-3 md:divide-x md:divide-y-0">
        <div className="px-0 py-3 md:px-6 md:py-0 first:md:pl-0">
          <p className="text-sm text-[#8b919d]">Exercises</p>
          <h1 className="mt-1 text-4xl font-extrabold text-[#C2F800]">
            {totalExercises}
          </h1>
        </div>

        <div className="px-0 py-5 md:px-6 md:py-0">
          <p className="text-sm text-[#8b919d]">Minutes</p>
          <h1 className="mt-1 text-4xl font-extrabold text-white">
            {totalMinutes}
          </h1>
        </div>

        <div className="px-0 py-5 md:px-6 md:py-0 last:md:pr-0">
          <p className="text-sm text-[#8b919d]">Calories</p>
          <h1 className="mt-1 text-4xl font-extrabold text-white">
            {totalCalories}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default MyPlanInfoSec;
