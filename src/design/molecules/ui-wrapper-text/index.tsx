import React, { ReactNode } from "react";
import "./styles.scss";
type Props = {
  children?: ReactNode;
  class?: string;
};

const WrapperText: React.FC<Props> = (props: Props) => {
  return <div className={`wrapper-text ${props.class}`}>{props.children}</div>;
};

export default React.memo(WrapperText);
