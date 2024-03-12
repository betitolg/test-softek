import React from "react";
import StepComponent from "design/atoms/ui-step";
import StepSeparatorComponent from "design/atoms/step-separator";
import "./styles.scss";

export type StepType = {
  step: number;
  text: string;
};

interface Props {
  steps: StepType[];
  stepSelected: number;
}

const StepsComponent: React.FC<Props> = (props: Props) => {
  const { steps, stepSelected = 1 } = props;
  return (
    <div className="steps">
      {steps.map((element, index) => {
        return index === steps.length - 1 ? (
          <StepComponent
            step={element.step}
            text={element.text}
            isSelected={stepSelected === index + 1}
          />
        ) : (
          <>
            <StepComponent
              step={element.step}
              text={element.text}
              isSelected={stepSelected === index + 1}
            />
            <StepSeparatorComponent />
          </>
        );
      })}
    </div>
  );
};

export default StepsComponent;
