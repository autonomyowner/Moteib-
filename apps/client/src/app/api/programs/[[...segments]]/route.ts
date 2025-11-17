import { getPayload } from 'payload'
import config from '@payload-config'
import { REST_DELETE, REST_GET, REST_PATCH, REST_POST } from 'payload/routes'

export async function GET(request: Request) {
  const payload = await getPayload({ config })
  return REST_GET(request, { payload })
}

export async function POST(request: Request) {
  const payload = await getPayload({ config })
  return REST_POST(request, { payload })
}

export async function DELETE(request: Request) {
  const payload = await getPayload({ config })
  return REST_DELETE(request, { payload })
}

export async function PATCH(request: Request) {
  const payload = await getPayload({ config })
  return REST_PATCH(request, { payload })
}
