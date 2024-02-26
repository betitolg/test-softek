import React, { ReactNode } from "react";
import "./styles.scss";
import LogoRimac from "assets/images/logo-rimac.png";
import PhoneIcon from "assets/images/phone-icon.png";
import LogoWhiteRimac from "assets/images/logo-white-rimac.png";
import TextComponent from "@design/atoms/ui-text";
import ImageBlurLeft from "assets/images/blur-asset-left.png";
import ImageBlurRight from "assets/images/blur-asset-right.png";
import SeparatorComponent from "@design/atoms/ui-separator";
import ImageBlurRightMobile from "assets/images/blur-asset1-mobile.png";
import ImageBlurLeftMobile from "assets/images/blur-asset2-mobile.png";
type Props = {
  children?: ReactNode;
};

const Layout: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <div className="content">
      <img
        src={ImageBlurLeft}
        alt="logo blur left"
        className="content--blur-left-desktop"
      />
      <img
        src={ImageBlurRight}
        alt="logo blur right"
        className="content--blur-right-desktop"
      />

      <img
        src={ImageBlurLeftMobile}
        alt="logo blur left"
        className="content--blur-left-mobile"
      />
      <img
        src={ImageBlurRightMobile}
        alt="logo blur right"
        className="content--blur-right-mobile"
      />

      <div className="content--header">
        <img src={LogoRimac} alt="logo rimac" />
        <div className="content--header-text">
          <TextComponent
            text="¡Compra por este medio!"
            textSize="small"
            textColor="primary"
            textWeight="normal"
            classParam="mr-16 content--header-text-desktop"
          />
          <div className="content--header-phone">
            <img src={PhoneIcon} alt="phone" className="mr-8" />
            <TextComponent
              text="(01) 411 6001"
              textSize="regular-high"
              textColor="primary"
              textWeight="bold"
            />
          </div>
        </div>
      </div>
      <div className="content--body">{children}</div>
      <div className="content--footer">
        <img src={LogoWhiteRimac} alt="logo white rimac" />
        <SeparatorComponent classParam="content--footer-separator" />
        <TextComponent
          text="© 2023 RIMAC Seguros y Reaseguros."
          textSize="medium"
          textColor="white"
          textWeight="normal"
          classParam="content--footer-desktop"
        />
        <TextComponent
          text="© 2023 RIMAC Seguros y Reaseguros."
          textSize="small"
          textColor="white"
          textWeight="normal"
          classParam="content--footer-mobile"
        />
      </div>
    </div>
  );
};

export default React.memo(Layout);
