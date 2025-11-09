# 🧠 PERPLEXITY MEMORY AGENT

**Dual AI Agent (Perplexity + Gemini) with 10-message memory**

Built on iPad by **Ankit Rajput** 💪

## 🎯 Features

- 🤖 **Dual AI Models**: Switch between Perplexity and Gemini
- 💾 **10-Message Memory**: Keeps last 10 messages for context
- 🔄 **Model Switching**: Choose model per request
- 🚀 **Express API**: Simple REST endpoint
- ⚡ **Perplexity AI**: Real-time web search + up-to-date info

## 📦 Installation

```bash
npm install express openai @google/generative-ai dotenv
```

## 🔐 Setup

1. Create `.env` file:
```
PERPLEXITY_API_KEY=pplx-your-key-here
GEMINI_API_KEY=your-gemini-key
```

2. Get Perplexity key: [perplexity.ai/settings/api](https://www.perplexity.ai/settings/api)

## 🚀 Run

```bash
node server.js
```

## 🧪 Test

**With Perplexity (DEFAULT):**
```bash
curl -X POST http://localhost:3000/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello bhai", "model":"perplexity"}'
```

**With Gemini:**
```bash
curl -X POST http://localhost:3000/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello bhai", "model":"gemini"}'
```

## 🎨 What Makes it Special?

✅ Dual AI models in one agent  
✅ Automatic memory management  
✅ Context preservation across 10 messages  
✅ Model flexibility  
✅ **Perplexity with real-time search**  
✅ Built on iPad  

## 👨‍💻 Author

**Ankit Rajput**  
iPad Developer | AI Enthusiast

---

**Status**: Working Locally  
**Effort**: 3+ days of dedication! 🔥