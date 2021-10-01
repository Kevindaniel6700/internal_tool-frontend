import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const axios = require("axios");

let value = "";

function getValue(e) {
  let value = e.target.value;
  console.log(value);
}
function search(e) {
  e.preventDefault();
  console.log(value);
  axios.get("http://localhost:3000/searchSender?sender=" + value).then((res) => {
    console.log(res.data);
  });
}

ReactDOM.render(<App></App>, document.getElementById("root"));

reportWebVitals();
