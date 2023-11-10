import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./components/layout/Layout";
import "./presentation.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout></Layout>
  </React.StrictMode>
);
