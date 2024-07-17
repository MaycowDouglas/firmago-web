'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { schema, SchemaProps } from './schema'

export default function LoginForm() {
  const router = useRouter()
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
      const { username, password } = data

      const result = await signIn('credentials', {
        username,
        password,
        redirect: false,
      })

      if (result?.error) {
        alert('Não autorizado!')
        return
      }

      router.push('/')
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
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <input type="password" placeholder="password" {...field} />
        )}
      />
      <button>{isPending ? 'Enviando...' : 'Enviar'}</button>
    </form>
  )
}
