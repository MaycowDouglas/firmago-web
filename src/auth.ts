import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { z } from 'zod'

import { env } from './config/env'

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { type: 'text' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        const { success } = z
          .object({
            username: z.string(),
            password: z.string(),
          })
          .safeParse(credentials)

        if (!success || !credentials) return null

        const result = await fetch(
          `${env.NEXT_PUBLIC_API_URL}/api/auth/login`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: credentials.username,
              password: credentials.password,
            }),
          },
        )

        if (!result.ok) return null

        const data: {
          id: number
          role: string
          username: string
          accessToken: string
        } = await result.json()

        return { ...data, id: String(data.id) }
      },
    }),
  ],
  pages: {
    signIn: '/iniciar-sesion',
  },
  callbacks: {
    // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
    async jwt({ token, user }) {
      if (user) token.id = user.id
      if (user) token.role = user.role
      if (user) token.username = user.username
      if (user) token.accessToken = user.accessToken
      return token
    },
    // If you want to use the role in client components
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id
        session.user.role = token.role
        session.user.username = token.username
        session.user.accessToken = token.accessToken
      }
      return session
    },
  },
}

export default authOptions
