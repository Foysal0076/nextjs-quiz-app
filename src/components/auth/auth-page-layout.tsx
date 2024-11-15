import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { AppIcon } from '@/components/icons'
import { authOptions } from '@/services/auth.service'
import { routes } from '@/shared/config/routes.config'

type Props = {
  children: React.ReactNode
}

const AuthPageLayout = async ({ children }: Props) => {
  const session = await getServerSession(authOptions)

  if (session && session.user?.id) {
    const role = session.user.role
    if (role === 'admin') {
      return redirect(routes.questions)
    }
    return redirect(routes.home)
  }

  return (
    <div className='container flex min-h-screen max-w-7xl flex-col items-center justify-center gap-8'>
      <div className='flex items-center justify-center gap-4'>
        <AppIcon className='h-14 w-14 text-primary-500' />
        <h1 className='h2 max-md:text-5xl'>Quiz</h1>
      </div>
      {children}
    </div>
  )
}

export default AuthPageLayout
