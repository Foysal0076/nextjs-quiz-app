import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { routes } from '@/shared/config/routes.config'
import { generateID } from '@/shared/utils/generateID'
import { useAnswerStore } from '@/store/answer-store'
import { useQuestionStore } from '@/store/question-store'
import { Question, UserAnswer } from '@/types/quiz.types'
import { AnswerHistory } from '@/types/quiz.types'

type FormValues = {
  answers: Record<string, string> // questionId: answer
}
export const useQuizForm = (initialData?: AnswerHistory[]) => {
  const isEditForm = !!initialData && initialData.length > 0

  const { questions } = useQuestionStore()
  const { submitAnswers } = useAnswerStore()
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      answers: {},
    },
  })

  useEffect(() => {
    if (initialData) {
      const preparedData = initialData.reduce(
        (acc, curr) => ({
          ...acc,
          [`${curr.questionId}`]: curr.answers[0].answer,
        }),
        {}
      )
      reset({
        answers: preparedData,
      })
    }
  }, [initialData])

  const onSubmit = async (data: FormValues) => {
    setLoading(true)
    const user = session?.user
    if (!user) return

    const payload: any[] = Object.entries(data.answers).map(
      ([questionId, answer]) => {
        const question = questions.find((q) => q.id === questionId)!
        const previousAnswer = initialData?.find(
          (q) => q.questionId === questionId
        )?.answers[0]

        const id = isEditForm ? previousAnswer?.id : generateID()

        const isSameAnswer = isEditForm && previousAnswer?.answer === answer

        if (isSameAnswer) return null
        return {
          id,
          answer,
          question: { id: questionId, title: question.title },
          submittedAt: new Date(),
          user: { id: user.id as string, name: user.name as string },
        }
      }
    )

    await new Promise((resolve) => setTimeout(resolve, 400))
    submitAnswers(payload.filter((answer) => answer !== null) as UserAnswer[])
    setLoading(false)
    router.push(routes.home)
  }

  const isMCQ = (question: Question) => {
    return question.options && question.options.length > 0
  }

  return {
    questions,
    register,
    handleSubmit,
    errors,
    control,
    isMCQ,
    onSubmit,
    loading,
  }
}
