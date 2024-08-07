import { createContext, useState } from "react";
import { randomUUID } from "expo-crypto";
import { CartItem, Pizza } from "@/shared/types.d";

export type ShoppingCartContexType = {
  cart: CartItem[];
  addItem: (product: Pizza, pizzaSize: CartItem["size"]) => void;
};

export const ShoppingCartContex = createContext<ShoppingCartContexType | null>(
  null,
);

type ShoppingCartProviderProps = {
  children: React.ReactNode;
};
export function ShoppingCartProvider ({ children }: ShoppingCartProviderProps) {
  const [cart, updateCart] = useState<CartItem[]>([]);

  function addItem (product: Pizza, pizzaSize: CartItem["size"]) {
    // caso 0: Verificar si el producto ya esta agregado
    const productIdx = cart.findIndex(
      (it) => it.product_id === product.id && it.size === pizzaSize,
    );
    // caso 1: Si el producto ya está agregado, entonces aumentamos el valor de la propiedad `quantity`
    if (productIdx !== -1) {
      updateCart((prevCart) => updateQuantity(prevCart, productIdx));
    } else {
      // caso 2: Si el producto no está agregado, entonces se agrega al carrito
      const newProduct: CartItem = {
        id: randomUUID(),
        product: product,
        product_id: product.id,
        size: pizzaSize,
        quantity: 1,
      };
      updateCart((prevCart) => [...prevCart, newProduct]);
    }
  }

  function updateQuantity (currCart: CartItem[], productIdx: number) {
    return currCart.map((item, index) =>
      index === productIdx ? { ...item, quantity: item.quantity++ } : item,
    );
  }

  const data: ShoppingCartContexType = { cart, addItem };
  return (
    <ShoppingCartContex.Provider value={data}>
      {children}
    </ShoppingCartContex.Provider>
  );
}
