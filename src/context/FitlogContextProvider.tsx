"use client";

import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";

import { IWorkOutType } from "@/types/type";

interface IFitlogContext {
  plan: IWorkOutType[];
  saved: IWorkOutType[];
  addToPlan: (workout: IWorkOutType) => boolean;
  removeFromPlan: (workoutId: number) => void;
  addToSaved: (workout: IWorkOutType) => boolean;
  removeFromSaved: (workoutId: number) => void;
  completeWorkout: number[];
  markAsDone: (workoutId: number) => void;
}

export const FitlogContext = createContext<IFitlogContext | undefined>(
  undefined,
);

const FitlogContextProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IWorkOutType[]>([]);
  const [saved, setSaved] = useState<IWorkOutType[]>([]);
  const [completeWorkout, setCompleteWorkout] = useState<number[]>([]);

  const markAsDone = (workoutId: number) => {
    setCompleteWorkout((prev) => [...prev, workoutId]);
  };

  // Add workout to today's plan
  const addToPlan = (workout: IWorkOutType) => {
    if (plan.length >= 5) {
      toast.warning(`You have a plan of 5 workouts per day!`, {
        theme: "dark",
      });
      return false;
    }

    const alreadyExists = plan.some((excercise) => excercise.id === workout.id);

    if (alreadyExists) {
      // toast.success("Workout already exists in today's plan");
      toast.info(`${workout.name} is already in today's plan!`, {
        theme: "dark",
      });
      return false;
    }

    setPlan((previousPlan) => [...previousPlan, workout]);

    // toast.success("Workout added to today's plan");
    return true;
  };

  // Remove workout from today's plan
  const removeFromPlan = (workoutId: number) => {
    setPlan((prev) => prev.filter((workout) => workout.id !== workoutId));
  };

  // Add workout to saved
  const addToSaved = (workout: IWorkOutType) => {
    const alreadySaved = saved.some((item) => item.id === workout.id);

    if (alreadySaved) {
      toast.info(`Workout is already saved for later`, {
        theme: "dark",
      });
      return false;
    }

    setSaved((previousSaved) => [...previousSaved, workout]);

    // toast.success("Workout saved for later");
    return true;
  };

  // Remove workout from saved
  const removeFromSaved = (workoutId: number) => {
    setSaved((prev) => prev.filter((workout) => workout.id !== workoutId));
  };

  const shearedData = {
    plan,
    saved,
    addToPlan,
    removeFromPlan,
    addToSaved,
    removeFromSaved,
    completeWorkout,
    markAsDone,
  };

  return (
    <FitlogContext.Provider value={shearedData}>
      {children}
    </FitlogContext.Provider>
  );
};

export default FitlogContextProvider;
