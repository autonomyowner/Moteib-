'use client'

import { PayloadAdminBar } from 'payload/components'
import config from '@payload-config'

export default function AdminPage() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <PayloadAdminBar config={config} />
    </div>
  )
}
