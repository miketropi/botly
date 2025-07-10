export default function ButtonTemplate({ text, buttons, theme = 'modern' }) {
  const buttonStyles = {
    modern: 'bg-slate-600 hover:bg-slate-700 text-white shadow-sm hover:shadow-md',
    dark: 'bg-slate-700 hover:bg-slate-800 text-white shadow-sm hover:shadow-md',
    minimal: 'bg-slate-700 hover:bg-slate-800 text-white border border-slate-300'
  }

  const currentButtonStyle = buttonStyles[theme] || buttonStyles.modern

  return (
    <div className="space-y-3">
      <p className="text-inherit leading-relaxed">{text}</p>
      <div className="flex flex-wrap gap-2">
        {buttons.map((btn, i) => (
          <a 
            key={i} 
            href={btn.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${currentButtonStyle} inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-opacity-50`}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            {btn.label}
          </a>
        ))}
      </div>
    </div>
  )
}
