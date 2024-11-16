import { useSession } from 'next-auth/react'

export const useAuth = () => {
  const { data: session, status } = useSession()
  const userId = session?.user?.id as string
  const isLoading = status === 'loading'
  return { userId, isLoading }
}
