import React from "react";
import TextComponent from "design/atoms/ui-text";
import "./styles.scss";
interface Props {
  classParam?: string;
  children: React.ReactNode;
  errors?: string;
}

const WrapperInputs: React.FC<Props> = (props: Props) => {
  const { classParam = "", children, errors = "" } = props;
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={`wrapper-inputs`}>
      <div className={`wrapper-inputs--container ${classParam}`}>
        <div className="wrapper-inputs--content">
          {childrenArray.length === 1 ? (
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
                <TextComponent textColor="gray" textSize="small">
                  {"Nro. de documento"}
                </TextComponent>
                {childrenArray[1]}
              </div>
            </>
          )}
        </div>
      </div>
      {errors !== "" && (
        <TextComponent classParam="mb-5" textColor="red" textSize="small">
          {errors}
        </TextComponent>
      )}
    </div>
  );
};

export default React.memo(WrapperInputs);
