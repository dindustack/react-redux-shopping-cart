import React from "react";

const Menu = ({ items }) => {
  return (
    <>
      <div className="row">
        {items.map((menuItem) => {
          const { id, title, img, desc, price } = menuItem;
          return (
            <div className="col-12 col-md-4 mb-3" key={id}>
              <div className="card shadow">
                <img src={img} className="card-img-top" alt={title} />
                <div className="card-body">
                  <h5 className="card-title text-uppercase">{title}</h5>
                  <p className="card-text">
                    {desc}
                  </p>
                  <a href="#action" className="badge text-decoration-none mx-auto rounded-pill bg-danger h1">
                    ${price}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
