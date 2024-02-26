import React from "react";
import "./styles.scss";

export interface SelectType {
  value: any;
  label: string;
}

interface Props {
  values: SelectType[];
  selected: any;
}

const SelectComponent: React.FC<Props> = (props: Props) => {
  const { values, selected } = props;
  return (
    <select className="custom-select" name="select">
      {values.map((val) => (
        <option selected={selected === val.value} value={val.value}>
          {val.label}
        </option>
      ))}
    </select>
  );
};

export default SelectComponent;
