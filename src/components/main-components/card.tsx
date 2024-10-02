import { Product } from "../../utils/type";
import { useAppDispatch, useAppSelector } from "../../redux/store.ts";
import { useCallback } from "react";
import { addCart } from "../../redux/slices/userSlice.ts";
interface CardProps {
  sampleProducts: Product[];
}
export function Card({ sampleProducts }: CardProps) {
  const loginData = useAppSelector((state) => state.user.loginUser);
  const dispatch = useAppDispatch();
  console.log(loginData?.carts);

  const handleAddCart = useCallback((product: Product) => {
    dispatch(addCart(product.name));
  }, []);

  return (
    <>
      <div className="product-grid">
        {sampleProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.imageUrl} alt={product.imageUrl} />
            <h3 className="product-card__name">{product.name}</h3>
            <p className="product-card__price">
              {product.price.toLocaleString()}원
            </p>
            <button className="button" onClick={() => handleAddCart(product)}>
              add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
