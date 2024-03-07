import React, { useState } from "react";
import { PlanesContext } from "./planes.context";

type Props = {
  children?: React.ReactChild;
};
export const PlanesProvider: React.FC<Props> = ({ children }: Props) => {
  const [step, setStep] = useState<number>(0);
  const [steps, setSteps] = useState<number>(2);
  const [stepSelected, setStepSelected] = useState<number>(0);
  const [page, setPage] = useState<number>(0);

  return (
    <PlanesContext.Provider
      value={{
        step,
        steps,
        stepSelected,
        setStep,
        setStepSelected,
        page,
        setPage,
      }}
    >
      {children}
    </PlanesContext.Provider>
  );
};
