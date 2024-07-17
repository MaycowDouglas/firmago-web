'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { schema, SchemaProps } from './schema'

type Props = {
  token: string
}

export default function RestablecerContrasenaForm({ token }: Props) {
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
      const { password } = data

      const result = await fetch('/api/auth/reset-password', {
        method: 'POST',
        body: JSON.stringify({
          token,
          password,
        }),
      })

      if (!result.ok) {
        alert('Houve um erro ao mudar a senha.')
        return
      }

      alert('Senha alterada!')
      router.push('/iniciar-sesion')
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(send)}>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <input type="password" placeholder="password" {...field} />
          )}
        />
        <Controller
          name="password2"
          control={control}
          render={({ field }) => (
            <input type="password" placeholder="password" {...field} />
          )}
        />
        <button>{isPending ? 'Enviando...' : 'Enviar'}</button>
      </form>
      {JSON.stringify(errors)}
    </div>
  )
}
