import { getPayload } from 'payload'
import config from '@payload-config'

export default async function AdminPage() {
  try {
    const payload = await getPayload({ config })
    
    // Payload v2 admin UI is served through the API
    // Return a page that loads the admin UI
    return (
      <html>
        <head>
          <title>Payload Admin - MINDSHIFT ARABIA</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          <div id="root" style={{ width: '100%', height: '100vh' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <h1>Payload CMS Admin</h1>
              <p>Admin UI is loading...</p>
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
                Go to Login
              </a>
            </div>
          </div>
        </body>
      </html>
    )
  } catch (error) {
    return (
      <html>
        <head>
          <title>Error - Payload Admin</title>
        </head>
        <body>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column',
            gap: '20px',
            padding: '20px'
          }}>
            <h1>Error Loading Payload Admin</h1>
            <p style={{ color: 'red' }}>
              {error instanceof Error ? error.message : 'Unknown error'}
            </p>
            <p>Check:</p>
            <ul style={{ textAlign: 'left' }}>
              <li>MongoDB connection in .env.local</li>
              <li>PAYLOAD_SECRET is set</li>
              <li>MongoDB Atlas IP is whitelisted</li>
            </ul>
            <a 
              href="/"
              style={{
                padding: '10px 20px',
                background: '#0070f3',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px'
              }}
            >
              Go to Homepage
            </a>
          </div>
        </body>
      </html>
    )
  }
}
