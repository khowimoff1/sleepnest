import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import { Provider } from "react-redux";
import { store } from "./Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

