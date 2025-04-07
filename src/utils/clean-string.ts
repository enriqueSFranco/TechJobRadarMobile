export function cleanString ({
  input,
  charactersToRemove = /[.\s_-]/,
}: {
  input: string;
  charactersToRemove?: RegExp;
}) {
  const cleanedString = input.toLowerCase().replace(charactersToRemove, "");
  return cleanedString;
}
