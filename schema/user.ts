import z from 'zod'
import '@/schema/customErrorMap'

export const createUserSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email().nonempty()
})

export type CreateUser = z.TypeOf<typeof createUserSchema>
