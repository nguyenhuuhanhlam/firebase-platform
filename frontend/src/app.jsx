import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Profile from './pages/profile'
import NotFound from './pages/not-found'

import { auth } from './lib/firebase'

export default function App() {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (u) => {
			setUser(u?.email ?? null)
			setLoading(false)
		})
		return () => unsubscribe()
	}, [])

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<BrowserRouter
			future={{
				v7_startTransition: true,
				v7_relativeSplatPath: true,
			}}
		>
			<Routes>
				<Route path="/" element={<Home user={user} />} />
				<Route path="/profile" element={<Profile user={user} />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
