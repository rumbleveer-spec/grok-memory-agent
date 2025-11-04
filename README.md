# 🧠 GROK MEMORY AGENT

**Dual AI Model Support with Smart Memory**

Switch between Grok and Gemini AI models seamlessly while maintaining conversation context with 10-message memory buffer.

## ✨ Features

- **Dual AI Models**: Grok Beta + Gemini 1.5 Pro
- **Smart Memory**: Maintains last 10 messages
- **Model Switching**: Toggle between AI models
- **Full Conversations**: Context-aware responses
- **REST API**: Simple integration

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Setup

1. Copy `.env.example` to `.env`
2. Add your API keys:
```
GROK_API_KEY=xai-your-key-here
GEMINI_API_KEY=AIzaSy...
```

### Run

```bash
npm start
```

Server will start at `http://localhost:3000`

## 📝 API Usage

### Chat with Grok
```bash
curl -X POST http://localhost:3000/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello bhai", "model":"grok"}'
```

### Chat with Gemini
```bash
curl -X POST http://localhost:3000/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Explain AI", "model":"gemini"}'
```

### Response
```json
{
  "reply": "AI response here...",
  "model": "grok",
  "memory": [
    {"role": "user", "content": "Hello bhai"},
    {"role": "assistant", "content": "AI response here..."}
  ]
}
```

## 🔄 Model Comparison

| Feature | Grok Beta | Gemini 1.5 Pro |
|---------|-----------|----------------|
| Speed | Fast | Very Fast |
| Context | Large | Very Large |
| Reasoning | Excellent | Excellent |
| Cost | $5 credits | Free tier |

## 🏗️ Architecture

```
Memory Agent
├── Memory Buffer: 10 messages
├── Model Router: Grok ↔ Gemini
└── API Layer: Express REST
```

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **AI Models**: 
  - Grok Beta (via OpenAI SDK)
  - Gemini 1.5 Pro (via Google AI SDK)
- **Language**: JavaScript

## 📊 Project Status

- ✅ Locally working
- ✅ Dual model support
- ✅ Memory management
- ⏳ Awaiting $5 Grok credits

## 👨‍💻 Author

**Ankit Rajput**

Built with determination and perseverance!

---

*"3+ din, 100+ errors, iPad pe kiya – main jeet gaya!"*
