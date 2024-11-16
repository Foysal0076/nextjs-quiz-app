import Link from 'next/link'

import AddQuestionAction from '@/components/questions/add-question-action'
import Button from '@/components/ui/button'
import { routes } from '@/shared/config/routes.config'

const QuestionListHeader = () => {
  return (
    <div className='sticky top-[3.75rem] z-10 flex flex-col items-center justify-between gap-4 bg-neutral-10 px-1 py-2 dark:bg-surface-50 max-sm:py-4 md:top-[4.5rem] md:flex-row'>
      <h1 className='h2'>Questions</h1>
      <div className='flex flex-col gap-4 md:flex-row'>
        <Link href={routes.submissions}>
          <Button className='px-2 max-sm:w-full' variant='secondary'>
            View Submissions
          </Button>
        </Link>
        <AddQuestionAction />
      </div>
    </div>
  )
}

export default QuestionListHeader
