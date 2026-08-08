export default function ProcessStep({ index, title, description, isLast }) {
  return (
    <div className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-signal-violet/50 font-mono text-sm text-signal-violet">
          {String(index).padStart(2, '0')}
        </span>
        {!isLast && <span className="mt-2 w-px flex-1 bg-ink-line" />}
      </div>
      <div className="pb-10">
        <h3 className="text-lg font-semibold text-paper">{title}</h3>
        <p className="mt-2 max-w-md text-sm text-fog">{description}</p>
      </div>
    </div>
  )
}
