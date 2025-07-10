import React, { useState } from 'react'

export default function Documentation() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = {
    overview: {
      title: "Overview",
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">What is Botly?</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Botly is a modern, customizable chat widget component for React applications. 
              It provides a beautiful, accessible chat interface that can be easily integrated 
              into any React project. Whether you're building a customer support system, 
              AI assistant, or any chat-based application, Botly offers the flexibility 
              and features you need.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-2">Key Benefits</h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>Easy Integration:</strong> Simple setup with minimal configuration required</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>Highly Customizable:</strong> Match your brand with custom themes and styling</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>Responsive Design:</strong> Works perfectly on desktop, tablet, and mobile</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>Accessible:</strong> Built with accessibility in mind, following WCAG guidelines</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>Lightweight:</strong> Minimal dependencies, fast performance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>TypeScript Ready:</strong> Full TypeScript support with comprehensive types</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    installation: {
      title: "Installation",
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">Package Installation</h2>
            <div className="space-y-4">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-3">Using npm</h3>
                <div className="bg-slate-900 rounded-lg p-4">
                  <code className="text-green-400 font-mono text-sm">npm install botly-react</code>
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-3">Using yarn</h3>
                <div className="bg-slate-900 rounded-lg p-4">
                  <code className="text-green-400 font-mono text-sm">yarn add botly-react</code>
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-3">Using pnpm</h3>
                <div className="bg-slate-900 rounded-lg p-4">
                  <code className="text-green-400 font-mono text-sm">pnpm add botly-react</code>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Dependencies</h3>
            <p className="text-slate-700 mb-4">
              Botly requires the following peer dependencies:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                <span>React 16.8+ (for hooks support)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                <span>Tailwind CSS (for styling)</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Tailwind CSS Setup</h3>
            <p className="text-slate-700 mb-4">
              Make sure you have Tailwind CSS configured in your project:
            </p>
            <div className="bg-slate-900 rounded-lg p-4">
              <code className="text-green-400 font-mono text-sm">npm install -D tailwindcss postcss autoprefixer</code>
            </div>
          </div>
        </div>
      )
    },
    quickstart: {
      title: "Quick Start",
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">Basic Implementation</h2>
            <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-green-400 font-mono text-sm leading-relaxed">
{`import Botly from 'botly-react'
import 'botly-react/dist/botly-react.css'

function App() {
  return (
    <Botly
      theme="modern"
      position="bottom-right"
      onSend={async (text) => {
        // Your AI/chat logic here
        return [{ type: 'text', from: 'bot', text: \`You said: \${text}\` }]
      }}
      onInit={async () => {
        return [{ type: 'text', from: 'bot', text: 'Hello! How can I help?' }]
      }}
    />
  )
}`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Required Props</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">onSend</h4>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Function that handles user messages and returns bot responses
                </p>
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                  <code className="text-sm text-slate-700 font-mono">(text: string) =&gt; Promise&lt;Message[]&gt;</code>
                </div>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">onInit</h4>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Function that returns initial messages when chat opens
                </p>
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                  <code className="text-sm text-slate-700 font-mono">() =&gt; Promise&lt;Message[]&gt;</code>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Message Format</h3>
            <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-green-400 font-mono text-sm leading-relaxed">
{`interface Message {
  type: 'text' | 'button-template' | 'card-template' | 'quick-replies'
  from: 'user' | 'bot'
  text: string
  // Additional properties based on message type
}`}
              </pre>
            </div>
          </div>
        </div>
      )
    },
    api: {
      title: "API Reference",
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">Props Reference</h2>
            
            <div className="space-y-4">
              {[
                { name: 'theme', type: "'modern' | 'dark' | 'minimal'", desc: 'Built-in theme to use', default: "'modern'" },
                { name: 'customTheme', type: 'CustomTheme | null', desc: 'Custom theme object for styling', default: 'null' },
                { name: 'position', type: "'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'", desc: 'Position of the chat widget', default: "'bottom-right'" },
                { name: 'size', type: "'small' | 'default' | 'large'", desc: 'Size of the chat widget', default: "'default'" },
                { name: 'title', type: 'string', desc: 'Title displayed in the chat header', default: "'Botly Assistant'" },
                { name: 'subtitle', type: 'string', desc: 'Subtitle displayed in the chat header', default: "'Online • Ready to help'" },
                { name: 'avatar', type: 'ReactNode', desc: 'Custom avatar component', default: 'null' },
                { name: 'autoOpen', type: 'boolean', desc: 'Whether to open chat automatically', default: 'false' },
                { name: 'persistent', type: 'boolean', desc: 'Whether to persist chat state', default: 'false' },
                { name: 'showMessageIndicator', type: 'boolean', desc: 'Show message count indicator', default: 'true' }
              ].map((prop, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <h4 className="font-semibold text-slate-900 text-lg">{prop.name}</h4>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-mono">
                        {prop.default}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-3 text-sm leading-relaxed">{prop.desc}</p>
                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                    <code className="text-sm text-slate-700 font-mono">{prop.type}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Event Handlers</h3>
            
            <div className="space-y-4">
              {[
                { name: 'onOpen', type: '() =&gt; void', desc: 'Called when chat is opened' },
                { name: 'onClose', type: '() =&gt; void', desc: 'Called when chat is closed' },
                { name: 'onSend', type: '(text: string) =&gt; Promise&lt;Message[]&gt;', desc: 'Called when user sends a message' },
                { name: 'onInit', type: '() =&gt; Promise&lt;Message[]&gt;', desc: 'Called when chat is initialized' }
              ].map((handler, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-900 mb-3 text-lg">{handler.name}</h4>
                  <p className="text-slate-600 mb-3 text-sm leading-relaxed">{handler.desc}</p>
                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                    <code className="text-sm text-slate-700 font-mono">{handler.type}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    customization: {
      title: "Customization",
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">Custom Themes</h2>
            <p className="text-slate-700 mb-6 text-lg leading-relaxed">
              Create custom themes by providing a theme object with CSS classes for different components.
            </p>
            
            <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-green-400 font-mono text-sm leading-relaxed">
{`const customTheme = {
  button: 'bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border border-purple-400',
  window: 'bg-white/95 backdrop-blur-xl border border-purple-200 shadow-xl',
  header: 'bg-gradient-to-r from-purple-50 to-purple-100 border-b border-purple-200',
  user: 'bg-purple-600 text-white shadow-md',
  bot: 'bg-gray-50 border border-gray-200 text-gray-800',
  input: 'bg-gray-50 border border-gray-200 focus:border-purple-300 focus:ring-2 focus:ring-purple-200',
  sendButton: 'bg-purple-600 hover:bg-purple-700 text-white'
}

<Botly theme="modern" customTheme={customTheme} />`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Custom Icons</h3>
            <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-green-400 font-mono text-sm leading-relaxed">
{`const customChatIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
)

<Botly chatIcon={customChatIcon} />`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Custom Avatars</h3>
            <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-green-400 font-mono text-sm leading-relaxed">
{`const customAvatar = (
  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
    <span className="text-white font-bold text-sm">A</span>
  </div>
)

<Botly avatar={customAvatar} />`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Message Types</h3>
            
            <div className="space-y-4">
              {[
                { name: 'Text Messages', code: '{ type: \'text\', from: \'bot\', text: \'Hello there!\' }' },
                { name: 'Button Templates', code: '{ type: \'button-template\', from: \'bot\', text: \'Choose an option:\', buttons: [{ text: \'Option 1\', value: \'option1\' }] }' },
                { name: 'Card Templates', code: '{ type: \'card-template\', from: \'bot\', title: \'Product\', description: \'Description\', image: \'url\', buttons: [] }' },
                { name: 'Quick Replies', code: '{ type: \'quick-replies\', from: \'bot\', text: \'Quick options:\', options: [\'Yes\', \'No\', \'Maybe\'] }' }
              ].map((type, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                  <h4 className="font-semibold text-slate-900 mb-3 text-lg">{type.name}</h4>
                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                    <code className="text-sm text-slate-700 font-mono">{type.code}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    examples: {
      title: "Examples",
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">AI Integration Example</h2>
            <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-green-400 font-mono text-sm leading-relaxed">
{`function App() {
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

  return (
    <Botly
      onSend={handleSend}
      onInit={async () => [{ 
        type: 'text', 
        from: 'bot', 
        text: 'Hello! I\'m your AI assistant. How can I help?' 
      }]}
    />
  )
}`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Customer Support Example</h3>
            <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-green-400 font-mono text-sm leading-relaxed">
{`function SupportChat() {
  const supportTheme = {
    button: 'bg-blue-500 hover:bg-blue-600 text-white',
    window: 'bg-white border border-blue-200 shadow-lg',
    header: 'bg-blue-50 border-b border-blue-200',
    user: 'bg-blue-600 text-white',
    bot: 'bg-gray-50 border border-gray-200',
    input: 'bg-gray-50 border border-gray-200 focus:border-blue-300',
    sendButton: 'bg-blue-600 hover:bg-blue-700 text-white'
  }

  return (
    <Botly
      theme="modern"
      customTheme={supportTheme}
      title="Support Team"
      subtitle="We're here to help • 24/7"
      avatar={<SupportAvatar />}
      onSend={handleSupportMessage}
      onInit={async () => [{ 
        type: 'text', 
        from: 'bot', 
        text: 'Hi! How can we help you today?' 
      }]}
    />
  )
}`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Rich Messages Example</h3>
            <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-green-400 font-mono text-sm leading-relaxed">
{`const handleSend = async (text) => {
  if (text.toLowerCase().includes('menu')) {
    return [{
      type: 'button-template',
      from: 'bot',
      text: 'Here are our main services:',
      buttons: [
        { text: 'Product Info', value: 'product' },
        { text: 'Pricing', value: 'pricing' },
        { text: 'Contact', value: 'contact' }
      ]
    }]
  }
  
  return [{ type: 'text', from: 'bot', text: 'How can I help you?' }]
}`}
              </pre>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">Botly Documentation</h1>
              <p className="text-slate-600 mt-1">Complete guide to using Botly</p>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium text-sm"
              >
                ← Back to Examples
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 flex-shrink-0">
            <nav className="lg:sticky lg:top-24">
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <h2 className="font-semibold text-slate-900 mb-4 text-lg">Contents</h2>
                <ul className="space-y-1">
                  {Object.entries(sections).map(([key, section]) => (
                    <li key={key}>
                      <button
                        onClick={() => setActiveSection(key)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          activeSection === key
                            ? 'bg-slate-900 text-white'
                            : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white border border-slate-200 rounded-lg p-8">
              {sections[activeSection].content}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 