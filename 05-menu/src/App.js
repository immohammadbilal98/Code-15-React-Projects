import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import dataItems from "./data";

const allCategories = [
  "all",
  ...new Set(dataItems.map((item) => item.category)),
];
console.log(allCategories);

function App() {
  const [menuItem, setMenuItem] = useState(dataItems); // From Data (JSON) to menuItems
  const [categories, setCategories] = useState(allCategories); //

  const filterItem = (category) => {
    //All items except set category
    if (category === "all") {
      setMenuItem(dataItems);
      return;
    }
    //If category from dataItems will filter when I click any category, it will only looks.
    const newItems = dataItems.filter((item) => item.category === category);
    setMenuItem(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories fun_categories={categories} fun_filterItem={filterItem} />
        <Menu fun_items={menuItem} />
      </section>
    </main>
  );
}

export default App;
