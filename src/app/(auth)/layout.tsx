import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { Navbar } from '@/components/navigation'
import { authOptions } from '@/services/auth.service'
import { routes } from '@/shared/config/routes.config'

type Props = {
  children: React.ReactNode
}

const AuthLayout = async ({ children }: Props) => {
  const session = await getServerSession(authOptions)
  if (!session || !session.user.id) {
    return redirect(routes.login)
  }

  return (
    <div className='flex min-h-screen flex-col justify-between pt-[3.75rem] md:pt-0'>
      <Navbar />
      <main className='mx-auto w-full max-w-7xl grow px-4 pt-4 md:px-6 lg:pt-0'>
        {children}
      </main>
    </div>
  )
}

export default AuthLayout
