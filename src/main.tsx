import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./app/presentation/Layout.tsx";

import "./assets/scss/main.scss";
import "./assets/css/animate.css";
import "./assets/css/flaticon_shofy.css";
import "./assets/css/font-awesome-pro.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout></Layout>
  </React.StrictMode>
);
