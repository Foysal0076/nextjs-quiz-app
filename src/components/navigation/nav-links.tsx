'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'

import Spinner from '@/components/ui/spinner'
import { routes } from '@/shared/config/routes.config'
import { cn } from '@/shared/utils'

const NavLinks = () => {
  const pathname = usePathname()
  const { data: session, status } = useSession()
  const isLoading = status === 'loading'
  if (isLoading) return <Spinner />

  const isAdmin = session?.user?.role === 'admin'

  const isActive = (path: string) => pathname === path
  return (
    <div className='flex items-center gap-4'>
      {isAdmin ? (
        <>
          <Link
            href={routes.home}
            className={cn(
              'font-semibold',
              isActive(routes.home) && 'text-primary-400'
            )}>
            Quiz
          </Link>
          <Link
            href={routes.questions}
            className={cn(
              'font-semibold',
              isActive(routes.questions) && 'text-primary-400'
            )}>
            Questions
          </Link>
        </>
      ) : (
        <>
          <Link href={routes.home}>Home</Link>
        </>
      )}
    </div>
  )
}

export default NavLinks