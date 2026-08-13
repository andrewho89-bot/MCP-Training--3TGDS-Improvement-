import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI Client
  const getGenAI = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return null;
    }
    return new GoogleGenAI({ apiKey });
  };

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "3T GDS Distribution System" });
  });

  // AI Distribution Strategy Advisor
  app.post("/api/ai/advisor", async (req, res) => {
    try {
      const { businessName, businessType, location, targetMarkets, description, language } = req.body;

      const ai = getGenAI();
      if (!ai) {
        // Fallback response if GEMINI_API_KEY is not configured
        return res.json({
          recommendation: `Based on your request for ${businessName || "your business"} (${businessType || "Travel Service"}) in ${location || "Global"}, 3T GDS recommends distributing through Trip.com, Meituan, and Fliggy. Our instant Travel Trust Ticket (TTT) API will automate e-voucher generation and multi-currency clearing.`,
          recommendedChannels: ["Trip.com", "Meituan", "Fliggy", "Klook", "KKday"],
          estimatedSpeedUp: "3.5x faster market entry",
          currencyStrategy: "Auto-convert settlement to local vendor account",
          complianceNotes: "PCI-DSS & Travel Trust Ticket certified digital vouchers",
        });
      }

      const prompt = `You are the chief AI distribution advisor for 3T GDS (Global Digital Asset & Travel Trust Ticket Distribution System).
Analyze this supplier's business and generate a concise, highly strategic distribution plan.

Supplier Details:
- Business Name: ${businessName || "Travel Merchant"}
- Business Type: ${businessType || "Attraction / Activity / E-Voucher"}
- Primary Location: ${location || "Global"}
- Target Channels/Markets: ${targetMarkets?.join(", ") || "Asia & Global"}
- Description: ${description || "Digitizing travel vouchers and e-tickets"}
- Language output requested: ${language || "English"}

Provide a JSON object with the following fields:
{
  "recommendation": "Short 2-3 sentence strategic executive summary explaining why 3T GDS is ideal.",
  "recommendedChannels": ["Array of 4-5 best fitting global OTA channels like Trip.com, Meituan, Taobao, Shopee, Fliggy, ezTravel, Klook, KKday"],
  "estimatedSpeedUp": "e.g., 'Instant API integration in 48 hours'",
  "currencyStrategy": "Advice on multi-currency settlement (TWD, USD, JPY, SGD, KRW)",
  "complianceNotes": "Security & Travel Trust Ticket (TTT) compliance statement"
}`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        },
      });

      const text = response.text;
      if (text) {
        const parsed = JSON.parse(text);
        return res.json(parsed);
      } else {
        throw new Error("Empty AI response");
      }
    } catch (error: any) {
      console.error("AI Advisor Error:", error);
      res.status(500).json({
        error: "Failed to generate AI distribution advice",
        message: error.message,
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`3T GDS Server running on http://localhost:${PORT}`);
  });
}

startServer();
