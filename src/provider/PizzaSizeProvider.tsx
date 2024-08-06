import { createContext, useState } from "react";
import { PizzaSize } from "@/shared/enums.d";

export type PizzasizeContextType = {
  pizzaSize: PizzaSize;
  handleSelectPizzaSize: (pizzaSize: PizzaSize) => void;
};

export const PizzaSizeContext = createContext<PizzasizeContextType | null>(
  null,
);

type PizzaSizeContextProps = {
  children: React.ReactNode;
};

export function PizzaSizeProvider({ children }: PizzaSizeContextProps) {
  const [pizzaSize, setPizzaSize] = useState<PizzaSize>(PizzaSize.MEDIUM);

  function handleSelectPizzaSize(pizzaSize: PizzaSize) {
    setPizzaSize(pizzaSize);
  }

  const data: PizzasizeContextType = { pizzaSize, handleSelectPizzaSize };

  return (
    <PizzaSizeContext.Provider value={data}>
      {children}
    </PizzaSizeContext.Provider>
  );
}
