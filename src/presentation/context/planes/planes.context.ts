import React from "react";

type PlanesContextType = {
  step: number;
  steps: number;
  stepSelected: number;
  setStep: (step: number) => void;
  setStepSelected: (step: number) => void;
  page: number;
  setPage: (page: number) => void;
};

export const PlanesContext = React.createContext<PlanesContextType>({
  step: 1,
  steps: 3,
  stepSelected: 1,
  setStep: () => null,
  setStepSelected: () => null,
  page: 1,
  setPage: () => null,
});
