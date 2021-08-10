import React from "react";
import { render } from "react-dom";
import App from "./App";
import { RootServiceProvider } from "./providers/root-services/root-services.provider";

const rootElement = document.getElementById("root");
render(
  <RootServiceProvider>
    <App />
  </RootServiceProvider>,
  rootElement
);
