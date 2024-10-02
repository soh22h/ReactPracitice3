import { Product } from "../utils/type";
import useLocalStorage from "../hooks/useLocationStorage.ts";
import { useAppSelector } from "../redux/store.ts";

export default function ShoppingCart() {
  const loginData = useAppSelector((state) => state.user.loginUser);
  const [cart, _] = useLocalStorage<Product[]>(
    loginData ? loginData.id : "",
    [],
  );

  return (
    <div>
      {cart.map((c) => (
        <div key={c.id} className={"badge badge-primary"}>
          {c.name}
        </div>
      ))}
    </div>
  );
}
