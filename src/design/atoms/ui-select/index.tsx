import React, { ChangeEvent } from "react";
import "./styles.scss";

export interface SelectType {
  value: any;
  label: string;
}

interface Props {
  values: SelectType[];
  selected: any;
  onChange: (data: string) => void
}

const SelectComponent: React.FC<Props> = (props: Props) => {
  const { values, selected, onChange } = props;
  const handleOnChange = (value: ChangeEvent<HTMLSelectElement>) => {
    onChange(value.target.value)
  }
  return (
    <select className="custom-select" onChange={handleOnChange}>
      {values.map((val) => (
        <option key={val.value} defaultValue={selected} value={val.value}>
          {val.label}
        </option>
      ))}
    </select>
  );
};

export default SelectComponent;
