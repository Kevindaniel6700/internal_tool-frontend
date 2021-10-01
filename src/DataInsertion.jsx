import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CategoryKey from "./CategoryKey";
const axios = require("axios");

function DataInsertion() {
  const [result, setResult] = useState({});
  const [inp, setInp] = useState([1]);

  function pushArr(event) {
    event.preventDefault();
    setInp((arr) => [...arr, `${arr.length}`]);
  }

  function getValue(event) {
    const { name, value } = event.target;
    setResult((prevalue) => {
      // console.log(prevalue);
      return {
        ...prevalue,
        [name]: value,
      };
    });
  }

  function renderInp(data, index) {
    console.log(index);
    return <input name={index} key={index} type="text" onChange={getValue} />;
  }
  // ******************************************************input*******************************************************************

  const [companyName, setCompanyName] = useState("");
  const [rootCompany, setRootCompany] = useState("");

  const [para, setPara] = useState("");

  function getCompany(e) {
    setCompanyName(e.target.value);
  }

  function getRootCompany(e) {
    setRootCompany(e.target.value);
  }

  function submitInput(e) {
    e.preventDefault();
    if (companyName && rootCompany && result !== "") {
      console.log("possibledomain:" + result);
      setPara("");
      let info = {
        company_name: companyName,
        root_company: rootCompany,
        possible_domains: Object.values(result),
      };

      console.log(info);

      axios
        .post("http://localhost:3005/insert", info)
        .then(function (response) {
          console.log(response);
          console.log("post request sent!");
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setPara("Please fill all the datas");
    }
  }

  return (
    <div className="parent">
      <h5>Data Insertion</h5>
      <div className="child">
        <form>
          <label for="">
            <h6>Company Name:</h6>
          </label>
          <input type="text" onChange={getCompany}></input> <br></br>
          <label for="">
            <h6>Root Company:</h6>
          </label>
          <input type="text" onChange={getRootCompany}></input> <br></br>
          <label for="">
            <h6>Possible Domain:</h6>
          </label>
          {inp.map(renderInp)}
          <button className="plus" onClick={pushArr}>
            +
          </button>
          <br></br>
          <h5>Category Key</h5>
          <CategoryKey />
          <button onClick={submitInput} className="submit">
            Submit
          </button>
        </form>
        <p>{para}</p>
      </div>
    </div>
  );
}

export default DataInsertion;
