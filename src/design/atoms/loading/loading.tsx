import "./loading.scss";

import LoadingSvg from "../../../assets/svg/pending.svg";
import React from "react";

type LoadingProps = {
  isFromValidate?: boolean;
};

const Loading: React.FC<LoadingProps> = (props: LoadingProps) => {
  const { isFromValidate } = props;
  return (
    <div className="spinner loading" data-testid="loading">
      <img alt="loading" src={LoadingSvg} />
      <span className="spinner__title">Danos unos segundos</span>
      {isFromValidate && (
        <span className="spinner__description">
          {`Estamos validando su identidad`}
        </span>
      )}
    </div>
  );
};

Loading.defaultProps = {
  isFromValidate: false,
};
export default Loading;
