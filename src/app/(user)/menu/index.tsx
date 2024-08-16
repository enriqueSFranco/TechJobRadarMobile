import React from "react";
import products from "@assets/data/products";
import { ListPizza } from "@/features/ui/organisms/list-pizza";

export default function Index () {
  return <ListPizza pizzas={products} />;
}
