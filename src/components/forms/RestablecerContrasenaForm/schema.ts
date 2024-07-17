import { z } from 'zod'

export const schema = z
  .object({
    password: z.string().trim().min(1, { message: 'Campo obligatorio.' }),
    password2: z.string().trim().min(1, { message: 'Campo obligatorio.' }),
  })
  .refine((data) => data.password === data.password2, {
    message: 'Las contraseñas deben ser iguales.',
    path: ['password2'], // Mostra o erro no campo 'password2'
  })

export type SchemaProps = z.infer<typeof schema>
