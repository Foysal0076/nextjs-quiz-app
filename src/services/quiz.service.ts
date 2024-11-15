import { STORAGE_KEYS } from '@/shared/config/constants'
import { getLocalStorage } from '@/shared/utils'
import { User } from '@/types'
import { AnswerHistory, Question, UserAnswer } from '@/types/quiz.types'

export const getQuestions = (includeDeleted = false): Question[] => {
  return (getLocalStorage<Question[]>(STORAGE_KEYS.QUESTIONS) || []).filter(
    (question: Question) => includeDeleted || !question.isDeleted
  )
}

export const addQuestion = (question: Question) => {
  const questions = getQuestions()
  questions.push(question)
  localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(questions))
}

export const updateQuestion = (question: Question) => {
  const questions = getQuestions()
  const index = questions.findIndex((q) => q.id === question.id)
  if (index === -1) return

  questions[index] = question
  localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(questions))
}

export const deleteQuestion = (questionId: string) => {
  const questions = getQuestions()
  const index = questions.findIndex((q) => q.id === questionId)
  if (index === -1) return

  questions[index].isDeleted = true
  localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(questions))
}

export const getUsers = (): User[] => {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]')
}

export const getUserById = (userId: string): User | undefined => {
  return getUsers().find((user) => user.id === userId)
}

export const getUserSubmissions = (userId: string): AnswerHistory[] => {
  const submissions = JSON.parse(
    localStorage.getItem(STORAGE_KEYS.ANSWERS) || '[]'
  ).filter((answer: UserAnswer) => answer.user.id === userId)

  // Group submissions by questionId
  const groupedSubmissions: { [key: string]: UserAnswer[] } =
    submissions.reduce(
      (acc: { [key: string]: UserAnswer[] }, curr: UserAnswer) => {
        const questionId = curr.question.id
        if (!acc[questionId]) {
          acc[questionId] = []
        }
        acc[questionId].push(curr)
        return acc
      },
      {}
    )

  // Convert to Answer History array
  return Object.entries(groupedSubmissions).map(([questionId, answers]) => ({
    questionId,
    questionTitle: answers[0].question.title,
    answers,
  }))
}

export const getSubmissions = (): UserAnswer[] => {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.ANSWERS) || '[]')
}

export const addUserSubmission = (submission: UserAnswer) => {
  const submissions = getSubmissions()
  submissions.push(submission)
  localStorage.setItem(STORAGE_KEYS.ANSWERS, JSON.stringify(submissions))
}
