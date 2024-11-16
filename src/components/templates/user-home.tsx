'use client'

import Link from 'next/link'
import { useMemo } from 'react'

import { AppIcon } from '@/components/icons'
import QuizSubmission from '@/components/quiz/quiz-submission'
import Button from '@/components/ui/button'
import Spinner from '@/components/ui/spinner'
import { routes } from '@/shared/config/routes.config'
import { useAuth } from '@/shared/hooks/use-auth'
import { useAnswerStore } from '@/store/answer-store'

const UserHome = () => {
  const { userId, isLoading } = useAuth()

  const { getUserAnswersByUserId } = useAnswerStore()
  const userAnswers = useMemo(() => getUserAnswersByUserId(userId), [userId])

  const isSubmitted = userAnswers.length > 0

  if (isLoading)
    return (
      <div className='flex h-[80vh] items-center justify-center'>
        <Spinner />
      </div>
    )

  return (
    <div className='pb-10 md:pb-20'>
      <div className='mb-6 flex flex-wrap items-center justify-between gap-4 max-sm:flex-col'>
        <h1 className='h4 text-center md:text-start'>
          {isSubmitted
            ? 'Your latest answers'
            : 'You do not have any submission yet'}
        </h1>
        <Link href={routes.quiz}>
          <Button>{isSubmitted ? 'Edit answers' : 'Submit a response'}</Button>
        </Link>
      </div>
      <QuizSubmission userAnswers={userAnswers} role='user' />
      <div className='flex h-screen items-center justify-center gap-2'>
        <AppIcon className='h-[300px] w-[300px] text-primary-600' />
        <h1
          translate='no'
          className='hidden text-[250px] max-md:text-5xl md:block'>
          quiz
        </h1>
      </div>
    </div>
  )
}

export default UserHome
