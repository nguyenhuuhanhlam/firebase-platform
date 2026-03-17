import { useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const firebaseConfig = {
  apiKey: '<YOUR_API_KEY>',
  authDomain: '<YOUR_AUTH_DOMAIN>',
  projectId: '<YOUR_PROJECT_ID>',
  storageBucket: '<YOUR_STORAGE_BUCKET>',
  messagingSenderId: '<YOUR_SENDER_ID>',
  appId: '<YOUR_APP_ID>'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default function App() {
  const [user, setUser] = useState<string | null>(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u?.email ?? null)
    })
    return () => unsub()
  }, [])

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: 32 }}>
      <h1>Firebase Platform Frontend</h1>
      <p>Shadcn-like component style placeholder.</p>
      <p>User: {user ?? 'not signed in'}</p>
    </main>
  )
}
