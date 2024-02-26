import React from "react";
import "./styles.scss";

type Props = {
  onClick: () => void;
  text: string;
};

const ButtonComponent: React.FC<Props> = (props: Props) => {
  const { onClick, text } = props;
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonComponent;
