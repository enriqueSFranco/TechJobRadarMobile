type MoneyValueType = string | number;
type FormatMoneArgs = {
  value: MoneyValueType;
  locale?: Intl.LocalesArgument;
  options?: Intl.NumberFormatOptions;
};
export function formatMoney ({
  value,
  locale = "en-US",
  options = { style: "currency", currency: "USD" },
}: FormatMoneArgs): string {
  const numericValue = validateAndConvertToNumber(value);
  return new Intl.NumberFormat(locale, options).format(numericValue);
}

export function validateAndConvertToNumber (value: string | number): number {
  const pattern = /^[-+]?\d*\.?\d+$/;
  const regex = new RegExp(pattern);
  let numericValue;

  if (typeof value === "string") {
    numericValue = parseInt(value);
    if (isNaN(numericValue) || !regex.test(value))
      throw new Error(
        `The value '${value}' must be a numeric value of type string or number`,
      );
  } else if (typeof value === "number") {
    numericValue = value;
  } else {
    throw new Error(
      `The value ${value} must be a number of type string or number`,
    );
  }
  return numericValue;
}
