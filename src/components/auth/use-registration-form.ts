import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { createUser } from '@/services/user.service'
import { routes } from '@/shared/config/routes.config'
import {
  RegistrationFormSchema,
  registrationFormSchema,
} from '@/shared/validators/auth.schema'

export const useRegistrationForm = () => {
  const [loading, setLoading] = useState(false)

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<RegistrationFormSchema>({
    resolver: zodResolver(registrationFormSchema),
    mode: 'all',
  })

  const onsubmit = async (data: RegistrationFormSchema) => {
    try {
      setLoading(true)

      const user = await createUser({ ...data, role: 'user' })

      if (user) {
        toast.success('User created successfully')
        reset()
        await signIn('credentials', {
          ...user,
          callbackUrl: routes.home,
        })
      } else {
        toast.error('Failed to create user')
      }
    } catch (error: any) {
      toast.error(error?.message ?? 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return {
    onsubmit,
    handleSubmit,
    register,
    loading,
    errors,
  }
}
