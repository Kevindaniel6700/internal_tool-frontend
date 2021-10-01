import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
const axios = require("axios");
function SearchData() {
  const [result, setResult] = useState([]);
  const [value, setValue] = useState("");
  const [limit, setLimit] = useState("");
  function getValue(e) {
    setValue(e.target.value);
    console.log(value);
  }

  function getLimit(e) {
    setLimit(e.target.value);
    console.log(limit);
  }

  function renderData(data, index) {
    return (
      <tr key={index}>
        <td>{data.name}</td>
        <td>{data.count}</td>
      </tr>
    );
  }

  function search(e) {
    e.preventDefault();
    console.log("inside search: " + value);
    console.log("inside search: " + limit);

    let url = encodeURI(`http://localhost:3002/searchSender?sender=${value}&limit=${limit}`);
    if (!limit) {
      url = encodeURI(`http://localhost:3002/searchSender?sender=${value}`);
    }
    axios.get(url).then((res) => {
      console.log(res);
      console.log(res.data);
      setResult(res.data);
    });
  }

  const [result2, setResult2] = useState([]);

  const [value2, setValue2] = useState("");
  const [limit2, setLimit2] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  function getValue2(e) {
    setValue2(e.target.value);
    console.log(value2);
  }

  function getLimit2(e) {
    setLimit2(e.target.value);
    console.log(limit2);
  }

  function getStart(e) {
    setStart(e.target.value);
    console.log(start);
  }

  function getEnd(e) {
    setEnd(e.target.value);
    console.log(end);
  }

  function renderData2(data, index) {
    return (
      <tr key={index}>
        <td>{data.name}</td>
        <td>{data.count}</td>
      </tr>
    );
  }

  function search2(e) {
    e.preventDefault();
    console.log(value2);
    console.log(limit2);

    let url = "http://localhost:3002/searchSubject?sender=" + value2 + "&limit=" + limit2;
    if (!limit2) {
      url = "http://localhost:3002/searchSubject?sender=" + value2;
    }
    if (start) {
      url = url + "&start=" + start;
    } else {
      url = url + "&start=1940-01-01";
    }

    if (end) {
      url = url + "&end=" + end;
    } else {
      url = url + "&end=3000-01-01";
    }

    axios.get(url).then((res) => {
      console.log(res);
      console.log(res.data);
      setResult2(res.data);
    });
  }
  // **********************************************************************************************************************************

  return (
    <div class="parent">
      <h5>Sender Keywords</h5>
      <div class="child">
        <form>
          <label for="">
            <h6>Sender Keywords:</h6>
          </label>

          <input type="text" name="sender" size="100" onChange={getValue}></input>
          <label for="">
            <h6>Limit:</h6>
          </label>
          <input class="limit" type="text" id="sender" name="sender" onChange={getLimit}></input>

          <button class="" onClick={search}>
            Search
          </button>
        </form>
        <table class="table table-striped custab table-fixed">
          <thead>
            <tr>
              <th>Email</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>{result.map(renderData)}</tbody>
        </table>
      </div>

      <h5>Search Top Subjects</h5>
      <div className="child">
        <form>
          <label for="">
            <h6>Sender Addresses:</h6>
          </label>

          <input size="100" type="text" id="sender" name="sender" onChange={getValue2}></input>
          <label for="">
            <h6>Limit:</h6>
          </label>

          <input class="limit" type="text" id="sender" name="sender" onChange={getLimit2}></input>

          <button type="submit" class="" onClick={search2}>
            Search
          </button>
          <br></br>
          <label for="">
            <h6>from:</h6>
          </label>
          <input type="text" id="sender" name="sender" size="50" onChange={getStart}></input>
          <label for="">
            <h6>Earliest To:</h6>
          </label>
          <input type="text" id="sender" name="sender" size="50" onChange={getEnd}></input>
        </form>
        <table class="table table-striped custab">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>{result2.map(renderData2)}</tbody>
        </table>
      </div>

      <h5>Search and Download Emails</h5>
      <div className="child">
        <form>
          <label for="">
            <h6>Sender Addresses:</h6>
          </label>
          <input type="text" id="sender" name="sender" size="100"></input>
          <label for="">
            <h6>Limit:</h6>
          </label>
          <input class="limit" type="text" id="sender" name="sender"></input>
          <button type="submit" class="">
            Search
          </button>
          <br></br>
          <label for="">
            <h6>Subject:</h6>
          </label>
          <input type="text" id="sender" name="sender" size="130"></input>
          <br></br>
          <label for="">
            <h6>from:</h6>
          </label>
          <input type="text" id="sender" name="sender" size="50"></input>
          <label for="">
            <h6>Earliest To:</h6>
          </label>
          <input type="text" id="sender" name="sender" size="50"></input>
        </form>
      </div>
    </div>
  );
}

export default SearchData;
