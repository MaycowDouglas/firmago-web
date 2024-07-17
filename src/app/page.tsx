import { env } from '@/config/env'
import React from 'react'

type Props = {}

export default function HomePage({}: Props) {
  return (
    <div>{env.NEXT_PUBLIC_API_URL}</div>
  )
}