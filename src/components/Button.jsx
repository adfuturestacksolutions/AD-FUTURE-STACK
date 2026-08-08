import { Link } from 'react-router-dom'

/**
 * Shared button. Renders a <Link> when `to` is given, otherwise a <button>.
 * variant: 'primary' | 'ghost'
 */
export default function Button({ children, to, href, onClick, variant = 'primary', type = 'button', className = '' }) {
  const base = variant === 'primary' ? 'btn-primary' : 'btn-ghost'
  const classes = `${base} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
