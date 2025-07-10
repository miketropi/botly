import { useState } from 'react'
import Botly from './components/Botly'
import Documentation from './components/Documentation'
import { mockLLM } from './llm/mockLLM'

export default function App() {
  const [activeDemo, setActiveDemo] = useState('basic')
  const [currentPage, setCurrentPage] = useState('demo')

  // Custom theme examples
  const purpleTheme = {
    button: 'bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border border-purple-400',
    window: 'bg-white/95 backdrop-blur-xl border border-purple-200 shadow-xl',
    header: 'bg-gradient-to-r from-purple-50 to-purple-100 border-b border-purple-200',
    user: 'bg-purple-600 text-white shadow-md',
    bot: 'bg-gray-50 border border-gray-200 text-gray-800',
    input: 'bg-gray-50 border border-gray-200 focus:border-purple-300 focus:ring-2 focus:ring-purple-200',
    sendButton: 'bg-purple-600 hover:bg-purple-700 text-white'
  }

  const blueTheme = {
    button: 'bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border border-blue-400',
    window: 'bg-white/95 backdrop-blur-xl border border-blue-200 shadow-xl',
    header: 'bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200',
    user: 'bg-blue-600 text-white shadow-md',
    bot: 'bg-gray-50 border border-gray-200 text-gray-800',
    input: 'bg-gray-50 border border-gray-200 focus:border-blue-300 focus:ring-2 focus:ring-blue-200',
    sendButton: 'bg-blue-600 hover:bg-blue-700 text-white'
  }

  const greenTheme = {
    button: 'bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border border-green-400',
    window: 'bg-white/95 backdrop-blur-xl border border-green-200 shadow-xl',
    header: 'bg-gradient-to-r from-green-50 to-green-100 border-b border-green-200',
    user: 'bg-green-600 text-white shadow-md',
    bot: 'bg-gray-50 border border-gray-200 text-gray-800',
    input: 'bg-gray-50 border border-gray-200 focus:border-green-300 focus:ring-2 focus:ring-green-200',
    sendButton: 'bg-green-600 hover:bg-green-700 text-white'
  }

  const customAvatar = (
    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-sm">A</span>
    </div>
  )

  const supportAvatar = (
    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-sm">S</span>
    </div>
  )

  const aiAvatar = (
    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-sm">AI</span>
    </div>
  )

  const demos = {
    basic: {
      title: "Basic Usage",
      description: "Simple implementation with default settings",
      component: (
        <Botly
          theme="modern"
          position="bottom-right"
          title="Botly Assistant"
          subtitle="Online • Ready to help"
          onSend={async (text) => [await mockLLM(text)]}
          onInit={async () => [{ type: 'text', from: 'bot', text: 'Hello! I\'m Botly. How can I help you today?' }]}
        />
      )
    },
    custom: {
      title: "Custom Theme",
      description: "Fully customized with purple gradient theme",
      component: (
        <Botly
          theme="modern"
          customTheme={purpleTheme}
          position="bottom-right"
          title="AI Assistant"
          subtitle="Powered by GPT-4 • Always learning"
          avatar={customAvatar}
          onSend={async (text) => [await mockLLM(text)]}
          onInit={async () => [{ type: 'text', from: 'bot', text: 'Hello! I\'m your AI assistant. How can I help you today?' }]}
        />
      )
    },
    support: {
      title: "Support Chat",
      description: "Customer support themed with blue colors",
      component: (
        <Botly
          theme="modern"
          customTheme={blueTheme}
          position="bottom-right"
          title="Support Team"
          subtitle="Live chat • Instant help"
          avatar={supportAvatar}
          onSend={async (text) => [await mockLLM(text)]}
          onInit={async () => [{ type: 'text', from: 'bot', text: 'Hi! I\'m here to help with any questions you might have.' }]}
        />
      )
    },
    ai: {
      title: "AI Assistant",
      description: "Green themed AI assistant with custom branding",
      component: (
        <Botly
          theme="modern"
          customTheme={greenTheme}
          position="bottom-right"
          title="AI Helper"
          subtitle="Smart assistance • 24/7 available"
          avatar={aiAvatar}
          onSend={async (text) => [await mockLLM(text)]}
          onInit={async () => [{ type: 'text', from: 'bot', text: 'Hello! I\'m your AI helper. What would you like to know?' }]}
        />
      )
    }
  }

  // Render documentation page
  if (currentPage === 'docs') {
    return <Documentation />
  }

  // Render demo page
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">Botly Documentation</h1>
              <p className="text-slate-600 mt-1">Interactive examples and implementation guide</p>
            </div>
            <div className="flex items-center space-x-3">
              <a 
                href="https://github.com/your-repo/botly" 
                className="text-slate-600 hover:text-slate-900 transition-colors p-2 rounded-md hover:bg-slate-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <button 
                onClick={() => setCurrentPage('docs')}
                className="inline-flex items-center px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium text-sm"
              >
                View Full Documentation
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Getting Started with Botly</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Botly is a modern, customizable chat widget component for React applications. 
              This guide will walk you through different implementation examples and help you 
              understand how to integrate Botly into your projects.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Interactive Examples</h3>
                  <p className="text-blue-800 text-sm">
                    Each example below includes a live chat widget. Click the chat button in the bottom-right corner to test the functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Navigation */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-slate-900 mb-6">Implementation Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(demos).map(([key, demo]) => (
              <div
                key={key}
                className={`border rounded-lg p-6 transition-all duration-200 cursor-pointer ${
                  activeDemo === key
                    ? 'border-blue-300 bg-blue-50 shadow-md'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                }`}
                onClick={() => setActiveDemo(key)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className={`font-semibold text-lg mb-2 ${
                      activeDemo === key ? 'text-blue-900' : 'text-slate-900'
                    }`}>
                      {demo.title}
                    </h4>
                    <p className={`text-sm ${
                      activeDemo === key ? 'text-blue-700' : 'text-slate-600'
                    }`}>
                      {demo.description}
                    </p>
                  </div>
                  {activeDemo === key && (
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="text-xs text-slate-500">
                  Click to view this example
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Active Demo Details */}
        <section className="mb-12">
          <div className="bg-white border border-slate-200 rounded-lg p-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {demos[activeDemo].title}
              </h3>
              <p className="text-slate-600 mb-4">
                {demos[activeDemo].description}
              </p>
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-700">Live Preview Active</span>
                </div>
                <p className="text-sm text-slate-600">
                  The chat widget is now active in the bottom-right corner. Click it to start a conversation and see this example in action.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-slate-900 mb-6">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Multiple Themes",
                description: "Built-in modern, dark, and minimal themes with full customization support",
                icon: "🎨"
              },
              {
                title: "Responsive Design",
                description: "Perfect on desktop, tablet, and mobile devices with adaptive layouts",
                icon: "📱"
              },
              {
                title: "Rich Messages",
                description: "Support for text, buttons, cards, and quick reply message types",
                icon: "💬"
              },
              {
                title: "Flexible Positioning",
                description: "Place the chat widget in any of the four screen corners",
                icon: "📍"
              },
              {
                title: "Custom Branding",
                description: "Custom avatars, icons, titles, and complete theme control",
                icon: "🏷️"
              },
              {
                title: "Event Handling",
                description: "Full control over chat events with customizable callbacks",
                icon: "⚙️"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="text-2xl mb-3">{feature.icon}</div>
                <h4 className="font-semibold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Implementation */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-slate-900 mb-6">Quick Implementation</h3>
          <div className="bg-white border border-slate-200 rounded-lg p-8">
            <div className="mb-6">
              <h4 className="font-semibold text-slate-900 mb-4">Basic Setup</h4>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-slate-900 mb-3">Installation</h5>
                <div className="space-y-3">
                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                    <code className="text-sm font-mono text-slate-700">npm install botly-react</code>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                    <code className="text-sm font-mono text-slate-700">yarn add botly-react</code>
                  </div>
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold text-slate-900 mb-3">Required Props</h5>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span><code className="font-mono">onSend</code> - Handle user messages</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span><code className="font-mono">onInit</code> - Initialize chat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Next Steps</h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Ready to dive deeper? Explore the complete documentation for advanced customization, 
              API reference, and detailed implementation examples.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setCurrentPage('docs')}
                className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
              >
                View Full Documentation
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <a 
                href="https://github.com/your-repo/botly" 
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Render the active demo */}
      {demos[activeDemo].component}
    </div>
  )
}
