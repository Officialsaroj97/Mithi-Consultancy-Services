import { StrictMode } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-56qhnfuwacfn8haf.us.auth0.com"
    clientId="WsXp7pVsPcMKndDZLe3zCYPfNP96kvrs"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </Auth0Provider>
);
