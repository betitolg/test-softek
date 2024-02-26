import React from "react";
import "./styles.scss";

type Props = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

const InputComponent: React.FC<Props> = (props: Props) => {
  const { onChange = () => {}, placeholder = "" } = props;
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      className="custom-input"
      type="text"
      placeholder={placeholder}
      onChange={handleOnChange}
    />
  );
};

export default React.memo(InputComponent);
