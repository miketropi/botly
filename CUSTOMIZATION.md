# Botly Customization Guide

Botly now supports extensive customization options to match your brand and design requirements. All options are backward compatible, so existing implementations will continue to work.

## Basic Usage

```jsx
import Botly from './components/Botly'

function App() {
  return (
    <Botly
      theme="modern"
      position="bottom-right"
      onSend={async (text) => [/* your logic */]}
      onInit={async () => [/* initial message */]}
    />
  )
}
```

## Customization Options

### 1. Theme Options

#### Built-in Themes
```jsx
// Available themes: 'modern', 'dark', 'minimal'
<Botly theme="dark" />
```

#### Custom Theme Object
```jsx
const customTheme = {
  // Button styles
  button: 'bg-blue-500 hover:bg-blue-600 text-white border border-blue-400',
  
  // Window styles
  window: 'bg-white/95 backdrop-blur-xl border border-blue-200 shadow-lg',
  
  // Header styles
  header: 'bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200',
  
  // Message styles
  user: 'bg-blue-600 text-white shadow-md',
  bot: 'bg-gray-50 border border-gray-200 text-gray-800',
  
  // Input styles
  input: 'bg-gray-50 border border-gray-200 focus:border-blue-300 focus:ring-2 focus:ring-blue-200',
  
  // Send button styles
  sendButton: 'bg-blue-600 hover:bg-blue-700 text-white'
}

<Botly theme="modern" customTheme={customTheme} />
```

### 2. Size Options

```jsx
// Available sizes: 'small', 'default', 'large'
<Botly size="large" />
```

### 3. Position Options

```jsx
// Available positions: 'bottom-right', 'bottom-left', 'top-right', 'top-left'
<Botly position="top-left" />
```

### 4. Custom Icons

```jsx
// Custom chat icon
const customChatIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
)

// Custom close icon
const customCloseIcon = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

<Botly 
  chatIcon={customChatIcon}
  closeIcon={customCloseIcon}
/>
```

### 5. Custom Branding

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

### 6. Behavior Options

```jsx
<Botly 
  autoOpen={true}           // Open chat automatically
  persistent={true}         // Persist chat state across page reloads
  showMessageIndicator={false}  // Hide message count indicator
/>
```

### 7. Event Callbacks

```jsx
<Botly 
  onOpen={() => console.log('Chat opened')}
  onClose={() => console.log('Chat closed')}
  onSend={async (text) => {
    console.log('Message sent:', text)
    return [/* response messages */]
  }}
  onInit={async () => {
    console.log('Chat initialized')
    return [/* initial messages */]
  }}
/>
```

### 8. Additional Styling

```jsx
<Botly 
  className="custom-botly-class"
  style={{ 
    zIndex: 9999,
    filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))'
  }}
/>
```

## Complete Example

```jsx
import Botly from './components/Botly'

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
        onSend={async (text) => {
          // Your AI logic here
          return [{ type: 'text', from: 'bot', text: `You said: ${text}` }]
        }}
        onInit={async () => {
          return [{ type: 'text', from: 'bot', text: 'Hello! How can I help you today?' }]
        }}
        className="custom-botly"
        style={{ zIndex: 9999 }}
      />
    </div>
  )
}
```

## Theme Structure

The `customTheme` object can include any of these properties:

```jsx
const themeStructure = {
  // Button (chat toggle button)
  button: 'string', // Tailwind classes
  
  // Window (main chat container)
  window: 'string', // Tailwind classes
  
  // Header (chat header area)
  header: 'string', // Tailwind classes
  
  // Messages
  user: 'string',   // User message styling
  bot: 'string',    // Bot message styling
  
  // Input area
  input: 'string',      // Input field styling
  sendButton: 'string', // Send button styling
}
```

## Best Practices

1. **Start Simple**: Begin with built-in themes and gradually add customizations
2. **Test Responsively**: Ensure your custom themes work on mobile devices
3. **Maintain Contrast**: Ensure text remains readable with your color choices
4. **Use Tailwind**: Leverage Tailwind CSS classes for consistent styling
5. **Backward Compatibility**: Existing implementations will continue to work

## Migration Guide

Existing code will work without changes:

```jsx
// This still works exactly the same
<Botly 
  theme="modern" 
  position="bottom-right" 
  onSend={handleSend} 
/>
```

To add customizations, simply add the new props:

```jsx
// Enhanced with customizations
<Botly 
  theme="modern" 
  position="bottom-right" 
  onSend={handleSend}
  size="large"
  title="Custom Assistant"
  customTheme={myCustomTheme}
/>
``` 