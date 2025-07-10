
# Botly - React Chat Widget

A modern, customizable chat widget component for React applications. Botly provides a beautiful, accessible chat interface that can be easily integrated into any React project.

![Botly Demo](https://img.shields.io/badge/Status-Demo%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-18+-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3+-38B2AC)

## 🚀 Live Demo & Documentation

[🌐 Live Demo & Documentation](https://botly-doc.vercel.app/)

Try Botly instantly in your browser and explore the full documentation, interactive examples, and API reference at [https://botly-doc.vercel.app/](https://botly-doc.vercel.app/).


This repository includes a comprehensive demo and documentation site. To run it locally:

```bash
# Clone the repository
git clone https://github.com/your-repo/botly.git
cd botly

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then visit `http://localhost:5173` to see:
- **Interactive Demos**: Try different themes and configurations
- **Live Documentation**: Complete API reference and examples
- **Customization Guide**: Learn how to customize Botly for your needs

## ✨ Features

- 🎨 **Multiple Themes**: Modern, Dark, and Minimal built-in themes
- 🎯 **Fully Customizable**: Custom themes, colors, icons, and branding
- 📱 **Responsive Design**: Works perfectly on desktop and mobile
- 🔧 **Flexible Positioning**: 4 corner positions (bottom-right, bottom-left, top-right, top-left)
- 📏 **Multiple Sizes**: Small, Default, and Large size options
- 💾 **Persistent Chat**: Optional localStorage persistence
- 🎭 **Rich Message Types**: Text, buttons, cards, quick replies, and more
- ♿ **Accessible**: Built with accessibility in mind
- 🚀 **Lightweight**: Minimal dependencies, fast performance
- 📚 **TypeScript Ready**: Full TypeScript support

## 📦 Installation

```bash
npm install botly-react
```

## 🚀 Quick Start

```jsx
import { Botly } from 'botly-react'
import 'botly-react/dist/botly-react.css'

function App() {
  return (
    <Botly
      theme="modern"
      position="bottom-right"
      onSend={async (text) => {
        // Your AI/chat logic here
        return [{ type: 'text', from: 'bot', text: `You said: ${text}` }]
      }}
      onInit={async () => {
        return [{ type: 'text', from: 'bot', text: 'Hello! How can I help?' }]
      }}
    />
  )
}
```

## 🎨 Customization Examples

### Custom Theme
```jsx
const customTheme = {
  button: 'bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border border-purple-400',
  window: 'bg-white/95 backdrop-blur-xl border border-purple-200 shadow-xl',
  header: 'bg-gradient-to-r from-purple-50 to-purple-100 border-b border-purple-200',
  user: 'bg-purple-600 text-white shadow-md',
  bot: 'bg-gray-50 border border-gray-200 text-gray-800',
  input: 'bg-gray-50 border border-gray-200 focus:border-purple-300 focus:ring-2 focus:ring-purple-200',
  sendButton: 'bg-purple-600 hover:bg-purple-700 text-white'
}

<Botly theme="modern" customTheme={customTheme} />
```

### Custom Branding
```jsx
<Botly
  title="Support Assistant"
  subtitle="We're here to help • 24/7"
  avatar={
    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-sm">S</span>
    </div>
  }
/>
```

### AI Integration
```jsx
const handleSend = async (text) => {
  // Call your AI service
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: text })
  })
  
  const data = await response.json()
  
  return [{ 
    type: 'text', 
    from: 'bot', 
    text: data.response 
  }]
}

<Botly onSend={handleSend} />
```

## 📚 Documentation

The demo site includes comprehensive documentation covering:

- **Overview**: What is Botly and its key benefits
- **Installation**: Setup instructions and dependencies
- **Quick Start**: Basic implementation guide
- **API Reference**: Complete props and methods documentation
- **Customization**: Theme, styling, and branding options
- **Examples**: Real-world usage examples

## 🏗️ Project Structure

```
botly/
├── src/
│   ├── components/
│   │   ├── Botly.jsx              # Main chat widget component
│   │   ├── ChatWindow.jsx         # Chat window component
│   │   ├── MessageInput.jsx       # Message input component
│   │   ├── MessageRenderer.jsx    # Message rendering logic
│   │   ├── Documentation.jsx      # Documentation page
│   │   └── messages/              # Message type components
│   │       ├── TextMessage.jsx
│   │       ├── ButtonTemplate.jsx
│   │       ├── CardTemplate.jsx
│   │       └── QuickReplies.jsx
│   ├── hooks/
│   │   └── useChatLogic.js        # Chat logic hook
│   ├── llm/
│   │   └── mockLLM.js             # Mock AI responses
│   ├── App.jsx                    # Demo and documentation app
│   └── main.jsx                   # App entry point
├── examples/
│   └── customization-examples.jsx # Additional examples
├── public/                        # Static assets
├── README.md                      # This file
├── CUSTOMIZATION.md               # Detailed customization guide
└── package.json                   # Dependencies and scripts
```

## 🎯 Use Cases

Botly is perfect for:

- **Customer Support**: Live chat widgets for websites
- **AI Assistants**: Chat interfaces for AI-powered applications
- **E-commerce**: Product support and shopping assistance
- **SaaS Applications**: User onboarding and help systems
- **Educational Platforms**: Student support and Q&A systems
- **Healthcare**: Patient support and appointment scheduling

## 🔧 Development

To contribute to Botly:

```bash
# Clone the repository
git clone https://github.com/your-repo/botly.git
cd botly

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📞 Support

- 📧 Email: devfunwatcher@gmail.com
- 💬 Discord: [Join our community](#)
- 📖 Documentation: [docs.botly.com](https://botly-doc.vercel.app/)
- 🐛 Issues: [GitHub Issues](https://github.com/miketropi/botly/issues)

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide Icon](https://lucide.dev/)
- Demo powered by [Vite](https://vitejs.dev/)

---

Made with ❤️ by the Botly team
