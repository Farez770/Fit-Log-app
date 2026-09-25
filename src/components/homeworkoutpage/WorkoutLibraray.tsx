import { IWorkOutType } from "@/types/type";
import React from "react";
import WorkoutCards from "../shared/WorkoutCards";

const getWorkoutData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const WorkoutLibraray = async () => {
  const workData = await getWorkoutData();
  console.log(workData, "Workout data");
  return (
    <div className="container mx-auto px-6" id="library">
      <div className="text-center md:text-left mb-8">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold ">
          THE LIBRARY
        </h1>
        <p className="text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5 sm:gap-6 lg:gap-7">
        {workData.map((workout: IWorkOutType) => {
          return <WorkoutCards key={workout.id} workout={workout} />;
        })}
      </div>
    </div>
  );
};

export default WorkoutLibraray;
