import { Link } from 'react-router-dom'
import { Button } from '../components/Button'

export default function Home({ user }: { user: string | null }) {
  return (
    <section className="p-6 rounded-xl bg-white shadow-sm">
      <h1 className="text-3xl font-bold mb-3">Home</h1>
      <p className="mb-4">Welcome to the Firebase Platform frontend router demo.</p>
      <p className="mb-4">User: {user ?? 'not signed in'}</p>
      <Link to="/profile">
        <Button>Go to Profile</Button>
      </Link>
    </section>
  )
}
