import { useState } from 'react'

export default function MessageInput({ onSend, theme = 'modern', customTheme = null }) {
  const [value, setValue] = useState('')
  
  const send = () => {
    if (value.trim()) {
      onSend(value)
      setValue('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  // Default theme styles
  const defaultInputStyles = {
    modern: 'bg-slate-50 border border-slate-200 focus:border-slate-300 focus:ring-2 focus:ring-slate-200',
    dark: 'bg-slate-800 border border-slate-600 focus:border-slate-500 focus:ring-2 focus:ring-slate-700 text-slate-100',
    minimal: 'bg-white border border-slate-200 focus:border-slate-300 focus:ring-2 focus:ring-slate-200'
  }

  const defaultButtonStyles = {
    modern: 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800',
    dark: 'bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900',
    minimal: 'bg-slate-700 hover:bg-slate-800 text-white'
  }

  // Merge custom theme with default theme
  const getInputStyles = () => {
    if (customTheme?.input) {
      return customTheme.input
    }
    return defaultInputStyles[theme] || defaultInputStyles.modern
  }

  const getButtonStyles = () => {
    if (customTheme?.button) {
      return customTheme.button
    }
    return defaultButtonStyles[theme] || defaultButtonStyles.modern
  }

  const currentInputStyle = getInputStyles()
  const currentButtonStyle = getButtonStyles()

  return (
    <div className="flex space-x-3 items-center" style={{'lineHeight': '0px'}}>
      <div className="flex-1 relative">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className={`${currentInputStyle} w-full px-4 py-3 rounded-xl resize-none focus:outline-none transition-all duration-300 placeholder-slate-400 text-sm`}
          placeholder="Type your message..."
          rows="1"
          style={{ minHeight: '44px', maxHeight: '120px' }}
        />
        {/* <div className="absolute bottom-2 right-2 text-xs text-gray-400">
          Press Enter to send
        </div> */}
      </div>
      
      <button 
        className={`${currentButtonStyle} p-3 rounded-xl text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
        onClick={send}
        disabled={!value.trim()}
        aria-label="Send message"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </button>
    </div>
  )
}
