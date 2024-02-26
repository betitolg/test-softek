import React from "react";
import "./styles.scss";

interface Props {
  classParam?: string;
}

const SeapratorComponent: React.FC<Props> = (props: Props) => {
  const { classParam } = props;
  return <div className={`separator-mobile ${classParam}`}></div>;
};

export default React.memo(SeapratorComponent);
