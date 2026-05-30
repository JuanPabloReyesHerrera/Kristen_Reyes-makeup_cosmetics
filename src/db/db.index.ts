import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// ── Cliente estándar (para queries normales) ──────────────────
// Usa la "Transaction pooler" URL de Supabase (puerto 6543)
// prepare: false es obligatorio con el connection pooler de Supabase
const client = postgres(process.env.DATABASE_URL!, {
  prepare: false,
});

export const db = drizzle(client, { schema });

// ── Cliente admin (bypasea RLS) ───────────────────────────────
// Solo usar en Server Actions / Route Handlers — nunca en el cliente
// Conecta directo al DB (puerto 5432), sin pooler
const adminClient = postgres(process.env.DATABASE_URL_DIRECT!, {
  prepare: false,
});

export const adminDb = drizzle(adminClient, { schema });
