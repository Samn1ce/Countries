import { createContext } from "react";

type StepContextType = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const StepContext = createContext<StepContextType | null>(null);
