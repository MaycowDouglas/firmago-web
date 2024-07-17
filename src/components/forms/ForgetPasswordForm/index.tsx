'use client'

import { useTransition } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { schema, SchemaProps } from './schema'

export default function ForgetPasswordForm() {
  const [isPending, startTransition] = useTransition()

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SchemaProps>({
    resolver: zodResolver(schema),
  })

  const send = async (data: SchemaProps) => {
    startTransition(async () => {
      const { username } = data

      const result = await fetch('/api/auth/forget-password', {
        method: 'POST',
        body: JSON.stringify({
          username,
        }),
      })

      if (!result.ok) {
        alert('Houve um erro ao enviar o email.')
        return
      }

      alert('Email enviado!')
    })
  }

  console.log(errors)

  return (
    <form onSubmit={handleSubmit(send)}>
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <input type="email" placeholder="username" {...field} />
        )}
      />
      <button>{isPending ? 'Enviando...' : 'Enviar'}</button>
    </form>
  )
}
