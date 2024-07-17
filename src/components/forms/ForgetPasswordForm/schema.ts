import { z } from 'zod'

export const schema = z.object({
  username: z.string().trim().email().min(1, { message: 'Campo obligatorio.' }),
})

export type SchemaProps = z.infer<typeof schema>
