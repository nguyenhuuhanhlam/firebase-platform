import { Link } from 'react-router-dom'
import { Button } from '../components/Button'

export default function Profile({ user }: { user: string | null }) {
  return (
    <section className="p-6 rounded-xl bg-white shadow-sm">
      <h1 className="text-3xl font-bold mb-3">Profile</h1>
      <p className="mb-4">Current signed-in user: {user ?? 'not signed in'}</p>
      <Link to="/">
        <Button variant="secondary">Go back to Home</Button>
      </Link>
    </section>
  )
}
