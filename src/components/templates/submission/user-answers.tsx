'use client'

import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import Loader from '@/components/common/loader'
import QuizSubmission from '@/components/quiz/quiz-submission'
import { useAuth } from '@/shared/hooks/use-auth'
import { useAnswerStore } from '@/store/answer-store'

const UserAnswers = () => {
  const params = useParams()
  const userId = params.userId as string
  const { userId: loggedInUserId, role, isLoading } = useAuth()

  const isAdmin = role === 'admin'
  const isOwner = loggedInUserId === userId

  const { getUserAnswersByUserId } = useAnswerStore()
  const userAnswers = useMemo(
    () => getUserAnswersByUserId(userId, true),
    [userId]
  )

  const userName = userAnswers[0].answers[0].user.name
  if (isLoading) return <Loader />

  if (!isAdmin && !isOwner) {
    return (
      <div className='flex h-[70vh] items-center justify-center'>
        <h1 className='h2 font-normal'>
          You are not authorized to view this content
        </h1>
      </div>
    )
  }

  return (
    <div className='pb-10 md:pb-20'>
      <div className='mb-6 flex flex-wrap items-center justify-between gap-4 max-sm:flex-col'>
        <h1 className='h4 text-center md:text-start'>
          Answers submitted by{' '}
          <span className='text-primary-500'>{userName}</span>
        </h1>
      </div>
      <QuizSubmission role={role} userAnswers={userAnswers} />
    </div>
  )
}

export default UserAnswers
