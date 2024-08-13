import React from "react";
import { ListPizza } from "@components/organisms/ListPizza";
import products from "@assets/data/products";

export default function Index() {
  return <ListPizza pizzas={products} />;
}
