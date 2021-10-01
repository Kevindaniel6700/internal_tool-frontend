import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchData from "./SearchData";
import DataInsertion from "./DataInsertion";
const axios = require("axios");
function App() {
  // **********************************************************************************************************************************

  const [height, setHeight] = useState({});
  const [render, setRender] = useState("search data");

  const [btnColor, setBtnColor] = useState({
    btn1: "#007fff",
    btn2: "grey",
    btn3: "grey",
  });

  function renderData(event) {
    const name = event.target.name;

    setBtnColor((prevalue) => {
      if (name === "btn1") {
        setRender("search data");
        setHeight({ height: "auto" });
        return {
          btn1: "#007fff",
          btn2: "grey",
          btn3: "grey",
        };
      }
      if (name === "btn2") {
        setRender("data insertion");
        setHeight({ height: "100vh" });
        return {
          btn1: "grey",
          btn2: "#007fff",
          btn3: "grey",
        };
      }
      if (name === "btn3") {
        return {
          btn1: "grey",
          btn2: "grey",
          btn3: "#007fff",
        };
      }
    });
  }

  return (
    <div className="container-xxl" style={height}>
      <div class="renderBtn">
        <button onClick={renderData} style={{ backgroundColor: btnColor.btn1 }} name="btn1" class="btn1">
          Search Data
        </button>
        <button onClick={renderData} style={{ backgroundColor: btnColor.btn2 }} name="btn2" class="btn2">
          Data Insertion
        </button>
        <button onClick={renderData} style={{ backgroundColor: btnColor.btn3 }} name="btn3" class="btn3">
          button
        </button>
      </div>
      {render === "search data" ? <SearchData /> : render === "data insertion" ? <DataInsertion /> : null}
    </div>
  );
}

export default App;
