import React, { useEffect, useRef } from 'react'
import MessageRenderer from './MessageRenderer'
import MessageInput from './MessageInput'

export default function ChatWindow({ 
  messages, 
  loading, 
  sendMessage, 
  clearHistory, 
  theme = 'modern',
  customTheme = null,
  size = 'default',
  title = 'Botly Assistant',
  subtitle = 'Online • Ready to help',
  avatar = null,
  closeIcon = null,
  onClose 
}) {
  const messagesEndRef = useRef(null)
  const messagesContainerRef = useRef(null)

  const handleReplyClick = (replyText) => {
    sendMessage(replyText)
  }

  const handleCardClick = (card, index) => {
    // You can customize this behavior based on your needs
    console.log('Card clicked:', card, 'at index:', index)
    
    // Example: Send a message about the selected card
    const cardMessage = `I'm interested in: ${card.title}`
    sendMessage(cardMessage)
  }

  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to clear the chat history? This action cannot be undone.')) {
      clearHistory()
    }
  }

  // Auto-scroll to bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'end'
    })
  }

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Scroll to bottom when loading state changes
  useEffect(() => {
    if (loading) {
      scrollToBottom()
    }
  }, [loading])

  // Size configurations
  const sizes = {
    small: {
      window: 'w-72 md:w-80 h-[400px] md:h-[500px]',
      header: 'px-4 py-3',
      content: 'p-3 md:p-4',
      input: 'p-3 md:p-4'
    },
    default: {
      window: 'w-80 md:w-96 h-[500px] md:h-[600px]',
      header: 'px-6 py-4',
      content: 'p-4 md:p-6',
      input: 'p-4 md:p-6'
    },
    large: {
      window: 'w-96 md:w-[28rem] h-[600px] md:h-[700px]',
      header: 'px-8 py-6',
      content: 'p-6 md:p-8',
      input: 'p-6 md:p-8'
    }
  }

  // Default theme styles
  const defaultThemes = {
    modern: {
      window: 'bg-white/95 backdrop-blur-xl border border-slate-200/60 shadow-md',
      header: 'bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200/60'
    },
    dark: {
      window: 'bg-slate-900/95 backdrop-blur-xl border border-slate-700/60 shadow-md',
      header: 'bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700/60'
    },
    minimal: {
      window: 'bg-white border border-slate-200/80 shadow-sm',
      header: 'bg-slate-50 border-b border-slate-200/60'
    }
  }

  // Merge custom theme with default theme
  const getThemeStyles = () => {
    if (customTheme) {
      return {
        ...defaultThemes[theme],
        ...customTheme
      }
    }
    return defaultThemes[theme] || defaultThemes.modern
  }

  const currentSize = sizes[size] || sizes.default
  const currentTheme = getThemeStyles()

  // Default close icon
  const defaultCloseIcon = (
    <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )

  // Default avatar
  const defaultAvatar = (
    <div className="w-8 h-8 bg-slate-200/60 rounded-lg flex items-center justify-center">
      <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    </div>
  )

  return (
    <div className={`${currentSize.window} rounded-xl ${currentTheme.window} flex flex-col overflow-hidden`}>
      {/* Header */}
      <div className={`${currentTheme.header} ${currentSize.header} flex items-center justify-between`}>
        <div className="flex items-center space-x-3">
          {avatar || defaultAvatar}
          <div>
            <h2 className="font-medium text-sm md:text-base text-slate-800">{title}</h2>
            <p className="text-xs text-slate-500">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {messages.length > 0 && (
            <button 
              onClick={handleClearHistory}
              className="p-2 hover:bg-slate-200/60 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-opacity-50"
              aria-label="Clear chat history"
              title="Clear chat history"
            >
              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          )}
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-200/60 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-opacity-50"
            aria-label="Close chat"
          >
            {closeIcon || defaultCloseIcon}
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div 
        ref={messagesContainerRef}
        className={`flex-1 overflow-auto ${currentSize.content} space-y-4 scroll-smooth`}
      >
        {messages.length === 0 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <p className="text-slate-500 text-sm">Start a conversation with {title}</p>
          </div>
        )}
        
        {messages.map((m, i) => (
          <MessageRenderer 
            key={i} 
            message={m} 
            theme={theme}
            customTheme={customTheme}
            onReplyClick={handleReplyClick}
            onCardClick={handleCardClick}
          />
        ))}
        
        {loading && (
          <div className="flex items-center space-x-2 text-slate-500">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
            <span className="text-sm">{title} is typing...</span>
          </div>
        )}

        {/* Invisible element to scroll to */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className={`${currentSize.input} border-t border-slate-200/60`}>
        <MessageInput onSend={sendMessage} theme={theme} customTheme={customTheme} />
      </div>
    </div>
  )
}
