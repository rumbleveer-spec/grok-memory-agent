# 🧠 GROK MEMORY AGENT

**Dual AI Agent (Grok + Gemini) with 10-message memory**

Built on iPad by **Ankit Rajput** 💪

## 🎯 Features

- 🤖 **Dual AI Models**: Switch between Grok and Gemini
- 💾 **10-Message Memory**: Keeps last 10 messages for context
- 🔄 **Model Switching**: Choose model per request
- 🚀 **Express API**: Simple REST endpoint

## 📦 Installation

```bash
npm install express openai @google/generative-ai dotenv
```

## 🔐 Setup

1. Create `.env` file:
```
GROK_API_KEY=xai-your-key-here
GEMINI_API_KEY=your-gemini-key
```

## 🚀 Run

```bash
node server.js
```

## 🧪 Test

**With Grok:**
```bash
curl -X POST http://localhost:3000/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello bhai", "model":"grok"}'
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
✅ Built on iPad  

## 👨‍💻 Author

**Ankit Rajput**  
iPad Developer | AI Enthusiast

---

**Status**: Working Locally  
**Effort**: 3+ days of dedication! 🔥