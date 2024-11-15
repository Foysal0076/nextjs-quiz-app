'use client'

import QuestionList from '@/components/questions/question-list'
import QuestionListHeader from '@/components/questions/question-list-header'
import { QuestionProvider } from '@/context/question-context'

const Questions = () => {
  return (
    <QuestionProvider>
      <div className='flex flex-col gap-6 pb-10 md:pb-20'>
        <QuestionListHeader />
        <QuestionList />
      </div>
    </QuestionProvider>
  )
}

export default Questions
