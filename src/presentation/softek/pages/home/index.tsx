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
import ImageBlurLeft from "assets/images/blur-asset-left.png";
import ImageBlurLeftMobile from "assets/images/blur-asset2-mobile.png";
import useHome from "./hooks/useHome"
import SelectComponent from "@design/atoms/ui-select";
import InputComponent from "@design/atoms/ui-input";
import { AuthenticationRepository } from "@domains/softtek/authentication/repositories/authentication.repository";
import { PlansRepository } from "@domains/softtek/plans/repositories/plans.repository";
import "./styles.scss";
import { Controller } from "react-hook-form";
interface Props {
  repository: AuthenticationRepository,
  plansRepository: PlansRepository
}

const Home: React.FC<Props> = (props: Props) => {
  const { repository, plansRepository } = props;
  const { control,
    errors,
    handleSubmit,
    onSubmit,
    watch } = useHome(repository, plansRepository)

  const politicaPrivacidadValue = watch("politicaPrivacidad")
  return (
    <Layout>
      <div className="container-home">
        <img
          src={ImageBlurLeft}
          alt="logo blur left"
          className="container-home--blur-left-desktop"
        />
        <img
          src={ImageBlurLeftMobile}
          alt="logo blur left"
          className="container-home--blur-left-mobile"
        />

        <div className="container-home--content">
          <div className="container-home--content-banner">
            <img
              src={BannerRimac}
              className="container-home--banner-desktop"
              alt="banner rimac"
            />
          </div>
          <form className="container-home--banner-text-container" onSubmit={handleSubmit(onSubmit)}>
            <div className="container-home--banner-text">
              <div style={{ width: "100%" }}>
                <WrapperText class="mb-16">
                  <TextComponent
                    textSize="medium"
                  >{"Seguro Salud Flexible"}</TextComponent>
                </WrapperText>
                <TextComponent
                  textSize="bigger"
                  classParam="mb-8"
                >{"Creado para ti y tu familia"}</TextComponent>
              </div>
              <img
                src={BannerMobileRimac}
                className="container-home--banner-mobile"
                alt="banner rimac"
              />
            </div>
            <SeparatorComponent classParam="container-home--banner-text-separator" />
            <TextComponent
              textSize="medium"
              classParam="mb-24"
            >{"Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online."}</TextComponent>
            <WrapperInputs classParam="mb-16">
              <Controller
                name="documentTypeNumber"
                control={control}
                render={({ field }) => <SelectComponent
                  onChange={field.onChange}
                  values={[
                    {
                      value: "dni",
                      label: "DNI",
                    },
                    { value: "ce", label: "CE" },
                  ]}
                  selected={field.value}
                />}
              />
              <Controller
                name="documentNumber"
                control={control}
                render={({ field }) => <InputComponent
                  onChange={field.onChange}
                  value={field.value}
                  placeholder="Ingrese sus datos"
                />}
              />
            </WrapperInputs>
            <WrapperInputs classParam="mb-24">
              <Controller
                name="phone"
                control={control}
                render={({ field }) => <InputComponent
                  onChange={field.onChange}
                  value={field.value}
                  placeholder="Ingrese su celular"
                />}
              />
            </WrapperInputs>
            <Controller
              name="politicaPrivacidad"
              control={control}
              render={({ field }) => <CheckboxComponent
                fieldName="politicaPrivacidad"
                checked={field.value}
                disabled={false}
                id="check1"
                label="Acepto la Política de Privacidad"
                onchange={field.onChange}
                required
                classParam="mb-12"
              />}
            />

            <Controller
              name="politicaComunicaciones"
              control={control}
              render={({ field }) => <CheckboxComponent
                fieldName="politicaComunicaciones"
                checked={field.value as boolean}
                disabled={false}
                id="check2"
                label="Acepto la Política Comunicaciones Comerciales"
                onchange={field.onChange}
                required
                classParam="mb-12"
              />}
            />
            <LinkComponent
              classParam="mb-12"
              href="#"
              label="Aplican Términos y Condiciones."
            />
            <ButtonComponent disabled={!politicaPrivacidadValue} typeButton="submit" text="Cotiza aquí" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default React.memo(Home);
