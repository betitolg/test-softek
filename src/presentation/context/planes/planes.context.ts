import { Authentication } from "domains/softtek/authentication/models/authentication.model";
import { PlansModel } from "domains/softtek/plans/models/plans-model";
import React from "react";

type PlanesContextType = {
  step: number;
  steps: number;
  stepSelected: number;
  setStep: (step: number) => void;
  setStepSelected: (step: number) => void;
  page: number;
  setPage: (page: number) => void;
  userInfo: Authentication | null;
  setUserInfo: (value: Authentication) => void
  userInfoPlans: PlansModel[] | null;
  setUserInfoPlans: (value: PlansModel[]) => void
};

export const PlanesContext = React.createContext<PlanesContextType>({
  step: 1,
  steps: 3,
  stepSelected: 1,
  setStep: () => null,
  setStepSelected: () => null,
  page: 1,
  setPage: () => null,
  userInfo: null,
  setUserInfo: () => {},
  userInfoPlans: null,
  setUserInfoPlans: () => {}
});
