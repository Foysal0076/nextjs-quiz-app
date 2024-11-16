'use client'

import { useRouter } from 'next/navigation'
import { Controller } from 'react-hook-form'

import { useQuizForm } from '@/components/quiz/use-quiz-form'
import Button from '@/components/ui/button'
import Radio from '@/components/ui/radio-input'
import { Textarea } from '@/components/ui/textarea'
import { AnswerHistory } from '@/types/quiz.types'

type Props = {
  initialData?: AnswerHistory[]
}

const QuizForm = ({ initialData }: Props) => {
  const isEditForm = !!initialData && initialData.length > 0
  const {
    loading,
    questions,
    register,
    handleSubmit,
    errors,
    control,
    isMCQ,
    onSubmit,
  } = useQuizForm(initialData)

  const router = useRouter()

  const handleCancel = () => {
    router.back()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
      {questions.map((question) => (
        <div key={question.id} className='space-y-4 rounded-2xl border p-6'>
          <h3 className='h5'>{question.title}</h3>

          {isMCQ(question) ? (
            <div className='space-y-2'>
              <div className='flex flex-col gap-2' role='radiogroup'>
                {question.options?.map((option) => (
                  <Controller
                    key={`${option.id}-${question.id}`}
                    name={`answers.${question.id}`}
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Radio
                        {...field}
                        checked={field.value === option.title}
                        value={option.title}
                        label={option.title}
                        id={`${option.id}-${question.id}`}
                      />
                    )}
                  />
                ))}
              </div>
              {errors.answers?.[question.id] && (
                <p className='text-sm text-red-500'>
                  {errors.answers[question.id]?.message}
                </p>
              )}
            </div>
          ) : (
            <div className='space-y-2'>
              <Textarea
                {...register(`answers.${question.id}`, {
                  required: 'Please provide an answer',
                })}
                placeholder='Type your answer here...'
                rows={4}
              />
              {errors.answers?.[question.id] && (
                <p className='text-sm text-red-500'>
                  {errors.answers[question.id]?.message}
                </p>
              )}
            </div>
          )}
        </div>
      ))}

      <div className='sticky bottom-0 flex justify-end space-x-2 bg-neutral-10 py-8 dark:bg-surface-50'>
        <Button
          type='button'
          variant='secondary'
          className='max-sm:w-full'
          onClick={handleCancel}>
          Cancel
        </Button>
        <Button type='submit' className='max-sm:w-full' loading={loading}>
          {isEditForm ? 'Update Answers' : 'Submit Quiz'}
        </Button>
      </div>
    </form>
  )
}

export default QuizForm
