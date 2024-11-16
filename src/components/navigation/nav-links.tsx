'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Spinner from '@/components/ui/spinner'
import { routes } from '@/shared/config/routes.config'
import { useAuth } from '@/shared/hooks/use-auth'
import { cn } from '@/shared/utils'

const NavLinks = () => {
  const pathname = usePathname()
  const { isLoading, role } = useAuth()

  if (isLoading) return <Spinner />

  const isAdmin = role === 'admin'

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
            Home
          </Link>
          <Link
            href={routes.quiz}
            className={cn(
              'font-semibold',
              isActive(routes.quiz) && 'text-primary-400'
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
          <Link
            href={routes.submissions}
            className={cn(
              'font-semibold',
              isActive(routes.submissions) && 'text-primary-400'
            )}>
            Submissions
          </Link>
        </>
      ) : (
        <>
          <Link
            href={routes.home}
            className={cn(
              'font-semibold',
              isActive(routes.home) && 'text-primary-400'
            )}>
            Home
          </Link>
          <Link
            href={routes.quiz}
            className={cn(
              'font-semibold',
              isActive(routes.quiz) && 'text-primary-400'
            )}>
            Quiz
          </Link>
        </>
      )}
    </div>
  )
}

export default NavLinks
