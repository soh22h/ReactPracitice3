import React from "react";
import "../styles/MainContent.css";
import { Card } from "./main-components/card";
import { sampleProducts } from "../utils/mockData";
import { Product } from "../utils/type";
import { useAppSelector } from "../redux/store";

const products:Product[] = sampleProducts;

const ShoppingCart: React.FC = () => {
  const loginData = useAppSelector((state) => state.user.loginUser);
  const ids: string[] = loginData?.carts as string[];

  const Cartproduct = products.filter((obj)=>{
    if(obj.id in ids){
        return obj;
    } 
  })

  return (
    <main className="main-content">
      <h2>This is product for Man page ...</h2>
      <Card sampleProducts={Cartproduct} />
    </main>
  );
};

export default ShoppingCart;