"use client";
import EmptyPlanState from "@/components/shared/EmptyPlanState";
import MyPlanInfoSec from "@/components/shared/MyPlanInfoSec";
import MyPlanWorkoutCard from "@/components/shared/MyPlanWorkoutCard";
import { FitlogContext } from "@/context/FitlogContextProvider";
import { IWorkOutType } from "@/types/type";
import React, { useContext, useState } from "react";

const MyPlanPage = () => {
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );
  const { plan, saved } = useContext(FitlogContext) as {
    plan: IWorkOutType[];
    saved: IWorkOutType[];
  };

  const sortWorkout = (workOut: IWorkOutType[]) => {
    const sortedWorkout = [...workOut];
    if (sortBy === "duration") {
      sortedWorkout.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "calories") {
      sortedWorkout.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }
    if (sortBy === "rating") {
      sortedWorkout.sort((a, b) => b.rating - a.rating);
    }

    return sortedWorkout;
  };

  const sortedTodaysPlan = sortWorkout(plan);
  const sortedSavedWOrkout = sortWorkout(saved);

  return (
    <section className="container mx-auto px-6 mt-10">
      <div>
        <h1 className="text-center md:text-left text-xl md:text-2xl lg:text-3xl font-bold">
          MY PLAN
        </h1>
        <p className="text-[#8A92A0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      {/* ================ */}
      <MyPlanInfoSec />
      {/* ========================================================== */}
      {/* Sorted By-- */}
      <div className="flex justify-end items-center gap-2 mb-2">
        <h1 className="text-[#8A92A0]">Sorted By</h1>
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "duration" | "calories" | "rating")
          }
          // defaultValue="Duration"
          className="select select-md w-[160px]"
        >
          {/* <option disabled={true}>Duration</option> */}
          <option value={"duration"}>Duration</option>
          <option value={"calories"}>Calories</option>
          <option value={"rating"}>Rating</option>
        </select>
      </div>
      {/* tab */}
      {/* =========================================== */}

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box ">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab mb-2 border checked:bg-[#2B303D] mr-2"
          aria-label="Today's Plan"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 ">
          {sortedTodaysPlan.length > 0 ? (
            <div className="space-y-2">
              {sortedTodaysPlan.map((workout) => (
                <MyPlanWorkoutCard
                  key={workout.id}
                  workout={workout}
                  type="plan"
                />
              ))}
            </div>
          ) : (
            <EmptyPlanState />
          )}
          {/* <EmptyPlanState /> */}
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab mb-2 border  checked:bg-[#2B303D]  w-[120px]"
          aria-label="Saved"
          // defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedSavedWOrkout.length > 0 ? (
            <div className="space-y-2">
              {sortedSavedWOrkout.map((workout) => (
                <MyPlanWorkoutCard
                  key={workout.id}
                  workout={workout}
                  type="saved"
                />
              ))}
            </div>
          ) : (
            <EmptyPlanState />
          )}

          {/* <EmptyPlanState /> */}
        </div>
      </div>
    </section>
  );
};

export default MyPlanPage;
