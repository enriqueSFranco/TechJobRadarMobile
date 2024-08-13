import { createContext, useMemo, useState } from "react";
import { randomUUID } from "expo-crypto";
import { CartItem, Pizza, PizzaSize } from "@/shared/types.d";
import { QuantityChange } from "@/shared/enums.d";
import { formatMoney } from "@/helpers/format-money";

export type ShoppingCartContexType = {
  cart: CartItem[];
  addItem: (product: Pizza, pizzaSize: CartItem["size"]) => void;
  updateQuantity: (
    itemId: string,
    amount: QuantityChange.Increment | QuantityChange.Decrement,
    size: PizzaSize,
  ) => void;
  total: string;
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
    console.log(cart, product, pizzaSize);
    // caso 0: Verificar si el producto ya esta agregado
    const productIdx = cart.findIndex(
      (it) => it.product_id === product.id && it.size === pizzaSize,
    );
    // caso 1: Si el producto ya está agregado, entonces aumentamos el valor de la propiedad `quantity`
    if (productIdx !== -1) {
      updateQuantity(String(productIdx), QuantityChange.Increment, pizzaSize);
      return;
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

  function updateItemQuantity ({
    item,
    itemId,
    amount,
    size,
  }: {
    item: CartItem;
    itemId: string;
    amount: QuantityChange.Increment | QuantityChange.Decrement;
    size: PizzaSize;
  }) {
    console.log(item.product_id, itemId, size, item.size);
    return item.product_id === parseInt(itemId) && item.size === size
      ? { ...item, quantity: item.quantity + amount }
      : item;
  }

  function filterItemsWithPositiveQuantity (items: CartItem[]) {
    return items.filter((item) => item.quantity > 0);
  }

  function updateQuantity (
    itemId: string,
    amount: QuantityChange.Increment | QuantityChange.Decrement,
    size: PizzaSize,
  ) {
    console.log(">>>updateQuantity");
    const updatedCart = cart.map((item) => {
      return updateItemQuantity({ item, itemId, amount, size });
    });
    const filteredCart = filterItemsWithPositiveQuantity(updatedCart);
    console.log(filteredCart);
    updateCart(filteredCart);
  }

  const total = useMemo(() => {
    let total = 0;
    for (const item of cart) {
      const { quantity, product } = item;
      const priceInt = product.price as number;

      total += priceInt * quantity;
    }
    return formatMoney({ value: total });
  }, [cart]);

  const data: ShoppingCartContexType = {
    cart,
    addItem,
    updateQuantity,
    total,
  };
  return (
    <ShoppingCartContex.Provider value={data}>
      {children}
    </ShoppingCartContex.Provider>
  );
}
