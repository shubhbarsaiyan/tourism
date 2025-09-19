import express from "express";
import cors from "cors";
import { TextGenerationClient } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new TextGenerationClient({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/ask", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await client.generateText({
      model: "models/text-bison-001",
      prompt,
      temperature: 0.7,
      maxOutputTokens: 256,
    });

    res.json({ text: response.candidates[0].output });
  } catch (err) {
    console.error(err);
    res.status(500).json({ text: "AI backend error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
