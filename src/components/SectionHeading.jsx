export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
      {description && <p className="text-base text-fog md:text-lg">{description}</p>}
    </div>
  )
}
