import { PlusIcon } from '@/components/icons'
import Button from '@/components/ui/button'

const QuestionListHeader = () => {
  return (
    <div className='sticky top-[3.75rem] z-10 flex items-center justify-between bg-neutral-10 px-1 py-6 dark:bg-surface-50 md:top-[4.5rem]'>
      <h1 className='h3'>Questions</h1>
      <Button className='px-4 text-base'>
        <div className='flex items-center gap-2'>
          <PlusIcon className='h-4 w-4 text-inherit' />
          <span className='text-inherit'>Add Question</span>
        </div>
      </Button>
    </div>
  )
}

export default QuestionListHeader
