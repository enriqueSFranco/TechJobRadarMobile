import { createContext, useState } from "react";
import { CartItem, Pizza } from "@/shared/types.d";

export type ShoppingCartContexType = {
  cart: CartItem[];
  addItem: (product: Pizza, pizzaSize: Pizza["size"]) => void;
};

export const ShoppingCartContex = createContext<ShoppingCartContexType | null>(
  null,
);

type ShoppingCartProviderProps = {
  children: React.ReactNode;
};
export function ShoppingCartProvider ({ children }: ShoppingCartProviderProps) {
  const [cart, updateCart] = useState<CartItem[]>([]);

  function addItem (product: Pizza, pizzaSize: Pizza["size"]) {
    const newProduct: CartItem = {
      id: crypto.randomUUID(),
      product: product,
      product_id: product.id,
      size: pizzaSize,
      quantity: 1,
    };
    updateCart((prevCart) => [...prevCart, newProduct]);
  }

  const data: ShoppingCartContexType = { cart, addItem };
  return (
    <ShoppingCartContex.Provider value={data}>
      {children}
    </ShoppingCartContex.Provider>
  );
}
