'use client'
import { useSession } from 'next-auth/react'
import { useEffect, useMemo, useState } from 'react'

import Loader from '@/components/common/loader'
import QuizForm from '@/components/quiz/quiz-form'
import { useAnswerStore } from '@/store/answer-store'
import { AnswerHistory } from '@/types/quiz.types'

const Quiz = () => {
  const { participants, getUserAnswersByUserId } = useAnswerStore()
  const { data: session, status } = useSession()

  const [userAnswers, setUserAnswers] = useState<AnswerHistory[]>([])

  const isAlreadySubmitted = useMemo(
    () => participants.some((p) => p.id === session?.user.id),
    [participants, session?.user.id]
  )

  useEffect(() => {
    if (isAlreadySubmitted) {
      setUserAnswers(getUserAnswersByUserId(session?.user.id as string))
    }
  }, [isAlreadySubmitted, status])

  if (status === 'loading') return <Loader />

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
