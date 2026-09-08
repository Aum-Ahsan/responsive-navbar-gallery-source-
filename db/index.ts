declare module "cloudflare:workers" {
  interface Env {
    DB: import("@cloudflare/workers-types").D1Database;
  }
}
import { env } from "cloudflare:workers";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

type EnvWithDB = { DB: import("@cloudflare/workers-types").D1Database };

export function getDb() {
  const e = env as unknown as EnvWithDB;
  if (!e.DB) {
    throw new Error(
      "Cloudflare D1 binding `DB` is unavailable. Set the `d1` field in .openai/hosting.json to `DB` or let your control plane inject the real binding values before using the database."
    );
  }

  return drizzle(e.DB, { schema });
}
