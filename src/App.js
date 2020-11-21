import React from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

  sortProducts = (event) => {
    const sort = event.target.value;
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id < b._id
            ? 1
            : -1
        ),
    }));
  };

  filterProducts = (event) => {
    if (event.target.value === "") {
      this.setState({ size: event.target.value, product: data.products });
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
  };

  render() {
    return (
      <section className="container pt-md-3 pb-5 mb-md-3">
        <h2>Trendy Delight</h2>
        <div className="row pt-4">
          {/* ----- Product Card ------ */}
          <div className="col-12 col-md-8">
            <Filter
              count={this.state.products.length}
              size={this.state.size}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}
            />
            <div className="row">
              <Products products={this.state.products}></Products>
            </div>
          </div>
          <div className="col-12 col-md-4 offset-lg-1"></div>
        </div>
        <header>
          <a href="#action">DinduStack</a>
          <a href="#action">Admin</a>
        </header>
        <main>
          <div className="content">
            <div className="main"></div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer>&#9400; 2020</footer>
      </section>
    );
  }
}

export default App;
