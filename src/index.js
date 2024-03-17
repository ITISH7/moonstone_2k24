import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.render(
  <Auth0Provider
    domain="dev-7hwkss1f66fnft7e.us.auth0.com"
    clientId="oMirhHG4xzwCBAdUOtA11X4wPC7C7tcE"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "trytry",
      scope: "openid profile email",
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);
