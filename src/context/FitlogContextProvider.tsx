"use client";

import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";

import { IWorkOutType } from "@/types/type";

interface IFitlogContext {
  plan: IWorkOutType[];
  saved: IWorkOutType[];
  addToPlan: (workout: IWorkOutType) => void;
  removeFromPlan: (workoutId: number) => void;
  addToSaved: (workout: IWorkOutType) => void;
  removeFromSaved: (workoutId: number) => void;
}

export const FitlogContext = createContext<IFitlogContext | undefined>(
  undefined,
);

const FitlogContextProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IWorkOutType[]>([]);
  const [saved, setSaved] = useState<IWorkOutType[]>([]);

  // Add workout to today's plan
  const addToPlan = (workout: IWorkOutType) => {
    const alreadyExists = plan.some((item) => item.id === workout.id);

    if (alreadyExists) {
      toast.success("Workout already exists in today's plan");
      return;
    }

    setPlan((previousPlan) => [...previousPlan, workout]);

    toast.success("Workout added to today's plan");
  };

  // Remove workout from today's plan
  const removeFromPlan = (workoutId: number) => {
    setPlan((previousPlan) =>
      previousPlan.filter((item) => item.id !== workoutId),
    );
  };

  // Add workout to saved
  const addToSaved = (workout: IWorkOutType) => {
    const alreadySaved = saved.some((item) => item.id === workout.id);

    if (alreadySaved) {
      toast.success("Workout already saved");
      return;
    }

    setSaved((previousSaved) => [...previousSaved, workout]);

    toast.success("Workout saved for later");
  };

  // Remove workout from saved
  const removeFromSaved = (workoutId: number) => {
    setSaved((previousSaved) =>
      previousSaved.filter((item) => item.id !== workoutId),
    );
  };

  const shearedData = {
    plan,
    saved,
    addToPlan,
    removeFromPlan,
    addToSaved,
    removeFromSaved,
  };

  return (
    <FitlogContext.Provider value={shearedData}>
      {children}
    </FitlogContext.Provider>
  );
};

export default FitlogContextProvider;
