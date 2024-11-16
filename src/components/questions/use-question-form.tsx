import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'
import { useFieldArray } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { useModal } from '@/components/common/modal/use-modal'
import { generateID } from '@/shared/utils/generateID'
import { QuestionSchema } from '@/shared/validators/question.schema'
import { QuestionSchemaType } from '@/shared/validators/question.schema'
import { useQuestionStore } from '@/store/question-store'
import { Question } from '@/types/quiz.types'

export const useQuestionForm = (initialData?: Question) => {
  const { closeModal } = useModal()
  const { addNewQuestion, editQuestion } = useQuestionStore()
  const { data: session } = useSession()

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<QuestionSchemaType>({
    resolver: zodResolver(QuestionSchema),
    defaultValues: initialData || {
      title: '',
      correctAnswer: '',
    },
  })
  const onSubmit = (data: QuestionSchemaType) => {
    if (!session?.user) return

    const isEdit = !!initialData

    if (isEdit) {
      const putData: Question = {
        ...initialData,
        ...data,
      }
      editQuestion(putData)
      toast.success('Question updated successfully')
    } else {
      const postData: Question = {
        id: generateID(),
        title: data.title,
        options: data?.options || [],
        correctAnswer: data.correctAnswer,
        createdAt: new Date(),
        createdBy: {
          id: session.user.id as string,
          name: session.user.name as string,
        },
      }
      addNewQuestion(postData)
      toast.success('Question added successfully')
    }
    closeModal()
  }

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: 'options',
  })

  const handleAddOption = () => {
    //allow at most 4 options
    if (fields.length >= 4) return
    append({ id: generateID(), title: '' })
  }

  const handleRemoveOption = (index: number) => {
    remove(index)
  }

  return {
    register,
    handleSubmit,
    errors,
    fields,
    onSubmit,
    handleAddOption,
    handleRemoveOption,
  }
}
