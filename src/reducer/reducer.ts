import { SessionUser } from "../utils/type";

type ActionType =
  | { type: "addCartItem"; payload: string }
  | { type: "removeCartItem"; payload: number };

export const initialSession: SessionUser = {
  id: undefined,
  productId: [],
};

export const reducer = (user: SessionUser, action: ActionType)=>{
  switch(action.type){
    case 'addCartItem':
      return {productIds: [...user.productId, action.payload]};
    case 'removeCartItem':
      return;
  }
}