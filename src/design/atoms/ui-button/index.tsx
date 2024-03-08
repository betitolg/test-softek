import React from "react";
import "./styles.scss";

type Props = {
  onClick?: () => void;
  text: string;
  type?: string;
  typeButton?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean
};

const ButtonComponent: React.FC<Props> = (props: Props) => {
  const { onClick, text, type = "default", typeButton = "button",
    disabled = false } = props;
  return (
    typeButton === "submit" ? <button
      disabled={disabled}
      className={`custom-button ${disabled ? 'custom-button--disabled' : ''} ${type === "primary" ? "custom-button--primary" : "custom-button--default"
        }`}
      type={typeButton}
    >
      {text}
    </button> :
      <button
        disabled={disabled}
        className={`custom-button ${disabled ? 'custom-button--disabled' : ''} ${type === "primary" ? "custom-button--primary" : "custom-button--default"
          }`}
        onClick={onClick}
        type={typeButton}
      >
        {text}
      </button>

  );
};

export default ButtonComponent;
