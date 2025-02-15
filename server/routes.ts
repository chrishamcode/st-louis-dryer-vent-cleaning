import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactFormSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactFormSchema.safeParse(req.body);

      if (!result.success) {
        return res.status(400).json({
          message: fromZodError(result.error).message,
        });
      }

      // Here you would typically send an email or store the contact form
      // For now, just return success
      res.json({ message: "Message received" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}