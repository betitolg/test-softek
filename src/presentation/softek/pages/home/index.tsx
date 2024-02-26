import React, { useState } from "react";
import Layout from "@design/layout/index";
import TextComponent from "@design/atoms/ui-text/index";
import WrapperText from "@design/molecules/ui-wrapper-text";
import BannerRimac from "@assets/images/banner-rimac.png";
import BannerMobileRimac from "@assets/images/banner-mobile.png";
import WrapperInputs from "@design/molecules/ui-wrapper-inputs";
import CheckboxComponent from "@design/atoms/ui-checkbox";
import LinkComponent from "@design/atoms/ui-link";
import ButtonComponent from "@design/atoms/ui-button";
import SeparatorComponent from "@design/atoms/ui-separator";
import "./styles.scss";

const Home = () => {
  const [politicaPrivacidad, setPoliticaPrivacidad] = useState<boolean>(false);
  const [politicaComunicaciones, setPoliticaComunicaciones] = useState<boolean>(
    false
  );

  return (
    <Layout>
      <div className="container-home">
        <div className="container-home--content">
          <div className="container-home--content-banner">
            <img
              src={BannerRimac}
              className="container-home--banner-desktop"
              alt="banner rimac"
            />
          </div>
          <div style={{ width: "360px" }}>
            <div className="container-home--banner-text">
              <div style={{ width: "100%" }}>
                <WrapperText class="mb-16">
                  <TextComponent
                    text="Seguro Salud Flexible"
                    textSize="medium"
                  />
                </WrapperText>
                <TextComponent
                  text="Creado para ti y tu familia"
                  textSize="bigger"
                  classParam="mb-8"
                />
              </div>
              <img
                src={BannerMobileRimac}
                className="container-home--banner-mobile"
                alt="banner rimac"
              />
            </div>
            <SeparatorComponent classParam="container-home--banner-text-separator" />
            <TextComponent
              text="Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online."
              textSize="medium"
              classParam="mb-24"
            />
            <WrapperInputs classParam="mb-16" singleInput={false} />
            <WrapperInputs classParam="mb-24" singleInput={true} />
            <CheckboxComponent
              checked={politicaPrivacidad}
              disabled={false}
              id="check1"
              label="Acepto la Política de Privacidad"
              onchange={setPoliticaPrivacidad}
              required
              classParam="mb-12"
            />
            <CheckboxComponent
              checked={politicaComunicaciones}
              disabled={false}
              id="check2"
              label="Acepto la Política Comunicaciones Comerciales"
              onchange={setPoliticaComunicaciones}
              required
              classParam="mb-12"
            />
            <LinkComponent
              classParam="mb-12"
              href="#"
              label="Aplican Términos y Condiciones."
            />
            <ButtonComponent onClick={() => {}} text="Cotiza aquí" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default React.memo(Home);
