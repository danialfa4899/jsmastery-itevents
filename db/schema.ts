import { pgTable, text, integer, timestamp, uuid } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  brand: text("brand").notNull(),
  price: integer("price").notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
