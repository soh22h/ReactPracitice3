// src/components/MainContent.tsx
import React from "react";
import "../styles/MainContent.css";
import { Card } from "./main-components/card";
import { sampleProducts } from "../utils/mockData";
import { Product } from "../utils/type";

const products:Product[] = sampleProducts;

const MainContent: React.FC = () => {
  return (
    <main className="main-content">
      <h2>신상품</h2>
      <Card sampleProducts={products} />
    </main>
  );
};

export default MainContent;
