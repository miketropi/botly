export default function TextMessage({ text, theme = 'modern' }) {
  const textStyles = {
    modern: 'text-inherit leading-relaxed',
    dark: 'text-inherit leading-relaxed',
    minimal: 'text-inherit leading-relaxed'
  }

  const currentTextStyle = textStyles[theme] || textStyles.modern

  return (
    <div className={currentTextStyle}>
      {text.split('\n').map((line, index) => (
        <p key={index} className={index > 0 ? 'mt-2' : ''}>
          {line}
        </p>
      ))}
    </div>
  )
}
