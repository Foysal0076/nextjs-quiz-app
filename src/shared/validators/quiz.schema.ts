import { z } from 'zod'

export const QuizAnswerSchema = z.object({
  questionId: z.string(),
  answer: z.string().min(1, { message: 'Answer is required' }),
})

export type QuizAnswerType = z.infer<typeof QuizAnswerSchema>
