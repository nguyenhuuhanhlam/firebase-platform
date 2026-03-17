import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section style={{ padding: 24 }}>
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/" style={{ color: '#3b82f6' }}>
        Go home
      </Link>
    </section>
  )
}
