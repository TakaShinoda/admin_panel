import z from 'zod'

export const createUserSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email().nonempty()
})

export type CreateUser = z.TypeOf<typeof createUserSchema>
