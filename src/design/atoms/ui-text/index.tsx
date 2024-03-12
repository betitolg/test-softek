import React, { ReactNode } from "react";
import "./styles.scss";
export type TextWeight = "bold" | "normal" | "thin";
export type TextSize =
  | "smaller"
  | "small"
  | "medium"
  | "regular"
  | "regular-high"
  | "middle-high"
  | "high"
  | "bigger"
  | "max-bigger";
export type TextColor =
  | "primary"
  | "secondary"
  | "gray"
  | "white"
  | "black"
  | "gray-200"
  | "red";

interface Props {
  textWeight?: TextWeight;
  textSize?: TextSize;
  textColor?: TextColor;
  classParam?: string;
  children: ReactNode;
}

const TextComponent: React.FC<Props> = (props: Props) => {
  const {
    textWeight = "normal",
    textSize = "medium",
    textColor = "primary",
    classParam = "",
    children,
  } = props;

  const generateClass = () => {
    return `text text-weight--${textWeight} text-size--${textSize} text-color--${textColor} ${classParam}`;
  };
  return <p className={`${generateClass()}`}>{children}</p>;
};

export default React.memo(TextComponent);
