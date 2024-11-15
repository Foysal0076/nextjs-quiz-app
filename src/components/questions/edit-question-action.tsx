import { useModal } from '@/components/common/modal/use-modal'
import { PencilIcon } from '@/components/icons'
import QuestionFormModal from '@/components/questions/question-form-modal'
import Button from '@/components/ui/button'
import { Question } from '@/types/quiz.types'

type Props = {
  question: Question
}

const EditQuestionAction = ({ question }: Props) => {
  const { openModal } = useModal()
  return (
    <Button
      size='sm'
      variant='secondary'
      className='max-sm:w-full'
      onClick={() =>
        openModal({ view: <QuestionFormModal initialData={question} /> })
      }>
      <div className='flex items-center justify-center gap-2'>
        <PencilIcon className='h-4 w-4 text-inherit' />
        <span className='text-inherit'>Edit</span>
      </div>
    </Button>
  )
}

export default EditQuestionAction
