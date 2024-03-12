import React from "react";
import ArrowBackImage from "assets/images/arrow_back.png";
import "./styles.scss";

interface Props {
  onClick: () => void;
  text: string;
}

const BackButtonComponent: React.FC<Props> = (props: Props) => {
  const { onClick = () => {}, text = "" } = props;
  return (
    <div className={`back-button ${text === "" ? "back-button--no-text" : ""}`}>
      <div className="back-button--element" onClick={onClick}>
        <img src={ArrowBackImage} alt="icon" />
      </div>
      {text !== "" ? <p className="back-button--text">{text}</p> : <></>}
    </div>
  );
};

export default React.memo(BackButtonComponent);
