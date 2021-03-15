import StockProductsData from "./data/stockProducts.json";
import ProductItem from "./ProductItem.jsx";
import React from "react";

const StockProducts = ({ onItemSelected }) => {
  return (
    <div className="w-full mt-4">
      <h1 className="font-semibold text-2xl">Products</h1>

      <div className="flex border border-gray-200 p-2 rounded mt-2 overflow-x-auto">
        {StockProductsData.map((stockProductData) => (
          <ProductItem
            key={stockProductData.itemNumber}
            onProductSelect={() => onItemSelected(stockProductData)}
            itemNumber={stockProductData.itemNumber}
            name={stockProductData.name}
            image={stockProductData.image}
            description={stockProductData.description}
            price={stockProductData.price}
          />
        ))}
      </div>
    </div>
  );
};

export default StockProducts;
