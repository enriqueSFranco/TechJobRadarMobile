import { Pizza } from "@/shared/types.d";

type MoneyValueType = string | number;
type FormatMoneArgs = {
  value: MoneyValueType;
  locale?: Intl.LocalesArgument;
  options?: Intl.NumberFormatOptions;
};

export class PriceUtils {
  /**
   * Valida si un precio es un número válido y es mayor a cero.
   * @param price - Precio a validar, puede ser un número o una cadena que represente un número.
   * @returns - Booleano que indica si el precio es válido.
   */
  static isValidPrice (price: Pizza["price"] | string) {
    try {
      const numericPrice = this.convertToNumber(price);
      return numericPrice > 0;
    } catch {
      return false;
    }
  }

  /**
   * Formatea un valor como una moneda en el formato especificado.
   * @param args - Argumentos que definen el valor a formatear y opciones de localización.
   * @returns - Valor formateado como una cadena o `null` si el valor no es válido.
   */
  static formatMoney ({
    value,
    locale = "en-US",
    options = { style: "currency", currency: "USD" },
  }: FormatMoneArgs) {
    if (!this.isValidPrice(value)) return null;
    const numericValue = this.convertToNumber(value);

    return new Intl.NumberFormat(locale, options).format(numericValue);
  }

  /**
   * Convierte un valor a número. Lanza un error si el valor no puede ser convertido.
   * @param value - Valor a convertir, que puede ser una cadena o un número.
   * @returns - Valor convertido a número.
   * @throws - Error si el valor no puede ser convertido a número.
   */
  private static convertToNumber (value: string | number): number {
    if (typeof value === "number") return value;

    const parsedValue = parseFloat(value);

    if (isNaN(parsedValue)) {
      throw new Error(`The value '${value}' is not a valid number.`);
    }
    return parsedValue;
  }
}
