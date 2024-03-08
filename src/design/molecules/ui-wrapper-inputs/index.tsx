import React, { useState } from "react";
import TextComponent from "@design/atoms/ui-text";
import InputComponent from "@design/atoms/ui-input";
import "./styles.scss";
import { Controller } from "react-hook-form";

interface Props {
  classParam?: string;
  children: React.ReactNode
}

const WrapperInputs: React.FC<Props> = (props: Props) => {
  const { classParam = "", children } = props;
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={`wrapper-inputs ${classParam}`}>
      <div className="wrapper-inputs--content">
        { childrenArray.length === 1? (
          <div className="wrapper-inputs--content-single">
            <TextComponent textColor="gray" textSize="small">
              {"Celular"}
            </TextComponent>
            {childrenArray[0]}
          </div>
        ) : (
          <>
            <div className="wrapper-inputs--content-left">
              {childrenArray[0]}
            </div>
            <div className="wrapper-inputs--content-right">
              <TextComponent
                textColor="gray"
                textSize="small"
              >{"Nro. de documento"}</TextComponent>
              {childrenArray[1]}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default React.memo(WrapperInputs);
