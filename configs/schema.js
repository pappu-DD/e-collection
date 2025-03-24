import { serial, text, pgTable, varchar } from "drizzle-orm/pg-core";

export const userMessage = pgTable("userMessage", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull(),
  message: text("message").notNull(),
});

// export const usersTable = pgTable("users", {
//   id: integer().primaryKey().generatedAlwaysAsIdentity(),
//   name: varchar({ length: 255 }).notNull(),
//   image: varchar(),
//   email: varchar({ length: 255 }).notNull().unique(),
// });