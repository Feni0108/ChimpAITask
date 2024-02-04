import React, { useEffect, useState } from "react";

//ProductTable
const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const baseUrl = "http://localhost:5011/api/Product";
        const response = await fetch(baseUrl);

        if (!response.ok) {
          console.error("HTTP error", response.status, response.statusText);
          throw new Error("Something went wrong!");
        }

        const responseJson = await response.json();

        console.log(responseJson); // This should log the actual data

        setProducts(responseJson);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setHttpError(error.message);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array to ensure useEffect runs only once

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (httpError) {
    return <p>{httpError}</p>;
  }

  // Render your data here
  return (
    <div>
      <div className="m-8 text-sm flex items-center justify-center">
        <input type="text" id="myInput" placeholder="Search..." />
      </div>
      <div className="m-8 text-sm flex items-center justify-center">
        <table>
          <tr className="px-8">
            <th>Product ID</th>
            <th>Name</th>
            <th>Product Number</th>
            <th>Color</th>
            <th>Standard Cost</th>
            <th>List Price</th>
            <th>Product Number</th>
          </tr>
          {products.map((product) => (
            <tr key={product.productId} className="px-8">
              <td className="px-8">{product.productId}</td>
              <td className="px-8">{product.name}</td>
              <td className="px-8">{product.productNumber}</td>
              <td className="px-8">{product.color}</td>
              <td className="px-8">{product.standardCost}</td>
              <td className="px-8">{product.listPrice}</td>
              <td className="px-8">{product.productNumber}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
