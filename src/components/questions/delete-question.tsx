import Swal from 'sweetalert2'

import Button from '@/components/ui/button'
import { useQuestionList } from '@/context/question-context'

type Props = {
  questionId: string
}

const DeleteQuestion = ({ questionId }: Props) => {
  const { removeQuestion } = useQuestionList()

  const handleDelete = async () => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this question!',
        icon: 'warning',
        buttonsStyling: false,
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        customClass: {
          popup:
            'bg-neutral-0 dark:bg-surface-100 border dark:text-neutral-900',
          confirmButton:
            'px-4 py-1 rounded-lg transition-all duration-200 text-nowrap focus:outline-none font-medium bg-red-500 hover:bg-red-600 text-neutral-0 focus:ring-4 focus:ring-red-100 disabled:active:transform-none active:scale-[.95] disabled:text-neutral-200 disabled:bg-neutral-50 disabled:cursor-not-allowed text-neutral-0 dark:text-neutral-900 mr-4',
          cancelButton:
            'px-4 py-1 rounded-lg transition-all duration-200 text-nowrap focus:outline-none font-medium bg-none text-neutral-900 hover:bg-primary-50 focus:ring-primary-100 border-2 border-primary-500 text-primary-500 focus:ring-4 focus:ring-primary-100 disabled:active:transform-none active:scale-[.95] disabled:cursor-not-allowed disabled:text-neutral-200 disabled:border-neutral-50 disabled:hover:bg-neutral-0 dark:text-primary-200 dark:border-primary-200 dark:hover:bg-surface-200 dark:disabled:border-neutral-200 dark:disabled:text-neutral-200',
        },
      }).then(async (result) => {
        if (result.isConfirmed) {
          removeQuestion(questionId)
        } else if (result.isDismissed) {
          Swal.fire({
            title: 'Cancelled',
            text: 'Your question is safe!',
            icon: 'error',
            buttonsStyling: false,
            customClass: {
              popup:
                'bg-neutral-0 dark:bg-surface-100 border dark:text-neutral-900',
              confirmButton:
                'px-4 py-1 rounded-lg transition-all duration-200 text-nowrap focus:outline-none font-medium bg-primary-500 hover:bg-primary-600 text-neutral-0 focus:ring-4 focus:ring-primary-100 disabled:active:transform-none active:scale-[.95] disabled:text-neutral-200 disabled:bg-neutral-50 disabled:cursor-not-allowed text-neutral-0 dark:text-neutral-900 mr-4',
            },
          })
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Button
      variant='danger'
      size='sm'
      className='max-sm:w-full'
      onClick={handleDelete}>
      Delete
    </Button>
  )
}

export default DeleteQuestion
