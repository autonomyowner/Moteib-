import { fetchCoach } from '../../../lib/payload'
import CoachClient from '../../components/CoachClient'

export default async function CoachPage() {
  const coachData = await fetchCoach('en')
  
  return <CoachClient coachData={coachData} />
}
