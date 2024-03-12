import React from "react";
import BackButtonComponent from "presentation/softek/pages/planes/components/back-button";
import TextComponent from "design/atoms/ui-text";
import ProgressBarComponent from "design/atoms/ui-progress-bar";
import "./styles.scss";

interface Props {
  step: number;
  totalSteps: number;
}

const BackButtonStepsComponent: React.FC<Props> = (props: Props) => {
  const { step = 1, totalSteps = 2 } = props;
  return (
    <div className="back-steps">
      <div className="back-steps--content">
        <BackButtonComponent onClick={() => {}} text="" />
        <TextComponent
          classParam="mr-8"
          textSize="smaller"
          textColor="black"
          textWeight="bold"
        >
          {`Paso ${step} de ${totalSteps}`}
        </TextComponent>
        <ProgressBarComponent porcentage={50} />
      </div>
    </div>
  );
};

export default React.memo(BackButtonStepsComponent);
