import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Button({
  children,
  to,
  variant = 'primary',
  size = 'md',
  icon = true,
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-bold tracking-tight transition-all rounded-full select-none cursor-pointer'

  const variants = {
    primary: 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-lg shadow-cyan-500/20 active:scale-95',
    secondary: 'bg-slate-900 border border-slate-700 text-white hover:bg-slate-800 hover:border-slate-500 active:scale-95',
    outline: 'border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 active:scale-95',
    white: 'bg-white text-slate-950 hover:bg-slate-100 shadow-xl active:scale-95'
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base'
  }

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`

  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClasses}`} {...props}>
        {content}
      </Link>
    )
  }

  return (
    <button className={`group ${combinedClasses}`} {...props}>
      {content}
    </button>
  )
}
