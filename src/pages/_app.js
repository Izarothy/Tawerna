import React, { Children, useState } from "react";
// komponenty React
import Obramowka from "./components/Obramowka";
import App from "./components/App";
// css
import "./styles/Obramowka.css";
import "./styles/Pytanie.css";
import "./styles/Appc.css";
import "./index.css";

const Strona = () => {
  return (
    <div>
      <App />
      <Obramowka />
    </div>
  );
};

export default Strona;
