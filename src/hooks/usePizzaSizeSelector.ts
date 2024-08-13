import { PizzaSizeContext } from "@/provider/PizzaSizeContext";
import { useContext } from "react";

export function usePizzaSizeSelector () {
  const ctx = useContext(PizzaSizeContext);

  if (ctx === undefined) {
    throw new Error(
      "usePizzaSizeSelector debe ser usado dentro de un proveedor de PizzaSizeContext.",
    );
  }

  return ctx;
}
