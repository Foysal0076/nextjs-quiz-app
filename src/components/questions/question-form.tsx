'use client'

import { useModal } from '@/components/common/modal/use-modal'
import { useQuestionForm } from '@/components/questions/use-question-form'
import Button from '@/components/ui/button'
import { Input } from '@/components/ui/Input'
import { Question } from '@/types/quiz.types'

type Props = {
  initialData?: Question
}

const QuestionForm = ({ initialData }: Props) => {
  const { closeModal } = useModal()

  const {
    register,
    handleSubmit,
    errors,
    fields,
    onSubmit,
    handleAddOption,
    handleRemoveOption,
  } = useQuestionForm(initialData)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6' noValidate>
      <div className='space-y-2'>
        <Input
          required
          label='Question Title'
          {...register('title')}
          id='title'
        />
        {errors.title && (
          <p className='text-sm text-red-500'>{errors.title.message}</p>
        )}
      </div>

      <div className='space-y-4'>
        <div className='flex items-center justify-between'>
          <label className='block text-sm font-semibold'>Options</label>
          <Button
            type='button'
            onClick={handleAddOption}
            size='sm'
            className='px-2'>
            Add
          </Button>
        </div>

        {fields.map((field, index) => (
          <div key={field.id} className='flex items-center gap-2'>
            <div className='flex-1'>
              <Input
                className='h-8'
                label={`Option ${index + 1}`}
                required
                {...register(`options.${index}.title`)}
                placeholder={`Option ${index + 1}`}
              />
              {errors.options?.[index]?.title && (
                <p className='mt-1 text-sm text-red-500'>
                  {errors.options[index]?.title?.message}
                </p>
              )}
            </div>
            <Button
              className='mt-auto'
              type='button'
              size='sm'
              variant='danger'
              onClick={() => handleRemoveOption(index)}>
              Remove
            </Button>
          </div>
        ))}
        {errors.options && (
          <p className='text-sm text-red-500'>
            {errors.options.message ?? errors.options?.root?.message}
          </p>
        )}
      </div>

      <div className='space-y-2'>
        <Input
          label='Correct Answer'
          {...register('correctAnswer')}
          id='correctAnswer'
        />
        {errors.correctAnswer && (
          <p className='text-sm text-red-500'>{errors.correctAnswer.message}</p>
        )}
      </div>
      <div className='flex justify-end gap-2'>
        <Button
          type='button'
          variant='secondary'
          onClick={closeModal}
          size='sm'>
          Cancel
        </Button>
        <Button type='submit' size='sm'>
          Save Question
        </Button>
      </div>
    </form>
  )
}

export default QuestionForm
