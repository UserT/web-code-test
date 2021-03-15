import './App.css';
import StockProducts from './StockProducts.jsx';
import BuyList from './BuyList.jsx';
import React, { useState } from "react";

function App() {

  const [selectedItems, setSelectedItems] = useState([]);
  
  return (
    <div className="p-10 m-auto bg-blue-50 min-h-screen">
      <div className="border border-gray-300 rounded-lg w-full bg-white p-10 shadow-lg">
        <h1 className="m-0 p-0 text-2xl font-semibold">Restaurant Order System</h1>
        <hr className="my-3 border border-0 border-t-1 border-gray-200" />
        Select products below to add to the ordering guide

        <StockProducts
          onItemSelected={
            (item) => (selectedItems.includes(item))
              ? setSelectedItems(selectedItems.map((selectedItem) => {
                if (selectedItem.id !== item.id) return selectedItem;
                return Object.assign(selectedItem, { qty: selectedItem.qty + 1 })
              }))
              : setSelectedItems(selectedItems.concat(Object.assign(item, { qty:1 })))
          }
        />

        <BuyList 
          items={selectedItems}
          removeSeleted= {(item) => setSelectedItems(selectedItems.filter((value)=>{ 
            return value !== item
            }))}
          updateQTY = {(itemNumber, qty) => setSelectedItems(selectedItems.map((selectedItem) => {
            if (selectedItem.id !== itemNumber) return selectedItem;
            return Object.assign(selectedItem, { qty: qty})
          }))} 
        />

      </div>
    </div>
  );
}

export default App;
