import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/services/auth.service'
import { routes } from '@/shared/config/routes.config'

type Props = {
  children: React.ReactNode
}

const AdminLayout = async ({ children }: Props) => {
  const session = await getServerSession(authOptions)
  if (!session || session.user.role !== 'admin') {
    return redirect(routes.login)
  }

  return <>{children}</>
}

export default AdminLayout
