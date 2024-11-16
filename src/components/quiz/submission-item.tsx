import { Role } from '@/types'
import { UserAnswer } from '@/types/quiz.types'

type Props = {
  question: string
  answers: UserAnswer[]
  role: Role
}

const SubmissionItem = ({ question, answers, role }: Props) => {
  return (
    <li className='rounded-2xl border p-4 shadow-sm'>
      <h2 className='font-Inter font-medium text-neutral-600 md:text-lg'>
        Question: {question}
      </h2>
      <p className='mt-2'>
        Answer:{' '}
        <span className='text-primary-400 dark:text-primary-300'>
          {answers[0].answer}
        </span>
      </p>
      {role === 'admin' && answers.length > 1 ? (
        <div className='mt-4'>
          <p className='text-sm font-medium'>Previous answers</p>
          <ul className='space-y-2'>
            {answers.slice(1).map((answer, index) => (
              <li className='text-sm text-neutral-500' key={index}>
                {answer.answer}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </li>
  )
}

export default SubmissionItem
