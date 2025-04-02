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

      // In a production environment, we would send an email to chrishamilton37@gmail.com
      console.log(`Contact form submission would be sent to: chrishamilton37@gmail.com`);
      console.log(`Form data:`, result.data);
      
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