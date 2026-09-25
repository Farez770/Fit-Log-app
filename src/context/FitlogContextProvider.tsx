"use client";
import { createContext, ReactNode, useState } from "react";
import { IWorkOutType } from "@/types/type";

interface IFitlogContext {
  plan: IWorkOutType[];
  saved: IWorkOutType[];
  addToPlan: (workout: IWorkOutType) => void;
}

export const FitlogContext = createContext<IFitlogContext | undefined>(
  undefined,
);

const FitlogContextProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IWorkOutType[]>([]);
  const [saved, setSaved] = useState<IWorkOutType[]>([]);

  const addToPlan = (workout: IWorkOutType) => {
    // setPlan((prev) => [...prev, workout]);
    setPlan((prev) => {
      const updatedPlan = [...prev, workout];
      console.log("Updated plan:", updatedPlan);
      return updatedPlan;
    });
  };

  // const removeFromPlan = () => {
  //   setPlan();
  // };

  const shearedData = { plan, saved, addToPlan };

  return (
    <FitlogContext.Provider value={shearedData}>
      {children}
    </FitlogContext.Provider>
  );
};

export default FitlogContextProvider;
