import React from "react";
import { ListPizza } from "@/features/ui/organisms/list-pizza";
import products from "@assets/data/products";

export default function Index () {
  return <ListPizza pizzas={products} />;
}
