import { Product } from "../../utils/type";
interface CardProps{
  sampleProducts: Product[]
}
export function Card({sampleProducts}:CardProps){
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
          </div>
        ))}
    </div>
  </>
  )
}