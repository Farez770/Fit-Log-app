"use client";
import EmptyPlanState from "@/components/shared/EmptyPlanState";
import MyPlanInfoSec from "@/components/shared/MyPlanInfoSec";
import MyPlanWorkoutCard from "@/components/shared/MyPlanWorkoutCard";
import { FitlogContext } from "@/context/FitlogContextProvider";
import { IWorkOutType } from "@/types/type";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const MyPlanPage = () => {
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

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

  const [selectedWorkout, setSelectedWorkout] = useState<IWorkOutType[]>([]);

  const handleRemoveWorkout = (id: number) => {
    setSelectedWorkout((prevWorkout) =>
      prevWorkout.filter((workout) => workout.id !== id),
    );

    toast.info(`${id} Remove from the Today's Plan`);
  };

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
      <MyPlanInfoSec activeTab={activeTab} />
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

      <div className="tabs tabs-box">
        <button
          type="button"
          onClick={() => setActiveTab("plan")}
          className={`tab mb-2 border mr-2 ${activeTab === "plan" ? "bg-[#2B303D]" : ""}`}
        >
          Today&apos;s Plan
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("saved")}
          className={`tab mb-2 border w-[120px] ${activeTab === "saved" ? "bg-[#2B303D]" : ""}`}
        >
          Saved
        </button>

        <div className="w-full bg-base-100 border-base-300 p-6">
          {activeTab === "plan" ? (
            sortedTodaysPlan.length > 0 ? (
              <div className="space-y-2 ">
                {sortedTodaysPlan.map((workout) => (
                  <MyPlanWorkoutCard
                    key={workout.id}
                    workout={workout}
                    type="plan"
                    removeWorkout={handleRemoveWorkout}
                  />
                ))}
              </div>
            ) : (
              <EmptyPlanState />
            )
          ) : sortedSavedWOrkout.length > 0 ? (
            <div className="space-y-2">
              {sortedSavedWOrkout.map((workout) => (
                <MyPlanWorkoutCard
                  key={workout.id}
                  workout={workout}
                  type="saved"
                  removeWorkout={handleRemoveWorkout}
                />
              ))}
            </div>
          ) : (
            <EmptyPlanState />
          )}
        </div>
      </div>
    </section>
  );
};

export default MyPlanPage;
