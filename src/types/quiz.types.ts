import { User } from '@/types/user.types'

type ShortUserInfo = Pick<User, 'id' | 'name'>
type ShortQuestionInfo = Pick<Question, 'id' | 'title'>

export type QuestionOption = {
  id: string
  title: string
}

export type Question = {
  id: string
  title: string
  options: QuestionOption[]
  correctAnswer?: string
  createdAt: Date
  updatedAt?: Date
  createdBy: ShortUserInfo
  updatedBy?: ShortUserInfo
  isDeleted?: boolean
  deletedAt?: Date
  deletedBy?: ShortUserInfo
}

export type UserAnswer = {
  id: string
  user: ShortUserInfo
  question: ShortQuestionInfo
  answer: string
  submittedAt: Date
}

export type AnswerHistory = {
  questionId: string
  questionTitle: string
  answers: UserAnswer[]
}
