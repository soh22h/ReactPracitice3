import { Product } from "../../utils/type";
import { useAppSelector } from "../../redux/store.ts";
interface CardProps {
  sampleProducts: Product[];
}
export function Card({ sampleProducts }: CardProps) {
  const loginData = useAppSelector((state) => state.user.loginUser);
  console.log(loginData?.carts)

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
            <button className="button">
              add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
