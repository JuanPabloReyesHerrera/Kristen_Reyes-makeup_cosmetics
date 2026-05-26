import { Product } from "./product.type";

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Blazer Oversized",
    description: "Blazer de corte relajado con solapa clásica",
    price: 189000,
    cover:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
    characteristics: [
      { label: "Material", value: "Lana mezcla" },
      { label: "Fit", value: "Oversized" },
      { label: "Origen", value: "Italia" },
    ],
  },
  {
    id: "2",
    name: "Camisa de Lino",
    description: "Camisa artesanal en lino francés",
    price: 145000,
    cover:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
    characteristics: [
      { label: "Material", value: "100% Lino" },
      { label: "Fit", value: "Regular" },
      { label: "Cuidado", value: "Lavado suave" },
    ],
  },
  {
    id: "3",
    name: "Pantalón Palazzo",
    description: "Pantalón de pierna ancha en seda",
    price: 215000,
    cover:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
    characteristics: [
      { label: "Material", value: "Seda" },
      { label: "Fit", value: "Wide leg" },
      { label: "Estilo", value: "Alto" },
    ],
  },
  {
    id: "4",
    name: "Vestido Midi",
    description: "Vestido fluido con detalle fruncido",
    price: 178000,
    cover:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
    characteristics: [
      { label: "Material", value: "Viscosa" },
      { label: "Largo", value: "Midi" },
      { label: "Ocasión", value: "Versátil" },
    ],
  },
  {
    id: "5",
    name: "Abrigo de Lana",
    description: "Abrigo largo de doble botonadura",
    price: 425000,
    cover:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
    characteristics: [
      { label: "Material", value: "Lana virgen" },
      { label: "Largo", value: "Maxi" },
      { label: "Estación", value: "Invierno" },
    ],
  },
  {
    id: "6",
    name: "Jersey de Cashmere",
    description: "Suéter ligero en cashmere puro",
    price: 289000,
    cover:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
    characteristics: [
      { label: "Material", value: "100% Cashmere" },
      { label: "Peso", value: "Ligero" },
      { label: "Origen", value: "Mongolia" },
    ],
  },
  {
    id: "7",
    name: "Trench Clásico",
    description: "Gabardina impermeabilizada",
    price: 335000,
    cover:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
    characteristics: [
      { label: "Material", value: "Gabardina" },
      { label: "Cierre", value: "Doble botonadura" },
      { label: "Estación", value: "Entre tiempo" },
    ],
  },
  {
    id: "8",
    name: "Falda Plisada",
    description: "Falda midi con pliegue permanente",
    price: 156000,
    cover:
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80",
    characteristics: [
      { label: "Material", value: "Poliéster" },
      { label: "Largo", value: "Midi" },
      { label: "Detalle", value: "Plisado" },
    ],
  },
];
