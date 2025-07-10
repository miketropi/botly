import TextMessage from './messages/TextMessage'
import ButtonTemplate from './messages/ButtonTemplate'
import CardTemplate from './messages/CardTemplate'
import CardSlide from './messages/CardSlide'
import QuickReplies from './messages/QuickReplies'

export default function MessageRenderer({ message, theme = 'modern', customTheme = null, onReplyClick, onCardClick }) {
  const align = message.from === 'user' ? 'justify-end' : 'justify-start'
  
  // Enhanced theme-specific styling with 2025 design
  const defaultThemeStyles = {
    modern: {
      user: 'bg-gradient-to-br from-slate-600 to-slate-700 text-white shadow-md',
      bot: 'bg-white border border-slate-200/60 text-slate-800 shadow-sm',
      container: 'max-w-[100%]'
    },
    dark: {
      user: 'bg-gradient-to-br from-slate-700 to-slate-800 text-white shadow-md',
      bot: 'bg-slate-800 border border-slate-700/60 text-slate-100 shadow-sm',
      container: 'max-w-[100%]'
    },
    minimal: {
      user: 'bg-slate-800 text-white',
      bot: 'bg-slate-50 border border-slate-200/80 text-slate-800',
      container: 'max-w-[100%]'
    }
  }
  
  // Merge custom theme with default theme
  const getThemeStyles = () => {
    if (customTheme) {
      return {
        ...defaultThemeStyles[theme],
        ...customTheme
      }
    }
    return defaultThemeStyles[theme] || defaultThemeStyles.modern
  }
  
  const currentTheme = getThemeStyles()
  const messageBg = message.from === 'user' ? currentTheme.user : currentTheme.bot

  const renderMessageContent = () => {
    switch (message.type) {
      case 'text':
        return <TextMessage text={message.text} theme={theme} customTheme={customTheme} />
      
      case 'button-template':
        return (
          <ButtonTemplate 
            text={message.text} 
            buttons={message.buttons}
            theme={theme}
            customTheme={customTheme}
          />
        )
      
      case 'card-template':
        return (
          <CardTemplate 
            title={message.title}
            subtitle={message.subtitle}
            image={message.image}
            theme={theme}
            customTheme={customTheme}
          />
        )
      
      case 'card-slide':
        return (
          <CardSlide 
            cards={message.cards}
            theme={theme}
            customTheme={customTheme}
            onCardClick={onCardClick}
          />
        )
      
      case 'quick-replies':
        return (
          <QuickReplies 
            text={message.text}
            replies={message.replies}
            onReplyClick={onReplyClick}
            theme={theme}
            customTheme={customTheme}
          />
        )
      
      default:
        // Fallback for unknown message types
        return (
          <div className="text-sm text-slate-500 bg-slate-100 px-3 py-2 rounded-lg">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span>Unsupported message type: {message.type}</span>
            </div>
          </div>
        )
    }
  }

  return (
    <div className={`flex ${align} mb-4`}>
      <div className={`px-4 py-3 rounded-xl ${currentTheme.container} ${messageBg} transition-all duration-300 hover:shadow-md`}>
        {renderMessageContent()}
      </div>
    </div>
  )
}
