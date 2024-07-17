import { z } from 'zod'

export const schema = z.object({
  username: z.string().trim().email().min(1, { message: 'Campo obligatorio.' }),
  password: z
    .string()
    .min(1, { message: 'Campo obligatorio.' })
    .refine((value) => value.length >= 8, {
      message: 'La contraseña debe tener 8 caracteres.',
    }),
})

export type SchemaProps = z.infer<typeof schema>
