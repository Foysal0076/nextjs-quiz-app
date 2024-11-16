'use client'

import Loader from '@/components/common/loader'
import QuestionList from '@/components/questions/question-list'
import QuestionListHeader from '@/components/questions/question-list-header'
import { useAuth } from '@/shared/hooks/use-auth'

const Questions = () => {
  const { isLoading } = useAuth()

  if (isLoading) return <Loader />

  return (
    <div className='flex flex-col gap-2 pb-10 md:gap-6 md:pb-20'>
      <QuestionListHeader />
      <QuestionList />
    </div>
  )
}

export default Questions
