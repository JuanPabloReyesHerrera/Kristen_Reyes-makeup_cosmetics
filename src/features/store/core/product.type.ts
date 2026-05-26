/**
 * Característica de un producto
 */
export interface ProductCharacteristic {
  label: string;
  value: string;
}

/**
 * Producto del catálogo
 */
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  cover: string;
  characteristics: ProductCharacteristic[];
}
