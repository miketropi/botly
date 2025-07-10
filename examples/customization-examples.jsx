import React from 'react'
import Botly from '../src/components/Botly'

// Example 1: Basic usage with built-in themes
export function BasicExample() {
  return (
    <Botly
      theme="modern"
      position="bottom-right"
      onSend={async (text) => [{ type: 'text', from: 'bot', text: `You said: ${text}` }]}
      onInit={async () => [{ type: 'text', from: 'bot', text: 'Hello! How can I help?' }]}
    />
  )
}

// Example 2: Custom theme with brand colors
export function CustomThemeExample() {
  const customTheme = {
    button: 'bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border border-blue-400',
    window: 'bg-white/95 backdrop-blur-xl border border-blue-200 shadow-xl',
    header: 'bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200',
    user: 'bg-blue-600 text-white shadow-md',
    bot: 'bg-gray-50 border border-gray-200 text-gray-800',
    input: 'bg-gray-50 border border-gray-200 focus:border-blue-300 focus:ring-2 focus:ring-blue-200',
    sendButton: 'bg-blue-600 hover:bg-blue-700 text-white'
  }

  return (
    <Botly
      theme="modern"
      customTheme={customTheme}
      title="Support Assistant"
      subtitle="We're here to help • 24/7"
      onSend={async (text) => [{ type: 'text', from: 'bot', text: `Thanks for your message: ${text}` }]}
    />
  )
}

// Example 3: Different sizes
export function SizeExamples() {
  return (
    <>
      {/* Small size */}
      <Botly
        size="small"
        position="bottom-left"
        title="Small Chat"
        onSend={async (text) => [{ type: 'text', from: 'bot', text: 'Small response' }]}
      />
      
      {/* Large size */}
      <Botly
        size="large"
        position="top-right"
        title="Large Chat"
        onSend={async (text) => [{ type: 'text', from: 'bot', text: 'Large response' }]}
      />
    </>
  )
}

// Example 4: Custom icons and branding
export function CustomBrandingExample() {
  const customChatIcon = (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  )

  const customCloseIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )

  const customAvatar = (
    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-sm">S</span>
    </div>
  )

  return (
    <Botly
      chatIcon={customChatIcon}
      closeIcon={customCloseIcon}
      title="Support Team"
      subtitle="Live chat • Instant help"
      avatar={customAvatar}
      onSend={async (text) => [{ type: 'text', from: 'bot', text: 'Support response' }]}
    />
  )
}

// Example 5: Behavior options
export function BehaviorExample() {
  return (
    <Botly
      autoOpen={true}
      showMessageIndicator={false}
      onOpen={() => console.log('Chat opened automatically')}
      onClose={() => console.log('Chat closed')}
      onSend={async (text) => [{ type: 'text', from: 'bot', text: 'Behavior example' }]}
    />
  )
}

// Example 6: Complete customization
export function CompleteExample() {
  const customTheme = {
    button: 'bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border border-purple-400 shadow-lg',
    window: 'bg-white/95 backdrop-blur-xl border border-purple-200 shadow-2xl',
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
    <Botly
      theme="modern"
      customTheme={customTheme}
      size="large"
      position="bottom-right"
      title="AI Assistant"
      subtitle="Powered by GPT-4 • Always learning"
      avatar={customAvatar}
      autoOpen={false}
      showMessageIndicator={true}
      onOpen={() => console.log('AI Assistant opened')}
      onClose={() => console.log('AI Assistant closed')}
      onSend={async (text) => {
        console.log('User message:', text)
        return [{ type: 'text', from: 'bot', text: `AI response to: ${text}` }]
      }}
      onInit={async () => {
        console.log('AI Assistant initialized')
        return [{ type: 'text', from: 'bot', text: 'Hello! I\'m your AI assistant. How can I help you today?' }]
      }}
      className="custom-ai-assistant"
      style={{ zIndex: 9999 }}
    />
  )
}

// Example 7: Multiple instances with different themes
export function MultipleInstancesExample() {
  return (
    <>
      {/* Modern theme */}
      <Botly
        theme="modern"
        position="bottom-right"
        title="Modern Bot"
        onSend={async (text) => [{ type: 'text', from: 'bot', text: 'Modern response' }]}
      />
      
      {/* Dark theme */}
      <Botly
        theme="dark"
        position="top-left"
        title="Dark Bot"
        onSend={async (text) => [{ type: 'text', from: 'bot', text: 'Dark response' }]}
      />
      
      {/* Minimal theme */}
      <Botly
        theme="minimal"
        position="top-right"
        title="Minimal Bot"
        onSend={async (text) => [{ type: 'text', from: 'bot', text: 'Minimal response' }]}
      />
    </>
  )
} 