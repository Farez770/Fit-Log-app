"use client";

import Image from "next/image";
import Link from "next/link";
import { FaClock, FaFire, FaTimes, FaCheck, FaStar } from "react-icons/fa";

import { IWorkOutType } from "@/types/type";
import { useContext } from "react";
import { FitlogContext } from "@/context/FitlogContextProvider";
import { wrap } from "module";
import { toast } from "react-toastify";

interface IMyPlanWorkoutCardProps {
  workout: IWorkOutType;
  type: "plan" | "saved";
}

const MyPlanWorkoutCard = ({ workout, type }: IMyPlanWorkoutCardProps) => {
  const context = useContext(FitlogContext);

  if (!context) {
    throw new Error(
      "MyPlanWorkoutCard must be used inside FitlogContextProvider",
    );
  }

  const { removeFromPlan, removeFromSaved, markAsDone, completeWorkout } =
    context;

  const handleRemove = () => {
    if (type == "plan") {
      removeFromPlan(workout.id);
      toast.warning(`${workout.name} removed from today's plan!`, {
        theme: "dark",
      });
    } else {
      removeFromSaved(workout.id);
      toast.success(`${workout.name} removed from saved workouts!`, {
        theme: "dark",
      });
    }
  };

  const isCompleted = completeWorkout.includes(workout.id);

  const handleMarkAsDone = () => {
    markAsDone(workout.id);
    toast.success(`${workout.name} marked as done!`, { theme: "dark" });
  };

  return (
    <article className="flex w-full items-center gap-4 rounded-2xl border border-[#292c34] bg-[#12151b] p-4 transition-colors duration-200 hover:border-[#3a3e48] sm:gap-5 sm:p-5">
      {/* ================= IMAGE ================= */}
      <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-40 md:h-32 md:w-44">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="176px"
          className="object-cover"
        />
      </div>

      {/* ================= WORKOUT INFO ================= */}
      <div className="min-w-0 flex-1">
        {/* Workout Name */}
        <h2 className="truncate text-base font-extrabold uppercase tracking-wide text-white sm:text-lg md:text-xl">
          {workout.name}
        </h2>

        {/* Workout Type / Muscle Group */}
        <p className="mt-1 text-xs font-medium text-[#8f96a3] sm:text-sm">
          {workout.muscleGroups?.join(" • ")}
        </p>

        {/* ================= STATS ================= */}
        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#a6abb5] sm:gap-x-6 sm:text-sm">
          {/* Duration */}
          <span className="flex items-center gap-1.5">
            <FaClock className="text-xs text-[#C2F800] sm:text-sm" />
            {workout.duration} min
          </span>

          {/* Calories */}
          <span className="flex items-center gap-1.5">
            <FaFire className="text-xs text-[#C2F800] sm:text-sm" />
            {workout.caloriesBurned} kcal
          </span>

          {/* Rating */}
          <span className="flex items-center gap-1.5">
            <FaStar className="text-xs text-[#C2F800] sm:text-sm" />
            {workout.rating}
          </span>
        </div>
      </div>

      {/* ================= ACTIONS ================= */}
      <div className="flex shrink-0 flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-3">
        {/* View Details */}
        <Link
          href={`/workouts/${workout.id}`}
          className="flex items-center justify-center rounded-full border border-[#373941] px-4 py-2 text-xs md:text-lg font-semibold text-white transition hover:border-[#C2F800] hover:text-[#C2F800]"
        >
          View Details
        </Link>

        {/* Mark as Done */}
        {type === "plan" && (
          <button
            onClick={handleMarkAsDone}
            type="button"
            className="flex cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#C2F800] px-4 py-2 text-xs md:text-lg font-bold text-black transition hover:bg-[#d4ff3d]"
          >
            <FaCheck className="text-[10px]" />
            {isCompleted ? "Completed" : "Mark as Done"}
            {/* <span>Mark as Done</span> */}
          </button>
        )}

        {/* Remove */}
        <button
          onClick={handleRemove}
          type="button"
          className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center self-center rounded-full text-[#737985]  transition hover:bg-[#272a31] hover:text-red-400"
          aria-label={`Remove ${workout.name}`}
        >
          <FaTimes className="text-sm md:text-lg" />
        </button>
      </div>
    </article>
  );
};

export default MyPlanWorkoutCard;
