import React from "react";

const Categories = ({ fun_categories, fun_filterItem }) => {
  return (
    <div className="btn-container">
      {/* <button className="filter-btn" onClick={() => filterItem("all")}>
        All
      </button>
      <button className="filter-btn" onClick={() => filterItem("breakfast")}>
        Breakfast
      </button> */}
      {fun_categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => fun_filterItem(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
