import "./polyfills";
import React from "react";
import ReactDOM from "react-dom/client";
import InboxPage from "./InboxPage-hooks";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { ThirdwebProvider } from "@thirdweb-dev/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThirdwebProvider>
      <InboxPage />
    </ThirdwebProvider>
  </React.StrictMode>
);

// Register service worker
serviceWorkerRegistration.register();
