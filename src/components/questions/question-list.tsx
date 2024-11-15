'use client'

import QuestionCard from '@/components/questions/question-card'
import { useQuestionList } from '@/context/question-context'

const QuestionList = () => {
  const { questions } = useQuestionList()

  return (
    <ul className='flex flex-col gap-4'>
      {questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </ul>
  )
}

export default QuestionList
