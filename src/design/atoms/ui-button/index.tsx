import React from "react";
import "./styles.scss";

type Props = {
  onClick: () => void;
  text: string;
  type?: string;
};

const ButtonComponent: React.FC<Props> = (props: Props) => {
  const { onClick, text, type = "default" } = props;
  return (
    <button
      className={`custom-button ${
        type === "primary" ? "custom-button--primary" : "custom-button--default"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
