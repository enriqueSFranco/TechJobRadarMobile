import { PizzaSize } from "./enums.d";

// constatnes de la app
const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";
export const Colors = {
  light: {
    color: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    color: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};

export const pizzaSizeLabels = [
  PizzaSize.SMALL,
  PizzaSize.MEDIUM,
  PizzaSize.LARGE,
  PizzaSize.EXTRA_LARGE,
];

// textos de la app
export const TEXTS = {
  pizzaNotFound: "Pizza not found",
  selectSize: "Select size",
  priceLabel: "Price",
  addToCart: "Add to cart",
};
