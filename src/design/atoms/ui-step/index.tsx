import React from "react";
import "./styles.scss";

interface Props {
  step: number;
  text: string;
  isSelected: boolean;
}

const StepComponent: React.FC<Props> = (props: Props) => {
  const { step, text, isSelected } = props;

  return (
    <div className="step">
      <div
        className={`step--circle ${
          isSelected ? "step--circle-selected" : "step--circle-default"
        }`}
      >
        {step}
      </div>
      <p
        className={`step--title ${
          isSelected ? "step--title-selected" : "step--title-default"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default React.memo(StepComponent);
