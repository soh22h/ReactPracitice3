import React from "react";
import "../styles/MainContent.css";
import { Card } from "./main-components/card";
import { sampleProducts } from "../utils/mockData";
import { Product } from "../utils/type";

const products:Product[] = sampleProducts;

const ProductsForMan: React.FC = () => {
  const gender = true;
  const productsForMan = products.filter((obj)=>{
    return obj.gender === gender
  })

  return (
    <main className="main-content">
      <h2>This is product for Man page ...</h2>
      <Card sampleProducts={productsForMan} />
    </main>
  );
};

export default ProductsForMan;