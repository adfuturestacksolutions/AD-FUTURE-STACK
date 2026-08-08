import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center justify-center gap-6 py-32 text-center">
      <span className="eyebrow">404</span>
      <h1 className="text-4xl font-semibold md:text-5xl">This layer doesn&rsquo;t exist</h1>
      <p className="max-w-sm text-fog">The page you&rsquo;re looking for was moved, removed, or never built.</p>
      <Link to="/" className="btn-primary">
        Back to home
      </Link>
    </div>
  )
}
