'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const router = useRouter()
  
  useEffect(() => {
    // Payload v2 admin is served through API routes
    // Try to access the admin UI through the API
    window.location.href = '/api/users/login'
  }, [])
  
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <h1>Redirecting to Payload Admin...</h1>
      <p>If you're not redirected, click below:</p>
      <a 
        href="/api/users/login" 
        style={{ 
          padding: '10px 20px', 
          background: '#0070f3', 
          color: 'white', 
          textDecoration: 'none',
          borderRadius: '5px'
        }}
      >
        Go to Admin Login
      </a>
    </div>
  )
}
