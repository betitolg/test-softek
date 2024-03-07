import React, { useState } from "react";
import SelectComponent from "@design/atoms/ui-select";
import TextComponent from "@design/atoms/ui-text";
import InputComponent from "@design/atoms/ui-input";
import "./styles.scss";

interface Props {
  singleInput: boolean;
  classParam?: string;
}

const WrapperInputs: React.FC<Props> = (props: Props) => {
  const { singleInput, classParam = "" } = props;
  const [documentNumber, setDocumentNumber] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleDocumentNumber = (value: string) => {
    setDocumentNumber(value);
  };

  const handlePhoneNumber = (value: string) => {
    setPhoneNumber(value);
  };

  return (
    <div className={`wrapper-inputs ${classParam}`}>
      <div className="wrapper-inputs--content">
        {singleInput ? (
          <div className="wrapper-inputs--content-single">
            <TextComponent textColor="gray" textSize="small">
              {"Celular"}
            </TextComponent>
            <InputComponent
              onChange={handlePhoneNumber}
              value={phoneNumber}
              placeholder="Ingrese su celular"
            />
          </div>
        ) : (
          <>
            <div className="wrapper-inputs--content-left">
              <SelectComponent
                values={[
                  {
                    value: "dni",
                    label: "DNI",
                  },
                  { value: "ce", label: "CE" },
                ]}
                selected=""
              />
            </div>
            <div className="wrapper-inputs--content-right">
              <TextComponent
                textColor="gray"
                textSize="small"
              >{"Nro. de documento"}</TextComponent>
              <InputComponent
                onChange={handleDocumentNumber}
                value={documentNumber}
                placeholder="Ingrese sus datos"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default React.memo(WrapperInputs);
