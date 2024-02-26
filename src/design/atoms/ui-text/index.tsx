import React from "react";
import "./styles.scss";
export type TextWeight = "bold" | "normal" | "thin";
export type TextSize =
  | "small"
  | "medium"
  | "regular"
  | "regular-high"
  | "high"
  | "bigger";
export type TextColor = "primary" | "secondary" | "gray" | "white";

interface Props {
  text: string;
  textWeight?: TextWeight;
  textSize?: TextSize;
  textColor?: TextColor;
  classParam?: string;
}

const TextComponent: React.FC<Props> = (props: Props) => {
  const {
    text = "",
    textWeight = "normal",
    textSize = "medium",
    textColor = "primary",
    classParam = "",
  } = props;

  const generateClass = () => {
    return `text text-weight--${textWeight} text-size--${textSize} text-color--${textColor} ${classParam}`;
  };
  return <p className={`${generateClass()}`}>{text}</p>;
};

export default React.memo(TextComponent);
