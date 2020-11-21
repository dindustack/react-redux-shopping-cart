import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-between">
    <div className="h3 mb-3 mr-5">{this.props.count} products{" "}</div>

          <div className="input-group mb-3">
            <label className="input-group-text">Order</label>
            <select className="btn btn-outline-primary" value={this.props.sort} onChange={this.props.sortProducts}>
              <option>Latest</option>
              <option>Lowest</option>
              <option>Highest</option>
            </select>
          </div>

          <div className="input-group mb-3">
            <label className="input-group-text">Filter</label>
            <select className="btn btn-outline-primary" value={this.props.size} onChange={this.props.filterProducts}>
              <option value="">ALL</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
        </div>
      </>
    );
  }
}
export default Filter;
