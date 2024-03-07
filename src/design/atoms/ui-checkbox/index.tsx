import React from "react";
import TextComponent from "../ui-text";
import "./styles.scss";

type Props = {
  id: string;
  disabled: boolean;
  required: boolean;
  checked: boolean;
  onchange: (value: boolean) => void;
  label: string;
  classParam?: string;
};

const CheckBoxComponent = ({
  id = "",
  disabled = false,
  required = false,
  checked = false,
  onchange = () => {},
  label = "",
  classParam = "",
}: Props) => {
  return (
    <div className={`custom-checkbox ${classParam}`}>
      <label className="custom-checkbox--label">
        <input
          type="checkbox"
          id={id}
          required={required}
          disabled={disabled}
          checked={checked}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onchange(event.target.checked)
          }
        />
        <div
          onClick={() => onchange(!checked)}
          role="button"
          tabIndex={0}
          className={`custom-checkbox--button ${
            checked
              ? "custom-checkbox--button-checked"
              : "custom-checkbox--button-unchecked"
          }`}
        />
        <TextComponent
          textColor="secondary"
          textSize="small"
          textWeight="thin"
        >{label}</TextComponent>
      </label>
    </div>
  );
};

export default React.memo(CheckBoxComponent);
