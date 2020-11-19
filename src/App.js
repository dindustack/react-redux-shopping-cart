import React, { useState } from "react";
import items from "./Data";
import Categories from "./Categories";
import Menu from "./Menu";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <section className="min-vh-100 d-flex align-items-center pt-5 pt-md-5">
      <div className="container">
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </div>
    </section>
  );
};

export default App;
