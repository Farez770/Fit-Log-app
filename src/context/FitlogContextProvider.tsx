"use client";

import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";

import { IWorkOutType } from "@/types/type";

interface IFitlogContext {
  plan: IWorkOutType[];
  saved: IWorkOutType[];
  addToPlan: (workout: IWorkOutType) => void;
  removeFromPlan: (workoutId: number) => void;
}

export const FitlogContext = createContext<IFitlogContext | undefined>(
  undefined,
);

const FitlogContextProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IWorkOutType[]>([]);
  const [saved, setSaved] = useState<IWorkOutType[]>([]);

  const addToPlan = (workout: IWorkOutType) => {
    const alreadyExists = plan.some((item) => item.id === workout.id);

    if (alreadyExists) {
      toast.success("Workout already exists in today's plan");
      return;
    }

    setPlan((previousPlan) => [...previousPlan, workout]);

    toast.success("Workout added to today's plan");
  };

  const removeFromPlan = (workoutId: number) => {
    setPlan((previousPlan) =>
      previousPlan.filter((item) => item.id !== workoutId),
    );
  };

  return (
    <FitlogContext.Provider value={{ plan, saved, addToPlan, removeFromPlan }}>
      {children}
    </FitlogContext.Provider>
  );
};

export default FitlogContextProvider;
