import React from "react";
import "./styles.scss";
import AppRoutes from "./app.routes";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "./config/react-query.config";

const App = () => {
  return (
    <div className="container-app">
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};

export default React.memo(App);
