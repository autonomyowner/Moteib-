import { getPayload } from 'payload'
import config from '@payload-config'
import { REST_DELETE, REST_GET, REST_PATCH, REST_POST } from 'payload/routes'

const handler = async (req: Request) => {
  const payload = await getPayload({ config })

  if (req.method === 'GET') {
    return REST_GET(req, { payload })
  }
  if (req.method === 'POST') {
    return REST_POST(req, { payload })
  }
  if (req.method === 'DELETE') {
    return REST_DELETE(req, { payload })
  }
  if (req.method === 'PATCH') {
    return REST_PATCH(req, { payload })
  }

  return new Response('Method not allowed', { status: 405 })
}

export { handler as GET, handler as POST, handler as DELETE, handler as PATCH }
