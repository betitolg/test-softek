import "./styles.scss";

import React from "react";

type Props = {
  primary: boolean;
  small?: boolean;
  onClick: () => void;
  text: string;
  disabled?: boolean;
  testId?: string;
};

export default function ButtonComponent({
  primary = true,
  onClick,
  text = "",
  disabled = false,
  testId = "",
  small = false,
}: Props) {
  return (
    <div
      className={
        small ? "button-component button-component__small" : "button-component"
      }
    >
      {/*  <Button
        type="button"
        variant={`${primary ? 'contained' : 'outlined'}`}
        color={`${primary ? 'success' : 'primary'}`}
        className="button-component__rounded"
        onClick={onClick}
        disabled={disabled}
        data-testid={testId}
      >
        {text}
      </Button> */}
    </div>
  );
}
