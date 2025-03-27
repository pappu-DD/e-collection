import { primaryKey } from "drizzle-orm/gel-core";
import { serial, text, pgTable, varchar } from "drizzle-orm/pg-core";

export const userMessage = pgTable("userMessage", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull(),
  message: text("message").notNull(),
});

export const member = pgTable("member",{
  id: varchar("id", { length: 255 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  post: varchar("post", { length: 255 }).notNull(),
}
)