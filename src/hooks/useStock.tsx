import { StockContext } from "@/provider/StockProvider";
import { useContext } from "react";

export function useStock () {
  const ctx = useContext(StockContext);

  if (ctx === null)
    throw new Error(
      "useStock debe ser usado dentro de un proveedor de StockProvider.",
    );

  return ctx;
}
