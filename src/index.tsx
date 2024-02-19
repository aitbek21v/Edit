import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContext from "./context/ProductContext";
import MainRoutes from "./routes/MainRoutes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ProductContext>
    <BrowserRouter>
      <App />
      <MainRoutes />
    </BrowserRouter>
  </ProductContext>
);