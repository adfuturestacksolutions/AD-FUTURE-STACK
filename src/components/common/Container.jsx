export default function Container({ children, className = '' }) {
  return (
    <div className={`max-w-9xl mx-auto px-4 sm:px-6 lg:px-32 ${className}`}>
      {children}
    </div>
  )
}
