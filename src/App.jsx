import { useState } from 'react'
import Botly from './components/Botly'
import { mockLLM } from './llm/mockLLM'

export default function App() {
  const [theme, setTheme] = useState('modern')
  const [size, setSize] = useState('default')
  const [showCustom, setShowCustom] = useState(false)

  // Custom theme example
  const customTheme = {
    button: 'bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border border-purple-400',
    window: 'bg-white/95 backdrop-blur-xl border border-purple-200 shadow-xl',
    header: 'bg-gradient-to-r from-purple-50 to-purple-100 border-b border-purple-200',
    user: 'bg-purple-600 text-white shadow-md',
    bot: 'bg-gray-50 border border-gray-200 text-gray-800',
    input: 'bg-gray-50 border border-gray-200 focus:border-purple-300 focus:ring-2 focus:ring-purple-200',
    sendButton: 'bg-purple-600 hover:bg-purple-700 text-white'
  }

  const customAvatar = (
    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-sm">A</span>
    </div>
  )

  return (
    <>
      <button onClick={() => setShowCustom(!showCustom)}>
        {showCustom ? 'Switch to Default Theme' : 'Switch to Custom Theme'}
      </button>
      <Botly
        theme={showCustom ? 'modern' : theme}
        customTheme={showCustom ? customTheme : null}
        size={size}
        position="bottom-right"
        title={showCustom ? "AI Assistant" : "Botly Assistant"}
        subtitle={showCustom ? "Powered by GPT-4 • Always learning" : "Online • Ready to help"}
        avatar={showCustom ? customAvatar : null}
        onSend={async (text) => [await mockLLM(text)]}
        onInit={async () => [{ type: 'text', from: 'bot', text: 'Hello! I\'m Botly. How can I help you today?' }]}
      />
    </>
  )
}
