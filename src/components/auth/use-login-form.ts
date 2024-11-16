import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { getUserByEmail } from '@/services/user.service'
import { routes } from '@/shared/config/routes.config'
import { loginFormSchema } from '@/shared/validators/auth.schema'

type FormValueTypes = {
  email: string
  password: string
}

export const useLoginForm = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValueTypes>({
    resolver: zodResolver(loginFormSchema),
    mode: 'all',
    defaultValues: {
      email: 'admin@test.com',
      password: 'admin',
    },
  })

  const onsubmit = async (data: FormValueTypes) => {
    try {
      setLoading(true)

      const user = getUserByEmail(data.email)

      if (!user || user.password !== data.password) {
        throw new Error('Invalid credentials')
      }

      const res = await signIn('credentials', {
        ...user,
        redirect: false,
      })
      if (res?.status === 200) {
        const isAdmin = user.role === 'admin'
        router.push(isAdmin ? routes.questions : routes.home)
      } else if (res?.status === 401) {
        throw new Error('Invalid credentials')
      } else {
        throw new Error(res?.error || 'Something went wrong')
      }
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { handleSubmit, onsubmit, errors, register, loading }
}
