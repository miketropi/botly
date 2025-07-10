import { useState, useRef } from 'react'

export default function CardSlide({ cards, theme = 'modern', onCardClick }) {
  const [showScrollHint, setShowScrollHint] = useState(true)
  const scrollContainerRef = useRef(null)

  const cardStyles = {
    modern: 'bg-white border border-slate-200/60 shadow-sm hover:shadow-md',
    dark: 'bg-slate-800 border border-slate-700/60 shadow-sm hover:shadow-md',
    minimal: 'bg-white border border-slate-200/80 shadow-sm hover:shadow-md'
  }

  const currentCardStyle = cardStyles[theme] || cardStyles.modern

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10
      setShowScrollHint(!isAtEnd)
    }
  }

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 256, behavior: 'smooth' })
    }
  }

  const scrollToPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -256, behavior: 'smooth' })
    }
  }

  return (
    <div className="space-y-3">
      {/* Navigation Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={scrollToPrev}
          className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-300"
          aria-label="Scroll to previous cards"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <span className="text-sm text-slate-500">
          {cards.length} item{cards.length !== 1 ? 's' : ''}
        </span>
        
        <button
          onClick={scrollToNext}
          className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-300"
          aria-label="Scroll to next cards"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Cards Container */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${currentCardStyle} rounded-xl overflow-hidden transition-all duration-300 flex-shrink-0 cursor-pointer min-w-[240px] max-w-[240px]`}
              onClick={() => onCardClick && onCardClick(card, index)}
            >
              {card.image && (
                <div className="relative">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-32 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
              )}
              <div className="p-3">
                <h3 className="font-medium text-base mb-1 text-slate-800 dark:text-slate-100 line-clamp-2">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {card.subtitle}
                </p>
                {card.price && (
                  <div className="mt-2">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      {card.price}
                    </span>
                  </div>
                )}
                {card.button && (
                  <button className="mt-2 w-full bg-slate-600 hover:bg-slate-700 text-white text-xs py-1.5 px-3 rounded-lg transition-colors duration-300">
                    {card.button}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Hint */}
        {showScrollHint && cards.length > 1 && (
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-white to-transparent w-8 h-full pointer-events-none">
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Scroll Indicators */}
      <div className="flex justify-center space-x-1">
        {cards.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-slate-300"
          />
        ))}
      </div>
    </div>
  )
} 