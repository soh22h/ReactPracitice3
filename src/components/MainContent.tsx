// src/components/MainContent.tsx
import React from "react";
import "../styles/MainContent.css";
import { Card, Product } from "./main-components/card";

const producList:Product[] = [];

const MainContent: React.FC = () => {
  return (
    <main className="main-content">
      <h2>신상품</h2>
      <Card sampleProducts={producList} />
    </main>
  );
};

export default MainContent;
