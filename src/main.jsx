import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Start from "./components/Start";
import Navigation from "./components/Navigation";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Start />
    <Navigation />
  </React.StrictMode>,
  document.getElementById("root")
);
