import React, { createContext, useState } from "react";
import { Pizza } from "@/shared/types.d";
import initialProducts from "@assets/data/products";

const urlDefaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type ProductWithoutId = Omit<Pizza, "id">;
type ProductId = Pizza["id"];
type CreateProductError = "INVALID_NAME" | "INVALID_IMAGE" | "INVALID_PRICE";

export type StockContextType = {
  stock: Pizza[];
  createProduct: ({ name, image, price }: ProductWithoutId) => boolean;
  updateProduct: (productId: ProductId) => boolean;
};

export const StockContext = createContext<StockContextType | null>(null);

type StockProviderProps = {
  children: React.ReactNode;
};

export function StockProvider ({ children }: StockProviderProps) {
  const [stock, setStock] = useState(initialProducts);

  function _isValidPrice (price: Pizza["price"] | string) {
    const priceAsNumber = typeof price === "number" ? price : parseFloat(price);
    return !isNaN(priceAsNumber) && priceAsNumber > 0;
  }

  function _handleCreateProductError (error: CreateProductError) {
    return `Product creation error ${error}`;
  }

  function createProduct ({ name, image, price }: ProductWithoutId) {
    if (!name.trim()) return;

    if (image === null) image = urlDefaultPizzaImage;

    if (!_isValidPrice(price)) {
      _handleCreateProductError("INVALID_PRICE");
    }
    // TODO: llamar a un servicio para registrar el producto en una base de datos
    console.log(">>> creando la pizza");
    const newProduct: Pizza = {
      id: stock.length + 1,
      name,
      image,
      price,
    };
    setStock((prevStock) => [...prevStock, newProduct]);
    return true;
  }

  function updateProduct (productId: ProductId, payload: ProductWithoutId) {
    const isProductIdMatch = (product: Pizza) => product.id === productId;
    const productIdx = stock.findIndex(isProductIdMatch);

    if (productIdx !== -1) {
      // code
    }
    return false;
  }

  const data: StockContextType = {
    stock,
    createProduct,
    updateProduct,
  };
  return <StockContext.Provider value={data}>{children}</StockContext.Provider>;
}
