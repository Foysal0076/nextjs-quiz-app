import { useSession } from 'next-auth/react'

import { Role } from '@/types'

export const useAuth = () => {
  const { data: session, status } = useSession()
  const userId = session?.user?.id as string
  const isLoading = status === 'loading'
  const role = session?.user?.role as Role
  return { userId, role, isLoading }
}
