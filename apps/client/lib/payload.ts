import { getPayload } from 'payload'
import config from '@payload-config'
import { Payload } from 'payload/types'

let cachedPayload: Payload | null = null

export async function getPayloadClient(): Promise<Payload> {
  if (cachedPayload) {
    return cachedPayload
  }

  cachedPayload = await getPayload({ config })
  return cachedPayload
}

// Server-side helper for authenticated requests
export async function getServerPayload(): Promise<Payload> {
  return getPayloadClient()
}

// Client-side helper for public content fetching
export async function fetchHomepage(locale: string = 'en') {
  const payload = await getPayloadClient()
  const homepage = await payload.find({
    collection: 'homepage',
    locale,
    limit: 1,
  })
  return homepage.docs[0] || null
}

export async function fetchPrograms(locale: string = 'en') {
  const payload = await getPayloadClient()
  const programs = await payload.find({
    collection: 'programs',
    locale,
    sort: 'duration',
  })
  return programs.docs || []
}

export async function fetchCoach(locale: string = 'en') {
  const payload = await getPayloadClient()
  const coach = await payload.find({
    collection: 'coach',
    locale,
    limit: 1,
  })
  return coach.docs[0] || null
}
