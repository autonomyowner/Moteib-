import { fetchPrograms } from '../../../lib/payload'
import ProgramsClient from '../../components/ProgramsClient'

export default async function ProgramsPage() {
  const programsData = await fetchPrograms('en')
  
  return <ProgramsClient programsData={programsData} />
}
