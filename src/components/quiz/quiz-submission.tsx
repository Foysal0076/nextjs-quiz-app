'use client'

import SubmissionItem from '@/components/quiz/submission-item'
import { AnswerHistory } from '@/types/quiz.types'

type Props = {
  userAnswers: AnswerHistory[]
}

const QuizSubmission = ({ userAnswers }: Props) => {
  return (
    <ul className='space-y-4'>
      {userAnswers.map((answer, index) => (
        <SubmissionItem
          key={index}
          // We are showing only the latest answer for each question
          question={answer.answers[0].question.title}
          answer={answer.answers[0].answer}
        />
      ))}
    </ul>
  )
}

export default QuizSubmission
