'use client'
import { useEffect, useMemo, useState } from 'react'

import Loader from '@/components/common/loader'
import QuizForm from '@/components/quiz/quiz-form'
import { getActiveQuestions } from '@/services/quiz.service'
import { useAuth } from '@/shared/hooks/use-auth'
import { useAnswerStore } from '@/store/answer-store'
import { AnswerHistory } from '@/types/quiz.types'

const Quiz = () => {
  const { participants, getUserAnswersByUserId } = useAnswerStore()
  const { isLoading, userId } = useAuth()

  const [userAnswers, setUserAnswers] = useState<AnswerHistory[]>([])

  const isAlreadySubmitted = useMemo(
    () => participants.some((p) => p.id === userId),
    [participants, userId]
  )

  const hasNoQuestions = getActiveQuestions().length === 0

  useEffect(() => {
    if (isAlreadySubmitted) {
      setUserAnswers(getUserAnswersByUserId(userId))
    }
  }, [isAlreadySubmitted, userId])

  if (isLoading) return <Loader />

  if (hasNoQuestions) {
    return (
      <div className='flex h-[70vh] items-center justify-center'>
        <h1 className='h2 font-normal'>No questions found</h1>
      </div>
    )
  }

  return (
    <div className='pb-10'>
      <h1 className='page-title mb-8'>
        {isAlreadySubmitted ? 'Edit Your Response' : 'Submit A Response'}
      </h1>
      <QuizForm
        initialData={userAnswers.length > 0 ? userAnswers : undefined}
      />
    </div>
  )
}

export default Quiz
