import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <>
      <ul className="nav justify-content-center mb-5">
        {categories.map((category, index) => {
          return (
            <li className="nav-item">
              <a className="nav-link active text-uppercase text-danger font-weight-bold" href="#action" key={index} onClick={() => filterItems(category)}>
                {category}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Categories;
