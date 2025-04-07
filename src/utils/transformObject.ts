// Tipo que convierte las claves según el mapa de transformación
export type TransformKeys<T, M extends { [key: string]: string }> = {
  [K in keyof T as K extends keyof M ? M[K] : K]: T[K];
};

// Función para aplicar la transformación
type TransformationMap = { [key: string]: string };

export function transformObject<T extends Record<string, any>>(obj: T, transformationMap: TransformationMap): T {
  const mappedObj: Record<string, any> = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const transformedKey = transformationMap[key] || key; // Si no hay transformación, usamos el nombre original
      mappedObj[transformedKey] = obj[key];
    }
  }

  return mappedObj as T;
}
