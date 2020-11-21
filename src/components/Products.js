import React, { Component } from "react";
// import formatCurrency from "../utils";

class Products extends Component {
  render() {
    return (
      <>
        {this.props.products.map((product) => (
          <div className="col-md-4 col-sm-6 mb-4" key={product._id}>
            <div className="card product-card">
              <a href={"#" + product._id} className="card-img-top d-block overflow-hidden">
                <img src={product.image} alt={product.title} className="img-fluid" />
              </a>
              <div className="card-body py-2">
                <h3 className="card-title d-block fs-3">{product.title}</h3>
                <div className="d-flex justify-content-between">
                  <div className="text-primary h3">${product.price}</div>
                  <button className="btn btn-outline-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Products;
