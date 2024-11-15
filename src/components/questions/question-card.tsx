import DeleteQuestionAction from '@/components/questions/delete-question-action'
import EditQuestionAction from '@/components/questions/edit-question-action'
import { Question } from '@/types/quiz.types'

type Props = {
  question: Question
}

const QuestionCard = ({ question }: Props) => {
  const {
    id,
    title,
    options,
    correctAnswer,
    createdBy: { name: author },
  } = question

  return (
    <li className='list-none rounded-2xl border bg-neutral-0 p-4 shadow-sm dark:bg-surface-100/70 md:p-6'>
      <h2 className='h5 mb-4 md:font-medium'>{title}</h2>
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
      {correctAnswer && (
        <p className='mt-4 text-sm font-bold'>
          Expected Answer: {correctAnswer}
        </p>
      )}
      <div className='mt-4 flex items-center justify-end gap-4'>
        <EditQuestionAction question={question} />
        <DeleteQuestionAction questionId={id} />
      </div>
    </li>
  )
}

export default QuestionCard
