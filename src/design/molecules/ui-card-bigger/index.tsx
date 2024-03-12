import React, { ReactNode } from "react";
import TextComponent from "design/atoms/ui-text/index";
import WrapperText from "design/molecules/ui-wrapper-text";
import SeparatorComponent from "design/atoms/ui-separator";
import "./styles.scss";
import ButtonComponent from "design/atoms/ui-button";

interface Props {
  imageUrl: string;
  title: string;
  subtitle: string;
  price: string;
  widthImage?: string;
  heightImage?: string;
  children?: ReactNode;
  isRecomend?: boolean;
  onClick: () => void;
}

const CardBiggerComponent: React.FC<Props> = (props: Props) => {
  const {
    imageUrl = "",
    title = "",
    subtitle = "",
    price = "",
    children,
    widthImage = "52",
    heightImage = "52",
    isRecomend = false,
    onClick = () => {},
  } = props;
  return (
    <div className={`card-bigger`}>
      <div
        className={`card-bigger--header ${
          isRecomend ? "card-bigger--header-add-margin" : ""
        }`}
      >
        <div className="card-bigger--header-container">
          {isRecomend && (
            <WrapperText class="mb-4">
              <TextComponent textSize="medium">
                {"Plan recomendado"}
              </TextComponent>
            </WrapperText>
          )}
          <div className="card-bigger--header-content">
            <div style={{ maxWidth: "152px" }}>
              <TextComponent
                textColor="black"
                textSize="middle-high"
                textWeight="bold"
              >
                {title}
              </TextComponent>
            </div>

            <img
              src={imageUrl}
              alt="icono"
              width={widthImage}
              height={heightImage}
            />
          </div>
          <TextComponent
            textColor="gray-200"
            textSize="small"
            textWeight="bold"
          >
            {subtitle}
          </TextComponent>
          <TextComponent
            textColor="black"
            textSize="high"
            textWeight="bold"
          >{`$${price} al mes`}</TextComponent>
        </div>
        <SeparatorComponent classParam="mb-24 mt-24" />
        {children}
      </div>

      <ButtonComponent
        text={"Seleccionar Plan"}
        onClick={onClick}
        type="primary"
      />
    </div>
  );
};

export default React.memo(CardBiggerComponent);
