export default function QuickReplies({ text, replies, onReplyClick, theme = 'modern' }) {
  const replyStyles = {
    modern: 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/60',
    dark: 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700/60',
    minimal: 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/80'
  }

  const currentReplyStyle = replyStyles[theme] || replyStyles.modern

  return (
    <div className="space-y-3">
      <p className="text-inherit leading-relaxed">{text}</p>
      <div className="flex flex-wrap gap-2">
        {replies.map((reply, i) => (
          <button 
            key={i} 
            className={`${currentReplyStyle} px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-opacity-50`}
            onClick={() => onReplyClick && onReplyClick(reply)}
          >
            {reply}
          </button>
        ))}
      </div>
    </div>
  )
}
