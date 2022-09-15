import React from "react";
import { CATEGORIES } from "../data";

function CategoryFilter({CATEGORIES, category, setCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map(item => <button key = {item} onClick={() =>setCategory(item) }>{item}</button>)}
    </div>
  );
}

export default CategoryFilter;
