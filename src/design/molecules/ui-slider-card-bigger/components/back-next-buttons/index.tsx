import React from "react";
import TextComponent from "design/atoms/ui-text";
import BackArrowIcon from "assets/svg/arrow_gray_back.svg";
import NextArrowIcon from "assets/svg/arrow_blue_next.svg";
import "./styles.scss";

interface Props {
  step: number;
  steps: number;
  setStep: (step: number) => void;
}

const BackNextButtonsComponent: React.FC<Props> = (props: Props) => {
  const { step, steps, setStep } = props;
  const onBackClick = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  const onNextClick = () => {
    if (step < steps) {
      setStep(step + 1);
    }
  };
  return (
    <div className="back-next-button">
      <div
        onClick={onBackClick}
        className={`back-next-button--icon ${
          step === 0
            ? "back-next-button--icon-disabled"
            : "back-next-button--icon-enabled"
        }`}
      >
        <img src={BackArrowIcon} alt="back-arrow" />
      </div>
      <TextComponent
        classParam="mr-8"
        textColor="black"
        textSize="regular"
        textWeight="thin"
      >
        {`${step + 1}/${steps + 1}`}
      </TextComponent>
      <div
        onClick={onNextClick}
        className={`back-next-button--icon ${
          step === steps
            ? "back-next-button--icon-disabled"
            : "back-next-button--icon-enabled"
        }`}
      >
        <img src={NextArrowIcon} alt="back-arrow" />
      </div>
    </div>
  );
};

export default React.memo(BackNextButtonsComponent);
