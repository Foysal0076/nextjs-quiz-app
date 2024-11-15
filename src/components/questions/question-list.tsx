'use client'

import QuestionCard from '@/components/questions/question-card'
import { useQuestionStore } from '@/store/question-store'

const QuestionList = () => {
  const { questions } = useQuestionStore()

  return (
    <ul className='flex flex-col gap-4'>
      {questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </ul>
  )
}

export default QuestionList
