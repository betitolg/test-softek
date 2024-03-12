import React, { useState } from "react";
import { PlanesContext } from "./planes.context";
import { Authentication } from "domains/softtek/authentication/models/authentication.model";
import { PlansModel } from "domains/softtek/plans/models/plans-model";

type Props = {
  children?: React.ReactChild;
};
export const PlanesProvider: React.FC<Props> = ({ children }: Props) => {
  const [step, setStep] = useState<number>(0);
  const [steps, setSteps] = useState<number>(2);
  const [stepSelected, setStepSelected] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [userInfo, setUserInfo] = useState<Authentication | null>(null)
  const [userInfoPlans, setUserInfoPlans] = useState<PlansModel[] | null>(null)

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
        setUserInfo,
        userInfo,
        userInfoPlans,
        setUserInfoPlans
      }}
    >
      {children}
    </PlanesContext.Provider>
  );
};
