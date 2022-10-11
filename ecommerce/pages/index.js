import React from "react";

import { HeroBanner, FooterBanner, Product } from "../components";

const Home = () => {
  return (
    <>
      HeroBanner
      <div className="products-heading">
        <h2>Best Sellng Products</h2>
        <p>Different HeadPhones</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 200"].map((product) => product)}
      </div>
      Footer
    </>
  );
};

export default Home;
