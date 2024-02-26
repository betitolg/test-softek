import React from "react";
import "./styles.scss";
import AppRoutes from "./app.routes";

const App = () => {
  return (
    <div className="container-app">
      <AppRoutes />
    </div>
  );
};

export default React.memo(App);
