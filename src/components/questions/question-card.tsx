import DeleteQuestion from '@/components/questions/delete-question'
import Button from '@/components/ui/button'
import { Question } from '@/types/quiz.types'

type Props = {
  question: Question
}

const QuestionCard = ({ question }: Props) => {
  const {
    id,
    title,
    options,
    createdBy: { name: author },
  } = question

  return (
    <li className='list-none rounded-2xl border bg-neutral-0 p-4 shadow-sm dark:bg-surface-100/70 md:p-6'>
      <h2 className='h5 font-semibold'>{title}</h2>
      {options && options.length > 0 ? (
        <>
          <p className='mt-2 text-sm font-bold md:text-base'>Options</p>
          <ol className='mt-1 flex list-outside list-disc flex-col gap-1 pl-4'>
            {options.map((option) => (
              <li key={option.id} className='text-sm'>
                {option.title}
              </li>
            ))}
          </ol>
        </>
      ) : null}
      <div className='mt-4 flex items-center justify-end gap-4'>
        <Button variant='secondary' size='sm' className='max-sm:w-full'>
          Edit
        </Button>
        <DeleteQuestion questionId={id} />
      </div>
    </li>
  )
}

export default QuestionCard
