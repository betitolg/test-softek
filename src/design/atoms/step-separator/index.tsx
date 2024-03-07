import React from "react";
import "./styles.scss";

const StepSeparatorComponent = () => {
  return (
    <div className="step-separator">
      <div className="step-separator--element"></div>
      <div className="step-separator--element"></div>
      <div className="step-separator--element"></div>
      <div className="step-separator--element"></div>
    </div>
  );
};

export default React.memo(StepSeparatorComponent);
