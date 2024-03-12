import React from "react";
import TextComponent from "design/atoms/ui-text";
import "./styles.scss";

interface Props {
  isSelected?: boolean;
  title: string;
  description: string;
  urlImage: string;
  widthImage?: string;
  heightImage?: string;
}

const CardComponent: React.FC<Props> = (props: Props) => {
  const {
    isSelected,
    title = "",
    description = "",
    urlImage = "",
    widthImage = "48",
    heightImage = "48",
  } = props;
  return (
    <div className={`card ${isSelected ? "card--selected" : ""}`}>
      <div className="card--container">
        <div className="card--check-content">
          <div
            className={`${
              isSelected ? "card--check-selected" : "card--check-default"
            }`}
          ></div>
        </div>

        <div className="card--body">
          <img
            src={urlImage}
            alt="icono"
            width={widthImage}
            height={heightImage}
          />
          <TextComponent
            textSize="high"
            textColor="black"
            textWeight="bold"
            classParam="mt-11 mb-8"
          >
            {title}
          </TextComponent>
          <div className="card--body-text">
            <TextComponent
              textSize="small"
              textColor="black"
              textWeight="normal"
            >
              {description}
            </TextComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CardComponent);
