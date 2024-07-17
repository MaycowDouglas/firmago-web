import React from 'react'

import { env } from '@/config/env'

export default function HomePage() {
  return <div>{env.NEXT_PUBLIC_API_URL}</div>
}
