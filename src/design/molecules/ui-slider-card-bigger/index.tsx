import React, { ReactNode } from "react";
import BackNextButtonsComponent from "./components/back-next-buttons";
import "./styles.scss";

interface Props {
  children: ReactNode;
  stepSelected: number;
  steps: number;
  setStepSelected: (step: number) => void;
}

const SliderComponent: React.FC<Props> = (props: Props) => {
  const { children, stepSelected, steps, setStepSelected } = props;
  return (
    <div className="slider">
      <div
        className="slider--content"
        style={{ transform: `translateX(-${stepSelected * 250}px)` }}
      >
        {children}
      </div>
      <div className="slider--actions">
        <BackNextButtonsComponent
          setStep={setStepSelected}
          step={stepSelected}
          steps={steps}
        />
      </div>
    </div>
  );
};

export default React.memo(SliderComponent);
