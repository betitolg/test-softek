import React from "react";
import TextComponent from "design/atoms/ui-text";
import FamilyIcon from "assets/svg/icon_family.svg";
import SeparatorComponent from "design/atoms/ui-separator";

interface Props {
  name: string;
  documentNumber: string;
  phone: string;
  plan: string;
  cost: string;
}

const CardLargeComponent: React.FC<Props> = (props: Props) => {
  const { name, documentNumber, phone, plan, cost } = props;
  return (
    <div className="card card--full text-align-left">
      <div className="flex-row-start">
        <TextComponent
          classParam="mb-8"
          textColor="black"
          textSize="smaller"
          textWeight="bold"
        >
          Precios calculados para:
        </TextComponent>
      </div>

      <div className="flex-row">
        <img
          src={FamilyIcon}
          alt="family"
          className="mr-8"
          width="24"
          height="24"
        />
        <TextComponent textColor="black" textSize="high" textWeight="bold">
          {name}
        </TextComponent>
      </div>
      <SeparatorComponent />

      <div className="flex-col mb-24">
        <TextComponent textSize="regular" textColor="black" textWeight="bold">
          Responsable de pago
        </TextComponent>

        <TextComponent textSize="medium" textColor="black" textWeight="thin">
          {`DNI: ${documentNumber}`}
        </TextComponent>
        <TextComponent textSize="medium" textColor="black" textWeight="thin">
          {`Celular: ${phone}`}
        </TextComponent>
      </div>

      <div className="flex-col">
        <TextComponent textSize="regular" textColor="black" textWeight="bold">
          Plan elegido
        </TextComponent>

        <TextComponent textSize="medium" textColor="black" textWeight="thin">
          {plan}
        </TextComponent>
        <TextComponent textSize="medium" textColor="black" textWeight="thin">
          {`Costo del Plan: $${cost} al mes`}
        </TextComponent>
      </div>
    </div>
  );
};

export default React.memo(CardLargeComponent);
