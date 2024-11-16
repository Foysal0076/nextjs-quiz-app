import { useModal } from '@/components/common/modal/use-modal'
import { PlusIcon } from '@/components/icons'
import QuestionFormModal from '@/components/questions/question-form-modal'
import Button from '@/components/ui/button'

const AddQuestionAction = () => {
  const { openModal } = useModal()
  return (
    <Button
      className='px-4'
      onClick={() => openModal({ view: <QuestionFormModal /> })}>
      <div className='flex items-center justify-center gap-2'>
        <PlusIcon className='h-4 w-4 text-inherit' />
        <span className='text-inherit'>Add Question</span>
      </div>
    </Button>
  )
}

export default AddQuestionAction
