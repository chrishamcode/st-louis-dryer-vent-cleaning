import { pgTable, text, serial, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactForm = pgTable("contact_form", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  message: text("message").notNull(),
  zipCode: varchar("zip_code", { length: 10 }).notNull(),
});

export const insertContactFormSchema = createInsertSchema(contactForm).pick({
  name: true,
  email: true,
  phone: true,
  message: true,
  zipCode: true,
});

export type InsertContactForm = z.infer<typeof insertContactFormSchema>;
export type ContactForm = typeof contactForm.$inferSelect;
