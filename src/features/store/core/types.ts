interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  cover?: string;
  created_at: string;
}

interface ProductCharacteristic {
  id: string;
  product_id: string;
  label: string;
  value: string;
}

export interface Product {
  id: string;
  category_id: string;
  name: string;
  slug: string;
  description: string;
  price: number; // numeric(10,2) — nunca float
  cover: string;
  images: string[];
  count: number; // stock quantity
  is_active: boolean; // ocultar sin borrar
  created_at: string;
  updated_at: string;
  // relaciones (cuando se hace join)
  category?: Category;
  characteristics?: ProductCharacteristic[];
}

// ─── Órdenes ─────────────────────────────────────────────

type OrderStatus =
  | "pending"
  | "confirmed"
  | "shipped"
  | "delivered"
  | "cancelled";

interface Customer {
  id: string; // mismo que auth.users.id
  name: string;
  email: string;
  phone?: string;
  address?: string;
  created_at: string;
}

interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  unit_price: number; // snapshot al momento de compra
  product?: Product;
}

interface Order {
  id: string;
  customer_id: string;
  status: OrderStatus;
  total: number;
  shipping_address: string;
  notes?: string;
  created_at: string;
  updated_at: string;
  customer?: Customer;
  items?: OrderItem[];
}

// ─── Carrito (client-side, sin DB) ───────────────────────

interface CartItem {
  product: Product;
  quantity: number;
}

interface Cart {
  items: CartItem[];
  total: number;
}
