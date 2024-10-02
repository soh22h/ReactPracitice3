import { Product } from "../../utils/type";
import { useAppSelector } from "../../redux/store.ts";
import useLocalStorage from "../../hooks/useLocationStorage.ts";
import { useCallback } from "react";
interface CardProps {
  sampleProducts: Product[];
}
export function Card({ sampleProducts }: CardProps) {
  const loginData = useAppSelector((state) => state.user.loginUser);
  const [_, setCart] = useLocalStorage<Product[]>(
    loginData ? loginData.id : "",
    [],
  );

  const onAddCart = useCallback((product: Product) => {
    setCart((prev) => [...prev, product]);
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
            <button className="button" onClick={() => onAddCart(product)}>
              add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
