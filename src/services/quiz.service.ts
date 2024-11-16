import { STORAGE_KEYS } from '@/shared/config/constants'
import { getLocalStorage, setLocalStorage } from '@/shared/utils'
import { User } from '@/types'
import {
  AnswerHistory,
  Participant,
  Question,
  UserAnswer,
} from '@/types/quiz.types'

export const getAllQuestions = (): Question[] => {
  return getLocalStorage<Question[]>(STORAGE_KEYS.QUESTIONS) || []
}

export const getActiveQuestions = (): Question[] => {
  return (getLocalStorage<Question[]>(STORAGE_KEYS.QUESTIONS) || []).filter(
    (question: Question) => !question.isDeleted
  )
}

export const addQuestion = (question: Question) => {
  const questions = getAllQuestions()
  questions.push(question)
  setLocalStorage(STORAGE_KEYS.QUESTIONS, questions)
}

export const updateQuestion = (question: Question) => {
  const questions = getAllQuestions()
  const index = questions.findIndex((q) => q.id === question.id)
  if (index === -1) return

  questions[index] = question
  setLocalStorage(STORAGE_KEYS.QUESTIONS, questions)
}

export const deleteQuestion = (questionId: string) => {
  const questions = getAllQuestions()
  const index = questions.findIndex((q) => q.id === questionId)
  if (index === -1) return

  questions[index].isDeleted = true
  setLocalStorage(STORAGE_KEYS.QUESTIONS, questions)
}

export const getUsers = (): User[] => {
  return getLocalStorage<User[]>(STORAGE_KEYS.USERS) || []
}

export const getUserById = (userId: string): User | undefined => {
  return getUsers().find((user) => user.id === userId)
}

// Get all submissions of all users
export const getAllSubmissions = (): UserAnswer[] => {
  const questions = getAllQuestions().map((question) => question.id)
  const answers = getLocalStorage<UserAnswer[]>(STORAGE_KEYS.ANSWERS) || []
  return answers.filter((answer: UserAnswer) =>
    questions.includes(answer.question.id)
  )
}

// Get submissions for active questions
export const getActiveSubmissions = (): UserAnswer[] => {
  const activeQuestionIds = getActiveQuestions().map((question) => question.id)
  return getAllSubmissions().filter((answer) =>
    activeQuestionIds.includes(answer.question.id)
  )
}

//* Get User Answers grouped by questionId, since we are keeping track of history of answers
export const getUserAnswers = (
  userId: string,
  includeDeletedQuestions = false
): AnswerHistory[] => {
  let submissions = null
  if (includeDeletedQuestions) {
    submissions = getAllSubmissions()
  } else {
    submissions = getActiveSubmissions()
  }

  submissions = submissions.filter((answer) => answer.user.id === userId)

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

  // Convert to Answer History array, sorted by submission time
  return Object.entries(groupedSubmissions).map(([questionId, answers]) => ({
    questionId,
    questionTitle: answers[0].question.title,
    answers: answers.sort(
      (a, b) =>
        new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime()
    ),
  }))
}

export const submitAnswers = (answers: UserAnswer[]) => {
  const allSubmissions = getAllSubmissions()
  allSubmissions.push(...answers)
  setLocalStorage(STORAGE_KEYS.ANSWERS, allSubmissions)
}

export const getParticipants = (): Participant[] => {
  return getLocalStorage<Participant[]>(STORAGE_KEYS.PARTICIPANT_IDS) || []
}

export const addParticipant = (participant: Participant) => {
  const participants = getParticipants()
  participants.push(participant)
  setLocalStorage(STORAGE_KEYS.PARTICIPANT_IDS, participants)
}
