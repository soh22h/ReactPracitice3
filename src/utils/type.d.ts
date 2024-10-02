export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  gender: boolean;
}

export interface UserCart {
  userId: string;
  productId: string[];
}