import React, { useState } from 'react'
import { useChatLogic } from '../hooks/useChatLogic'
import ChatWindow from './ChatWindow'

export default function Botly({ 
  // Theme options
  theme = 'modern', 
  customTheme = null,
  
  // Position and size
  position = 'bottom-right',
  size = 'default',
  
  // Custom icons
  chatIcon = null,
  closeIcon = null,
  
  // Custom branding
  title = 'Botly Assistant',
  subtitle = 'Online • Ready to help',
  avatar = null,
  
  // Behavior options
  autoOpen = false,
  persistent = false,
  showMessageIndicator = true,
  
  // Callbacks
  onInit,
  onSend,
  onOpen,
  onClose,
  
  // Additional props
  className = '',
  style = {}
}) {
  const [open, setOpen] = useState(autoOpen)
  
  // Move chat logic to Botly component level to persist state
  const { messages, loading, sendMessage, clearHistory } = useChatLogic({ onInit, onSend })
  
  // Position configurations
  const positions = {
    'bottom-right': 'bottom-4 right-4 md:bottom-6 md:right-6',
    'bottom-left': 'bottom-4 left-4 md:bottom-6 md:left-6',
    'top-right': 'top-4 right-4 md:top-6 md:right-6',
    'top-left': 'top-4 left-4 md:top-6 md:left-6',
  }
  
  // Size configurations
  const sizes = {
    small: {
      button: 'p-3 md:p-4',
      icon: 'w-5 h-5',
      window: 'w-72 md:w-80 h-[400px] md:h-[500px]'
    },
    default: {
      button: 'p-4 md:p-5',
      icon: 'w-6 h-6',
      window: 'w-80 md:w-96 h-[500px] md:h-[600px]'
    },
    large: {
      button: 'p-5 md:p-6',
      icon: 'w-7 h-7',
      window: 'w-96 md:w-[28rem] h-[600px] md:h-[700px]'
    }
  }
  
  // Default theme styles
  const defaultThemes = {
    modern: {
      button: 'bg-gradient-to-br from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 text-slate-700 border border-slate-200/60',
      window: 'bg-white/95 backdrop-blur-xl border border-slate-200/60 shadow-md',
      header: 'bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200/60'
    },
    dark: {
      button: 'bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-slate-100 border border-slate-700/60',
      window: 'bg-slate-900/95 backdrop-blur-xl border border-slate-700/60 shadow-md',
      header: 'bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700/60'
    },
    minimal: {
      button: 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/80',
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
  
  // Handle open/close with callbacks
  const handleOpen = () => {
    setOpen(true)
    onOpen?.()
  }
  
  const handleClose = () => {
    setOpen(false)
    onClose?.()
  }
  
  // Check if there are messages to show indicator
  const hasMessages = messages.length > 0
  
  // Default chat icon
  const defaultChatIcon = (
    <svg className={currentSize.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  )
  
  return (
    <div className={`fixed z-50 ${positions[position]} ${className}`} style={style}>
      {open && (
        <div className="mb-4 md:mb-6">
          <ChatWindow 
            messages={messages}
            loading={loading}
            sendMessage={sendMessage}
            clearHistory={clearHistory}
            theme={theme}
            customTheme={customTheme}
            size={size}
            title={title}
            subtitle={subtitle}
            avatar={avatar}
            closeIcon={closeIcon}
            onClose={handleClose} 
          />
        </div>
      )}
      {
        !open && (
          <div className="relative">
            <button 
              className={`${currentTheme.button} ${currentSize.button} rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-opacity-50 backdrop-blur-sm`} 
              onClick={handleOpen}
              aria-label={open ? 'Close chat' : 'Open chat'}
            >
              {chatIcon || defaultChatIcon}
            </button>
            
            {/* Message indicator when chat is closed and has messages */}
            {showMessageIndicator && hasMessages && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white text-xs font-bold">
                  {messages.length > 99 ? '99+' : messages.length}
                </span>
              </div>
            )}
          </div>
        )
      }
    </div>
  )
}
