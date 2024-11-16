import { create } from 'zustand'

import {
  addParticipantId,
  getAllSubmissions,
  getParticipantIds,
  getUserAnswers,
  submitAnswers,
} from '@/services/quiz.service'
import { AnswerHistory, UserAnswer } from '@/types/quiz.types'

type AnswerStore = {
  answers: UserAnswer[]
  participantIds: string[]

  refreshAnswerList: () => void
  refreshParticipantList: () => void
  getUserAnswersByUserId: (userId: string) => AnswerHistory[]
  submitAnswers: (answers: UserAnswer[]) => void
}

export const useAnswerStore = create<AnswerStore>((set, get) => ({
  answers: [],
  participantIds: [],

  refreshAnswerList: () => {
    const answers = getAllSubmissions()
    set({ answers })
  },

  refreshParticipantList: () => {
    const participantIds = getParticipantIds()
    set({ participantIds })
  },

  submitAnswers: (answers: UserAnswer[]) => {
    submitAnswers(answers)
    const userId = answers[0].user.id
    if (!get().participantIds.includes(userId)) {
      addParticipantId(userId)
      get().refreshParticipantList()
    }
    get().refreshAnswerList()
  },

  getUserAnswersByUserId: (userId: string) => {
    return getUserAnswers(userId)
  },
}))

// Initialize the questions when the store is first imported
useAnswerStore.getState().refreshAnswerList()
useAnswerStore.getState().refreshParticipantList()
