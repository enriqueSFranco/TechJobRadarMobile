import React from "react";
import { ListPizza } from "@/features/ui/organisms/list-pizza";
import { useStock } from "@/hooks/useStock";

export default function Index () {
  const { stock } = useStock();
  return <ListPizza pizzas={stock} />;
}
