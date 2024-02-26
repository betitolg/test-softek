import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "design/atoms/loading/index";
import Home from "@presentation/softek/pages/home";

const AppRoutes: React.FC = () => (
  <HashRouter>
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* <Route path="*" element={<Navigate to="/error/auth" />} /> */}
        <Route path="/home" element={<Home />} />
        {/* <Route path={"/error/:type"} element={<ErrorComponent />} /> */}
      </Routes>
    </Suspense>
  </HashRouter>
);
export default AppRoutes;
