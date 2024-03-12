import React from "react";
import Layout from "design/layout/index";
import BackButtonComponent from "./components/back-button";
import TextComponent from "design/atoms/ui-text";
import CardComponent from "design/molecules/ui-card";
import ImagePerson from "assets/images/image_person_protect.png";
import ImagePersonCroz from "assets/images/image_person_croz.png";
import CardBiggerComponent from "design/molecules/ui-card-bigger";
import ImageHome from "assets/images/icon_home.png";
import ImageClinic from "assets/images/icon_clinic.png";
import SliderComponent from "design/molecules/ui-slider-card-bigger";
import usePlanes from "./hooks/usePlanes";
import CardLarge from "design/molecules/ui-card/ui-card-large";
import "./styles.scss";

const PlanesComponent = () => {
  const {
    stepSelected,
    steps,
    setStepSelected,
    page,
    setPage,
    handleBack,
    handleSelectPlan,
  } = usePlanes();
  return (
    <Layout noFooter={true} withStep={true}>
      <div className="planes">
        <div className={`planes--container`}>
          <div className="planes--back-container">
            <div className="planes--back-content">
              <BackButtonComponent onClick={handleBack} text="Volver" />
            </div>
          </div>
          <div className="planes--quote">
            {page === 1 && (
              <>
                <div className="planes--quote-content">
                  <TextComponent
                    textColor="black"
                    textSize="max-bigger"
                    textWeight="bold"
                  >
                    {"Rocío ¿Para quién deseas cotizar?"}
                  </TextComponent>
                  <TextComponent
                    textColor="black"
                    textSize="regular"
                    textWeight="normal"
                  >
                    {
                      "Selecciona la opción que se ajuste más a tus necesidades."
                    }
                  </TextComponent>
                  <div className="planes--quote-cards">
                    <CardComponent
                      isSelected
                      urlImage={ImagePerson}
                      title="Para mí"
                      description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
                    />
                    <CardComponent
                      urlImage={ImagePersonCroz}
                      title="Para alguien más"
                      description="Realiza una cotización para uno de tus familiares o cualquier persona."
                    />
                  </div>
                </div>
                <div className="planes--quote-bigger-cards">
                  <CardBiggerComponent
                    imageUrl={ImageHome}
                    title={"Plan en Casa"}
                    subtitle={"COSTO DEL PLAN"}
                    price={"39"}
                    onClick={handleSelectPlan}
                  >
                    <ul className="card-list">
                      <li>
                        <TextComponent
                          textSize="regular"
                          textColor="black"
                          textWeight="thin"
                        >
                          <strong>Médico general a domicilio</strong> por S/20 y
                          medicinas cubiertas al 100%.
                        </TextComponent>
                      </li>
                      <li>
                        <TextComponent
                          textSize="regular"
                          textColor="black"
                          textWeight="thin"
                        >
                          <strong>Videoconsulta</strong> y orientación
                          telefónica al 100% en medicina general + pediatría.
                        </TextComponent>
                      </li>
                      <li>
                        <TextComponent
                          textSize="regular"
                          textColor="black"
                          textWeight="thin"
                        >
                          <strong>Indemnización</strong> de S/300 en caso de
                          hospitalización por más de un día.
                        </TextComponent>
                      </li>
                    </ul>
                  </CardBiggerComponent>
                  <CardBiggerComponent
                    imageUrl={ImageClinic}
                    title={"Plan en Casa y Clínica"}
                    subtitle={"COSTO DEL PLAN"}
                    price={"99"}
                    widthImage="45"
                    heightImage="45"
                    isRecomend
                    onClick={handleSelectPlan}
                  >
                    <ul className="card-list">
                      <li>
                        <TextComponent
                          textSize="regular"
                          textColor="black"
                          textWeight="thin"
                        >
                          <strong>Consultas en clínica</strong> para cualquier
                          especialidad.
                        </TextComponent>
                      </li>
                      <li>
                        <TextComponent
                          textSize="regular"
                          textColor="black"
                          textWeight="thin"
                        >
                          <strong>Medicinas y exámenes</strong> derivados
                          cubiertos al 80%
                        </TextComponent>
                      </li>
                      <li>
                        <TextComponent
                          textSize="regular"
                          textColor="black"
                          textWeight="thin"
                        >
                          Atención médica en{" "}
                          <strong>más de 200 clínicas del país.</strong>
                        </TextComponent>
                      </li>
                    </ul>
                  </CardBiggerComponent>
                  <CardBiggerComponent
                    imageUrl={ImageHome}
                    title={"Plan en Casa + Chequeo"}
                    subtitle={"COSTO DEL PLAN"}
                    price={"49"}
                    onClick={handleSelectPlan}
                  >
                    <ul className="card-list">
                      <li>
                        <TextComponent
                          textSize="regular"
                          textColor="black"
                          textWeight="thin"
                        >
                          <strong>Un Chequeo preventivo general</strong> de
                          manera presencial o virtual.
                        </TextComponent>
                      </li>
                      <li>
                        <TextComponent
                          textSize="regular"
                          textColor="black"
                          textWeight="thin"
                        >
                          Acceso a <strong>Vacunas</strong> en el Programa del
                          MINSA en centros privados.
                        </TextComponent>
                      </li>
                      <li>
                        <TextComponent
                          textSize="regular"
                          textColor="black"
                          textWeight="thin"
                        >
                          <strong>
                            Incluye todos los beneficios del Plan en Casa.{" "}
                          </strong>
                        </TextComponent>
                      </li>
                    </ul>
                  </CardBiggerComponent>
                </div>
                <SliderComponent
                  setStepSelected={setStepSelected}
                  stepSelected={stepSelected}
                  steps={steps}
                >
                  <CardBiggerComponent
                    imageUrl={ImageHome}
                    title={"Plan en Casa"}
                    subtitle={"COSTO DEL PLAN"}
                    price={"39"}
                    onClick={handleSelectPlan}
                  >
                    <ul className="card-list">
                      <li>
                        <TextComponent
                          textSize="regular"
                          textColor="black"
                          textWeight="thin"
                        >
                          <strong>Médico general a domicilio</strong> por S/20 y
                          medicinas cubiertas al 100%.
                        </TextComponent>
                      </li>
                      <li>
                        <TextComponent
                          textSize="regular"
                          textColor="black"
                          textWeight="thin"
                        >
                          <strong>Videoconsulta</strong> y orientación
                          telefónica al 100% en medicina general + pediatría.
                        </TextComponent>
                      </li>
                      <li>
                        <TextComponent
                          textSize="regular"
                          textColor="black"
                          textWeight="thin"
                        >
                          <strong>Indemnización</strong> de S/300 en caso de
                          hospitalización por más de un día.
                        </TextComponent>
                      </li>
                    </ul>
                  </CardBiggerComponent>
                  <CardBiggerComponent
                    imageUrl={ImageClinic}
                    title={"Plan en Casa y Clínica"}
                    subtitle={"COSTO DEL PLAN"}
                    price={"99"}
                    widthImage="45"
                    heightImage="45"
                    isRecomend
                    onClick={handleSelectPlan}
                  >
                    <ul className="card-list">
                      <li>
                        <TextComponent
                          textSize="regular"
                          textColor="black"
                          textWeight="thin"
                        >
                          <strong>Consultas en clínica</strong> para cualquier
                          especialidad.
                        </TextComponent>
                      </li>
                      <li>
                        <TextComponent
                          textSize="regular"
                          textColor="black"
                          textWeight="thin"
                        >
                          <strong>Medicinas y exámenes</strong> derivados
                          cubiertos al 80%
                        </TextComponent>
                      </li>
                      <li>
                        <TextComponent
                          textSize="regular"
                          textColor="black"
                          textWeight="thin"
                        >
                          Atención médica en{" "}
                          <strong>más de 200 clínicas del país.</strong>
                        </TextComponent>
                      </li>
                    </ul>
                  </CardBiggerComponent>
                  <CardBiggerComponent
                    imageUrl={ImageHome}
                    title={"Plan en Casa + Chequeo"}
                    subtitle={"COSTO DEL PLAN"}
                    price={"49"}
                    onClick={handleSelectPlan}
                  >
                    <ul className="card-list">
                      <li>
                        <TextComponent
                          textSize="regular"
                          textColor="black"
                          textWeight="thin"
                        >
                          <strong>Un Chequeo preventivo general</strong> de
                          manera presencial o virtual.
                        </TextComponent>
                      </li>
                      <li>
                        <TextComponent
                          textSize="regular"
                          textColor="black"
                          textWeight="thin"
                        >
                          Acceso a <strong>Vacunas</strong> en el Programa del
                          MINSA en centros privados.
                        </TextComponent>
                      </li>
                      <li>
                        <TextComponent
                          textSize="regular"
                          textColor="black"
                          textWeight="thin"
                        >
                          <strong>
                            Incluye todos los beneficios del Plan en Casa.{" "}
                          </strong>
                        </TextComponent>
                      </li>
                    </ul>
                  </CardBiggerComponent>
                </SliderComponent>
              </>
            )}
            {page === 2 && (
              <div className="planes--result">
                <TextComponent
                  textColor="black"
                  textSize="max-bigger"
                  classParam="mb-24"
                >
                  Resumen del seguro
                </TextComponent>
                <CardLarge
                  name="Rocio Miranda Díaz"
                  cost="99"
                  documentNumber="44888888"
                  phone="5130216147"
                  plan="Plan en Casa y Clínica"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default React.memo(PlanesComponent);
