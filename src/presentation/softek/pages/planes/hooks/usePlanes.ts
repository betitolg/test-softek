import { PlanesContext } from "presentation/context/planes/planes.context";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function usePlanes() {
  const {
    step,
    steps,
    setStep,
    stepSelected,
    setStepSelected,
    page,
    setPage,
  } = useContext(PlanesContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (page === 0) {
      navigate("/home");
    }
  });

  const handleBack = () => {
    setPage(page - 1);
  };
  const handleSelectPlan = () => {
    setPage(2);
  };

  return {
    step,
    steps,
    stepSelected,
    page,
    setStepSelected,
    setStep,
    setPage,
    handleBack,
    handleSelectPlan,
  };
}

export default usePlanes;
