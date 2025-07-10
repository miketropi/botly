export default function CardTemplate({ title, subtitle, image, theme = 'modern' }) {
  const cardStyles = {
    modern: 'bg-white border border-slate-200/60 shadow-sm hover:shadow-md',
    dark: 'bg-slate-800 border border-slate-700/60 shadow-sm hover:shadow-md',
    minimal: 'bg-white border border-slate-200/80 shadow-sm hover:shadow-md'
  }

  const currentCardStyle = cardStyles[theme] || cardStyles.modern

  return (
    <div className={`${currentCardStyle} rounded-xl overflow-hidden transition-all duration-300`}>
      {image && (
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-40 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        </div>
      )}
      <div className="p-4">
        <h3 className="font-medium text-lg mb-1 text-slate-800 dark:text-slate-100">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  )
}
