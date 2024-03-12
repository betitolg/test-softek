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
  fieldName: string;
};

const CheckBoxComponent: React.FC<Props> = ({
  id = "",
  disabled = false,
  required = false,
  checked = false,
  onchange = () => {},
  label = "",
  classParam = "",
  fieldName = "",
}: Props) => {
  const handleOnChange = () => {
    console.log("checked change ", checked);
    onchange(!checked);
  };
  return (
    <div className={`custom-checkbox ${classParam}`}>
      <div
        onClick={handleOnChange}
        role="button"
        tabIndex={0}
        className={`custom-checkbox--button ${
          checked
            ? "custom-checkbox--button-checked"
            : "custom-checkbox--button-unchecked"
        }`}
      />
      <label className="custom-checkbox--label">
        <input
          type="checkbox"
          id={id}
          disabled={disabled}
          checked={checked}
          name={fieldName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onchange(event.target.checked)
          }
        />
        <TextComponent textColor="secondary" textSize="small" textWeight="thin">
          {label}
        </TextComponent>
      </label>
    </div>
  );
};

export default React.memo(CheckBoxComponent);
