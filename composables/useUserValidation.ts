import { createUserSchema, CreateUser } from '@/schema/user'
import { typeToFlattenedError, ZodError, ZodType } from 'zod'

export const useUserValidation = () => {
  const errorMessages = ref<typeToFlattenedError<ZodType>["fieldErrors"] | null>(null)
  const validate = (data: CreateUser) => {
    try {
      createUserSchema.parse(data)
    } catch(e) {
      if(e instanceof ZodError) {
        errorMessages.value = e.flatten().fieldErrors
      }
    }
  }

  return {
    errorMessages,
    validate
  }
}