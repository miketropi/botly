# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Botly is a modern, customizable React chat widget component library built with Vite, React, and Tailwind CSS. It provides a complete chat interface that can be easily integrated into any React application with extensive customization options.

## Development Commands

```bash
# Development server
npm run dev

# Build the library
npm run build

# Lint the code
npm run lint

# Preview the build
npm run preview
```

## Architecture

### Core Components Structure

- **Main Entry Point**: `src/index.jsx` - exports the Botly component
- **Core Component**: `src/components/Botly.jsx` - main chat widget with configuration options
- **Chat Window**: `src/components/ChatWindow.jsx` - handles the chat interface
- **Message System**: `src/components/MessageRenderer.jsx` - renders different message types
- **Input Component**: `src/components/MessageInput.jsx` - handles user input
- **Chat Logic**: `src/hooks/useChatLogic.js` - manages chat state and persistence

### Message Types

The component supports various message types located in `src/components/messages/`:
- `TextMessage.jsx` - Basic text messages
- `ButtonTemplate.jsx` - Interactive buttons
- `CardTemplate.jsx` - Rich card layouts
- `CardSlide.jsx` - Carousel-style cards
- `QuickReplies.jsx` - Quick response buttons

### Theme System

Botly uses a comprehensive theme system with:
- Built-in themes: `modern`, `dark`, `minimal`
- Custom theme support via `customTheme` prop
- Position options: `bottom-right`, `bottom-left`, `top-right`, `top-left`
- Size variants: `small`, `default`, `large`

### State Management

- Uses React hooks for state management
- Persistent chat history via localStorage
- Message state managed in `useChatLogic` hook
- Supports async message handling with loading states

## Key Integration Points

### Basic Usage Pattern
```jsx
import { Botly } from 'botly-react'

<Botly
  theme="modern"
  position="bottom-right"
  onSend={async (text) => {
    // Handle user message and return bot responses
    return [{ type: 'text', from: 'bot', text: 'Response' }]
  }}
  onInit={async () => {
    // Initialize chat with welcome message
    return [{ type: 'text', from: 'bot', text: 'Hello!' }]
  }}
/>
```

### Message Handler Contract
- `onSend(text, messageHistory)` - Must return array of message objects
- `onInit()` - Optional, returns initial messages
- Message format: `{ type: 'text', from: 'bot'|'user', text: string, timestamp?: number }`

## Build System

- **Vite**: Development server and build tool
- **Library Mode**: Configured in `vite.config.js` to build as UMD/ES modules
- **External Dependencies**: React and ReactDOM are externalized
- **Output**: `dist/botly.umd.js` and `dist/botly.es.js` with CSS bundle

## Development Notes

- Uses Tailwind CSS for styling with custom configuration
- ESLint configured for React best practices
- No test runner currently configured
- LocalStorage used for chat persistence
- Responsive design with mobile-first approach
- Accessibility features included (ARIA labels, focus management)

## File Structure Highlights

- `src/App.jsx` - Demo application and documentation
- `src/llm/mockLLM.js` - Mock AI responses for demo
- `examples/` - Additional usage examples
- `CUSTOMIZATION.md` - Detailed customization guide
- `preview-images/` - Component preview screenshots