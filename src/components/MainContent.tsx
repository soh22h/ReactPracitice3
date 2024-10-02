// src/components/MainContent.tsx
import React from "react";
import "../styles/MainContent.css";
import { Card } from "./main-components/card";
import { sampleProducts } from "../utils/mockData";
import { Product } from "../utils/type";
import FilterSortMenu from "./FilterSortMenu";

const products: Product[] = sampleProducts;

const MainContent: React.FC = () => {
	return (
		<main className="main-content">
			<FilterSortMenu />
			<Card sampleProducts={products} />
		</main>
	);
};

export default MainContent;
