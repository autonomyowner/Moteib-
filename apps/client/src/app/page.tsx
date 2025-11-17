import { fetchHomepage } from '../../lib/payload'
import HomepageClient from '../components/HomepageClient'

export default async function LandingPage() {
  const homepageData = await fetchHomepage('en')
  
  return <HomepageClient homepageData={homepageData} />
}
