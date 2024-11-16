import { useSession } from 'next-auth/react'

import { Role } from '@/types'

export const useAuth = () => {
  const { data: session, status } = useSession()
  const userId = session?.user?.id as string
  const userName = session?.user?.name as string
  const isLoading = status === 'loading'
  const role = session?.user?.role as Role
  return { userId, userName, role, isLoading }
}
