# Botly - React Chat Widget

A modern, customizable chat widget component for React applications. Botly provides a beautiful, accessible chat interface that can be easily integrated into any React project.

## Features

- 🎨 **Multiple Themes**: Modern, Dark, and Minimal built-in themes
- 🎯 **Fully Customizable**: Custom themes, colors, icons, and branding
- 📱 **Responsive Design**: Works perfectly on desktop and mobile
- 🔧 **Flexible Positioning**: 4 corner positions (bottom-right, bottom-left, top-right, top-left)
- 📏 **Multiple Sizes**: Small, Default, and Large size options
- 💾 **Persistent Chat**: Optional localStorage persistence
- 🎭 **Rich Message Types**: Text, buttons, cards, quick replies, and more
- ♿ **Accessible**: Built with accessibility in mind
- 🚀 **Lightweight**: Minimal dependencies, fast performance

## Installation

```bash
npm install botly-react
```

## Quick Start

```jsx
import Botly from 'botly-react'

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
        return [{ type: 'text', from: 'bot', text: 'Hello! How can I help you?' }]
      }}
    />
  )
}
```

## Basic Usage

### Required Props

- `onSend`: Function that handles user messages and returns bot responses
- `onInit`: Function that returns initial messages when chat opens

### Example with AI Integration

```jsx
import Botly from 'botly-react'

function App() {
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

  const handleInit = async () => {
    return [{ 
      type: 'text', 
      from: 'bot', 
      text: 'Hello! I\'m your AI assistant. How can I help you today?' 
    }]
  }

  return (
    <Botly
      onSend={handleSend}
      onInit={handleInit}
    />
  )
}
```

## Customization Options

### 1. Themes

#### Built-in Themes
```jsx
<Botly theme="modern" />  // Default modern design
<Botly theme="dark" />    // Dark theme
<Botly theme="minimal" /> // Clean minimal design
```

#### Custom Theme
```jsx
const customTheme = {
  button: 'bg-blue-500 hover:bg-blue-600 text-white',
  window: 'bg-white border border-blue-200 shadow-lg',
  header: 'bg-blue-50 border-b border-blue-200',
  user: 'bg-blue-600 text-white',
  bot: 'bg-gray-50 border border-gray-200',
  input: 'bg-gray-50 border border-gray-200 focus:border-blue-300',
  sendButton: 'bg-blue-600 hover:bg-blue-700 text-white'
}

<Botly theme="modern" customTheme={customTheme} />
```

### 2. Size Options

```jsx
<Botly size="small" />   // Compact size
<Botly size="default" /> // Standard size (default)
<Botly size="large" />   // Large size
```

### 3. Position Options

```jsx
<Botly position="bottom-right" /> // Default
<Botly position="bottom-left" />
<Botly position="top-right" />
<Botly position="top-left" />
```

### 4. Custom Branding

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

### 5. Custom Icons

```jsx
const customChatIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
)

<Botly chatIcon={customChatIcon} />
```

### 6. Behavior Options

```jsx
<Botly
  autoOpen={true}              // Open chat automatically
  showMessageIndicator={false} // Hide message count indicator
  onOpen={() => console.log('Chat opened')}
  onClose={() => console.log('Chat closed')}
/>
```

## Message Types

Botly supports various message types for rich interactions:

### Text Messages
```jsx
{ type: 'text', from: 'bot', text: 'Hello there!' }
```

### Button Templates
```jsx
{
  type: 'button-template',
  from: 'bot',
  text: 'Choose an option:',
  buttons: [
    { text: 'Option 1', value: 'option1' },
    { text: 'Option 2', value: 'option2' }
  ]
}
```

### Card Templates
```jsx
{
  type: 'card-template',
  from: 'bot',
  title: 'Product Name',
  subtitle: 'Product description',
  image: 'https://example.com/image.jpg'
}
```

### Card Slides (Multiple Cards)
```jsx
{
  type: 'card-slide',
  from: 'bot',
  cards: [
    { title: 'Card 1', subtitle: 'Description 1', image: 'url1' },
    { title: 'Card 2', subtitle: 'Description 2', image: 'url2' }
  ]
}
```

### Quick Replies
```jsx
{
  type: 'quick-replies',
  from: 'bot',
  text: 'Quick response options:',
  replies: ['Yes', 'No', 'Maybe']
}
```

## Complete Example

```jsx
import Botly from 'botly-react'

function App() {
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

  const handleSend = async (text) => {
    // Simulate AI response
    const responses = [
      { type: 'text', from: 'bot', text: `I understand you said: "${text}"` },
      {
        type: 'quick-replies',
        from: 'bot',
        text: 'Would you like to know more?',
        replies: ['Yes, please', 'No, thanks', 'Maybe later']
      }
    ]
    
    return responses
  }

  const handleInit = async () => {
    return [
      { type: 'text', from: 'bot', text: 'Hello! I\'m your AI assistant.' },
      {
        type: 'button-template',
        from: 'bot',
        text: 'What can I help you with today?',
        buttons: [
          { text: 'Get Support', value: 'support' },
          { text: 'Learn More', value: 'learn' },
          { text: 'Contact Us', value: 'contact' }
        ]
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
        onOpen={() => console.log('Chat opened')}
        onClose={() => console.log('Chat closed')}
        onSend={handleSend}
        onInit={handleInit}
        className="custom-ai-assistant"
        style={{ zIndex: 9999 }}
      />
    </div>
  )
}
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `string` | `'modern'` | Theme: 'modern', 'dark', 'minimal' |
| `customTheme` | `object` | `null` | Custom theme object |
| `position` | `string` | `'bottom-right'` | Position: 'bottom-right', 'bottom-left', 'top-right', 'top-left' |
| `size` | `string` | `'default'` | Size: 'small', 'default', 'large' |
| `title` | `string` | `'Botly Assistant'` | Chat window title |
| `subtitle` | `string` | `'Online • Ready to help'` | Chat window subtitle |
| `avatar` | `ReactNode` | `null` | Custom avatar component |
| `chatIcon` | `ReactNode` | `null` | Custom chat button icon |
| `closeIcon` | `ReactNode` | `null` | Custom close button icon |
| `autoOpen` | `boolean` | `false` | Open chat automatically |
| `showMessageIndicator` | `boolean` | `true` | Show message count indicator |
| `onSend` | `function` | **Required** | Handle user messages |
| `onInit` | `function` | **Required** | Initialize chat messages |
| `onOpen` | `function` | `null` | Called when chat opens |
| `onClose` | `function` | `null` | Called when chat closes |
| `className` | `string` | `''` | Additional CSS classes |
| `style` | `object` | `{}` | Additional inline styles |

## Requirements

- React 18+
- Tailwind CSS 4.x

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - see LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
