# 🧠 DUAL AI MEMORY AGENT

**Dual AI Agent (Perplexity + Gemini) with 10-message memory**

Built on iPad by **Ankit Rajput** 💪

## 🎯 Features

- 🤖 **Dual AI Models**: Switch between Perplexity and Gemini
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
PERPLEXITY_API_KEY=pplx-your-key-here
GEMINI_API_KEY=your-gemini-key
```

## 🚀 Run

```bash
node server.js
```

## 🧪 Test

**With Perplexity:**
```bash
curl -X POST http://localhost:3000/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"What is latest in AI?", "model":"perplexity"}'
```

**With Gemini:**
```bash
curl -X POST http://localhost:3000/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Explain quantum computing", "model":"gemini"}'
```

## 🎨 What Makes it Special?

✅ Dual AI models in one agent  
✅ Automatic memory management  
✅ Context preservation across 10 messages  
✅ Model flexibility  
✅ Perplexity with real-time search  
✅ Built on iPad  

## 🌟 Model Comparison

| Feature | Perplexity | Gemini |
|---------|-----------|---------|
| Real-time Data | ✅ Yes | ❌ No |
| Speed | Fast | Very Fast |
| Context | 128k tokens | Very Large |
| Best For | Current info | General tasks |

## 👨‍💻 Author

**Ankit Rajput**  
iPad Developer | AI Enthusiast

---

**Status**: Working with Perplexity + Gemini  
**Effort**: 3+ days of dedication! 🔥