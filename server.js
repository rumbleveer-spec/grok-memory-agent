require('dotenv').config();
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { OpenAI } = require('openai');

const app = express();
app.use(express.json());

const gemini = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const geminiModel = gemini.getGenerativeModel({ model: "gemini-1.5-pro" });

const perplexity = new OpenAI({
  apiKey: process.env.PERPLEXITY_API_KEY,
  baseURL: "https://api.perplexity.ai"
});

let memory = [];

app.post('/chat', async (req, res) => {
  const { message, model = "perplexity" } = req.body;
  memory.push({ role: "user", content: message });

  try {
    let reply;
    if (model === "perplexity") {
      const response = await perplexity.chat.completions.create({
        model: "llama-3.1-sonar-small-128k-online",
        messages: memory.slice(-10)
      });
      reply = response.choices[0].message.content;
    } else {
      const result = await geminiModel.generateContent({
        contents: memory.slice(-10)
      });
      reply = result.response.text();
    }

    memory.push({ role: "assistant", content: reply });
    if (memory.length > 10) memory = memory.slice(-10);

    res.json({ reply, model, memory: memory.slice(-2) });
  } catch (err) {
    res.json({ error: err.message });
  }
});

app.get('/', (req, res) => {
  res.send(`
    <pre>
DUAL AI MEMORY AGENT LIVE!

Perplexity + Gemini | 10 Message Memory

curl -X POST /chat -d '{"message":"Hello bhai", "model":"perplexity"}'
    </pre>
  `);
});

app.listen(3000, () => {
  console.log("DUAL AI MEMORY AGENT LIVE: http://localhost:3000");
});