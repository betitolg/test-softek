import React from "react";
import "./styles.scss";

interface Props {
  porcentage: number;
}
const ProgressBarComponent: React.FC<Props> = (props: Props) => {
  const { porcentage } = props;
  return (
    <div className="progress-bar">
      <div style={{ width: `${porcentage}%` }}>
        <div className="progress-bar--advance"></div>
      </div>
    </div>
  );
};

export default React.memo(ProgressBarComponent);
