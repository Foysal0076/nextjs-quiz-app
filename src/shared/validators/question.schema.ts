import { z } from 'zod'

const QuestionOptionSchema = z.object({
  id: z.string(),
  title: z.string().min(1, { message: 'Option title is required' }),
})

export const QuestionSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  options: z
    .union([
      z.array(QuestionOptionSchema).length(0, {
        message: 'Must include either no options or 2-4 options',
      }),
      z
        .array(QuestionOptionSchema)
        .min(2, { message: 'At least 2 options are required' })
        .max(4, { message: 'At most 4 options are allowed' }),
    ])
    .optional(),
  correctAnswer: z.string().optional(),
})

export type QuestionSchemaType = z.infer<typeof QuestionSchema>

export type UpdateQuestionSchemaType = QuestionSchemaType & {
  id: string
}
