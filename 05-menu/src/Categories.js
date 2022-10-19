import React from "react";

const Categories = ({ func_categories, func_filterItem }) => {
  return (
    <div className="btn-container">
      {/*
      <button className="filter-btn" onClick={() => func_filterItem("all")}>
        All
      </button>
      <button className="filter-btn" onClick={() => func_filterItem("breakfast")}>
        Breakfast
      </button>
      .
      .
      .
      */}

      {func_categories.map((category, id) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={id}
            onClick={() => func_filterItem(category)}
          >
            {console.log(category + " " + id)}
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
