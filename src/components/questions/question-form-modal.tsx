import ModalContainer from '@/components/common/modal/modal-container'
import { useModal } from '@/components/common/modal/use-modal'
import { PlusIcon } from '@/components/icons'
import QuestionForm from '@/components/questions/question-form'
import { Question } from '@/types/quiz.types'

type Props = {
  initialData?: Question
}

const QuestionFormModal = ({ initialData }: Props) => {
  const isEdit = !!initialData

  const { closeModal } = useModal()
  return (
    <ModalContainer childrenClassName='p-4 md:p-6 md:w-[35rem]'>
      <div className='mb-4 flex justify-between md:mb-6'>
        <h4 className='h4'> {isEdit ? 'Edit Question' : 'Add Question'} </h4>
        <button
          onClick={closeModal}
          aria-label='close modal'
          className='transition-colors duration-200 hover:text-red-500'>
          <PlusIcon className='h-6 w-6 rotate-45 text-inherit' />
        </button>
      </div>
      <QuestionForm initialData={initialData} />
    </ModalContainer>
  )
}

export default QuestionFormModal
