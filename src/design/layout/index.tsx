import React, { ReactNode } from "react";
import "./styles.scss";
import LogoRimac from "assets/images/logo-rimac.png";
import PhoneIcon from "assets/images/phone-icon.png";
import LogoWhiteRimac from "assets/images/logo-white-rimac.png";
import TextComponent from "design/atoms/ui-text";
import StepsComponent from "design/molecules/ui-steps";
import ImageBlurRight from "assets/images/blur-asset-right.png";
import SeparatorComponent from "design/atoms/ui-separator";
import ImageBlurRightMobile from "assets/images/blur-asset1-mobile.png";
import BackButtonStepsComponent from "design/molecules/ui-backbutton-steps";
type Props = {
  children?: ReactNode;
  noFooter?: boolean
  withStep?: boolean
};

const Layout: React.FC<Props> = (props: Props) => {
  const { children, noFooter = false, withStep = false } = props;
  return (
    <div className="content">
      <img
        src={ImageBlurRightMobile}
        alt="logo blur right"
        className="content--blur-right-mobile"
      />
      {!noFooter && <img
        src={ImageBlurRight}
        alt="logo blur right"
        className="content--blur-right-desktop"
      />}

      <div className={`${noFooter ? 'content--body-full' : 'content--body'}`}>
        <div className="content--header">
          <div className="content--header-content">
            <img src={LogoRimac} alt="logo rimac" />
            <div className="content--header-text">
              <TextComponent
                textSize="small"
                textColor="primary"
                textWeight="normal"
                classParam="mr-16 content--header-text-desktop"
              >{"¡Compra por este medio!"}</TextComponent>
              <div className="content--header-phone">
                <img src={PhoneIcon} alt="phone" className="mr-8" />
                <TextComponent
                  textSize="regular-high"
                  textColor="primary"
                  textWeight="bold"
                >{"(01) 411 6001"}</TextComponent>
              </div>
            </div>
          </div>
        </div>
        {withStep && <div className="content--stepper">
          <div className="content--stepper-content">
            <StepsComponent stepSelected={1} steps={[
              {
                step: 1,
                text: 'Planes y coberturas',
              },
              {
                step: 2,
                text: 'Resumen'
              }
            ]} />
            <BackButtonStepsComponent step={1} totalSteps={2}/>
          </div>
        </div>}
        {children}
      </div>
      {
        !noFooter && <div className="content--footer">
        <img src={LogoWhiteRimac} alt="logo white rimac" />
        <SeparatorComponent classParam="content--footer-separator" />
        <TextComponent
          textSize="medium"
          textColor="white"
          textWeight="normal"
          classParam="content--footer-desktop"
        >
          {"© 2023 RIMAC Seguros y Reaseguros."}
        </TextComponent>
        <TextComponent
          textSize="small"
          textColor="white"
          textWeight="normal"
          classParam="content--footer-mobile"
        >{"© 2023 RIMAC Seguros y Reaseguros."}</TextComponent>
      </div>
      }
      
    </div>
  );
};

export default React.memo(Layout);
