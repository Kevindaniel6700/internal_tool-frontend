import React, { useState } from "react";
import "./App.css";

function CategoryKey() {
  const [inp, setInp] = useState([1]);

  const [category, setCategory] = useState([1]);

  function RenderCat(index) {
    return (
      <div>
        <br></br>
        <input placeholder="Category Name" type="text"></input>
        {inp.map(renderInp)}
        <button name={index} onClick={pushArr}>
          +
        </button>
      </div>
    );
  }

  function pushcat(event) {
    event.preventDefault();
    setCategory((arr) => [...arr, `${arr.length}`]);
  }

  function pushArr(event) {
    event.preventDefault();
    setInp((arr) => [...arr, `${arr.length}`]);
  }

  function renderInp(data, index) {
    return <input placeholder="Category Value" key={index} type="text" />;
  }

  return (
    <div className="App">
      <button className="addCategoryBtn" onClick={pushcat}>
        Add Category
      </button>
      {category.map(RenderCat)}
    </div>
  );
}

export default CategoryKey;
