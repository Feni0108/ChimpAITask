import React from "react";
import HomePage from "./components/Home";
import ProductTable from "./components/ProductTable";

const App = () => {
  return (
    <div>
      <section id="home">
        <HomePage />
      </section>
      <section id="products">
        <ProductTable />
      </section>
    </div>
  );
};

export default App;
