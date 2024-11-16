'use client'

import SubmissionItem from '@/components/quiz/submission-item'
import { Role } from '@/types'
import { AnswerHistory } from '@/types/quiz.types'

type Props = {
  userAnswers: AnswerHistory[]
  role?: Role
}

const QuizSubmission = ({ userAnswers, role = 'user' }: Props) => {
  return (
    <ul className='space-y-4'>
      {userAnswers.map((answer, index) => (
        <SubmissionItem
          key={index}
          // We are showing only the latest answer for each question
          question={answer.answers[0].question.title}
          answers={answer.answers}
          role={role}
        />
      ))}
    </ul>
  )
}

export default QuizSubmission
