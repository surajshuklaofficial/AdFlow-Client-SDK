import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Theme } from "@radix-ui/themes";

import "./index.css";
import Router from "./routes.tsx";
import { store } from "./app/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <Router />
      </Theme>
    </Provider>
  </React.StrictMode>
);

// console.log("mode", import.meta.env.MODE);
// console.log("url", import.meta.env.BASE_URL);
// console.log("PROd", import.meta.env.PROD);
// console.log("dev", import.meta.env.DEV);
// console.log("ssr", import.meta.env.SSR);
