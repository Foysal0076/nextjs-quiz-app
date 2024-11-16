'use client'
import { useEffect, useMemo, useState } from 'react'

import Loader from '@/components/common/loader'
import QuizForm from '@/components/quiz/quiz-form'
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

  useEffect(() => {
    if (isAlreadySubmitted) {
      setUserAnswers(getUserAnswersByUserId(userId))
    }
  }, [isAlreadySubmitted, userId])

  if (isLoading) return <Loader />

  return (
    <div className='pb-10'>
      <h1 className='h2 mb-8'>
        {isAlreadySubmitted ? 'Edit Your Response' : 'Submit A Response'}
      </h1>
      <QuizForm
        initialData={userAnswers.length > 0 ? userAnswers : undefined}
      />
    </div>
  )
}

export default Quiz
