/**
 * Formatea un número como precio en pesos Boliviano
 * @param price - Precio en número
 * @returns String formateado como moneda BOB
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("es-BO", {
    style: "currency",
    currency: "BOB",
    minimumFractionDigits: 0,
  }).format(price);
};
