import React from "react";
import "./styles.scss";

interface Props {
  label: string;
  href: string;
  classParam?: string;
}

const LinkComponent: React.FC<Props> = (props: Props) => {
  return (
    <div className={`custom-link ${props.classParam}`}>
      <a href={props.href}>{props.label}</a>
    </div>
  );
};

export default LinkComponent;
