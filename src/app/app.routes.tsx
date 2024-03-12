import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "design/atoms/loading/index";
import Home from "presentation/softek/pages/home";
import Planes from "presentation/softek/pages/planes";
import { PlanesProvider } from "presentation/context/planes/planes.provider";
import { AuthFactory } from "integration/main/factories/authentication/auth-factory";
import { PlansFactory } from "integration/main/factories/plans/plans-factory";

const AppRoutes: React.FC = () => (
  <HashRouter>
    <Suspense fallback={<Loading />}>
      <PlanesProvider>
        <Routes>
          {/* <Route path="*" element={<Navigate to="/error/auth" />} /> */}
          <Route
            path="/home"
            element={
              <Home
                repository={AuthFactory}
                plansRepository={PlansFactory}
              />
            }
          />

          <Route path="/planes" element={<Planes />} />

          {/* <Route path={"/error/:type"} element={<ErrorComponent />} /> */}
        </Routes>
      </PlanesProvider>
    </Suspense>
  </HashRouter>
);
export default AppRoutes;
