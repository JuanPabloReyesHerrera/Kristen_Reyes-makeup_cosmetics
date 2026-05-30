import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    // Variable de entorno de Supabase
    // usa la "Transaction pooler" URL (puerto 6543) en producción
    // usa la "Direct connection" URL (puerto 5432) para migraciones
    url: process.env.DATABASE_URL!,
  },
});
