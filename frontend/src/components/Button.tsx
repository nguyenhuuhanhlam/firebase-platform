import React from 'react'

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button style={{ padding: '0.5rem 1rem', borderRadius: 8, background: '#6366f1', color: 'white', border: 'none', cursor: 'pointer' }}>
      {children}
    </button>
  )
}
