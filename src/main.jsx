import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router"; // router'ni import qilish
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router}></RouterProvider>
    <Footer/>
  </React.StrictMode>
);
