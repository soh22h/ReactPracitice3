import React from "react";
import "../styles/MainContent.css";
import { Card } from "./main-components/card";
import { sampleProducts } from "../utils/mockData";
import { Product } from "../utils/type";

const products:Product[] = sampleProducts;

const ProductsForWoman: React.FC = () => {
  const gender = false;
  const productsForMan = products.filter((obj)=>{
    return obj.gender === gender
  })

  return (
    <main className="main-content">
      <h2>This is product for Woman page ...</h2>
      <Card sampleProducts={productsForMan} />
    </main>
  );
};

export default ProductsForWoman;