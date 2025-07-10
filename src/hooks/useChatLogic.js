import { useState, useEffect } from 'react'

export function useChatLogic({ onInit, onSend, storageKey = 'botly_history' }) {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [initialized, setInitialized] = useState(false)

  // Initialize messages on first load
  useEffect(() => {
    if (!initialized) {
      (async () => {
        try {
          let init = []
          
          // Try to load from localStorage first
          const saved = localStorage.getItem(storageKey)
          if (saved) {
            try {
              const parsedMessages = JSON.parse(saved)
              if (Array.isArray(parsedMessages)) {
                init = parsedMessages
              }
            } catch (e) {
              console.warn('Failed to parse saved messages:', e)
              localStorage.removeItem(storageKey) // Clear corrupted data
            }
          }
          
          // If no saved messages and onInit is provided, use it
          if (init.length === 0 && onInit) {
            try {
              init = await onInit()
            } catch (e) {
              console.error('Failed to initialize messages:', e)
            }
          }
          
          setMessages(init)
          setInitialized(true)
        } catch (e) {
          console.error('Error during initialization:', e)
          setInitialized(true)
        }
      })()
    }
  }, [onInit, storageKey, initialized])

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (initialized && messages.length > 0) {
      try {
        localStorage.setItem(storageKey, JSON.stringify(messages))
      } catch (e) {
        console.warn('Failed to save messages to localStorage:', e)
      }
    }
  }, [messages, storageKey, initialized])

  const sendMessage = async (text) => {
    if (!text.trim()) return
    
    const userMsg = { type: 'text', from: 'user', text, timestamp: Date.now() }
    const during = [...messages, userMsg]
    setMessages(during)
    setLoading(true)
    
    try {
      const replyArr = await onSend(text, during)
      if (Array.isArray(replyArr)) {
        const repliesWithTimestamp = replyArr.map(reply => ({
          ...reply,
          timestamp: Date.now()
        }))
        setMessages([...during, ...repliesWithTimestamp])
      }
    } catch (e) {
      console.error('Error sending message:', e)
      // Optionally add an error message to the chat
      const errorMsg = { 
        type: 'text', 
        from: 'bot', 
        text: 'Sorry, I encountered an error. Please try again.',
        timestamp: Date.now()
      }
      setMessages([...during, errorMsg])
    } finally {
      setLoading(false)
    }
  }

  // Function to clear chat history
  const clearHistory = () => {
    setMessages([])
    try {
      localStorage.removeItem(storageKey)
    } catch (e) {
      console.warn('Failed to clear localStorage:', e)
    }
  }

  return { 
    messages, 
    loading, 
    sendMessage, 
    clearHistory,
    initialized 
  }
}
