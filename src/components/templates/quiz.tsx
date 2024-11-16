'use client'
import { useSession } from 'next-auth/react'
import { useEffect, useMemo, useState } from 'react'

import QuizForm from '@/components/quiz/quiz-form'
import Spinner from '@/components/ui/spinner'
import { useAnswerStore } from '@/store/answer-store'
import { AnswerHistory } from '@/types/quiz.types'

const Quiz = () => {
  const { participantIds, getUserAnswersByUserId } = useAnswerStore()
  const { data: session, status } = useSession()

  const [userAnswers, setUserAnswers] = useState<AnswerHistory[]>([])

  const isAlreadySubmitted = useMemo(
    () => participantIds.includes(session?.user.id as string),
    [participantIds, session?.user.id]
  )

  useEffect(() => {
    if (isAlreadySubmitted) {
      setUserAnswers(getUserAnswersByUserId(session?.user.id as string))
    }
  }, [isAlreadySubmitted, status])

  if (status === 'loading')
    return (
      <div className='flex h-[80vh] items-center justify-center'>
        <Spinner />
      </div>
    )

  return (
    <div className='pb-10 md:pb-20'>
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
