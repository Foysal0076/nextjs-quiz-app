import AddQuestionAction from '@/components/questions/add-question-action'

const QuestionListHeader = () => {
  return (
    <div className='sticky top-[3.75rem] z-10 flex items-center justify-between bg-neutral-10 px-1 py-6 dark:bg-surface-50 md:top-[4.5rem]'>
      <h1 className='h3'>Questions</h1>
      <AddQuestionAction />
    </div>
  )
}

export default QuestionListHeader
