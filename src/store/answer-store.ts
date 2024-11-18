import { create } from 'zustand'

import {
  addParticipant,
  getAllSubmissions,
  getParticipants,
  getUserAnswers,
  submitAnswers,
} from '@/services/quiz.service'
import { AnswerHistory, Participant, UserAnswer } from '@/types/quiz.types'

type AnswerStore = {
  answers: UserAnswer[]
  participants: Participant[]

  refreshAnswerList: () => void
  refreshParticipantList: () => void
  getUserAnswersByUserId: (
    // eslint-disable-next-line
    userId: string,
    // eslint-disable-next-line
    includeDeletedQuestions?: boolean
  ) => AnswerHistory[]
  // eslint-disable-next-line
  submitAnswers: (answers: UserAnswer[]) => void
}

export const useAnswerStore = create<AnswerStore>((set, get) => ({
  answers: [],
  participants: [],

  refreshAnswerList: () => {
    const answers = getAllSubmissions()
    set({ answers })
  },

  refreshParticipantList: () => {
    const participants = getParticipants()
    set({ participants })
  },

  submitAnswers: (answers: UserAnswer[]) => {
    submitAnswers(answers)
    const userId = answers[0].user.id
    const userName = answers[0].user.name
    if (!get().participants.some((p) => p.id === userId)) {
      addParticipant({ id: userId, name: userName })
      get().refreshParticipantList()
    }
    get().refreshAnswerList()
  },

  getUserAnswersByUserId: (userId: string, includeDeletedQuestions = false) => {
    return getUserAnswers(userId, includeDeletedQuestions)
  },
}))

// Initialize the questions when the store is first imported
useAnswerStore.getState().refreshAnswerList()
useAnswerStore.getState().refreshParticipantList()
