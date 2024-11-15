import { create } from 'zustand'

import {
  addQuestion,
  deleteQuestion,
  getQuestions,
  updateQuestion,
} from '@/services/quiz.service'
import { Question } from '@/types/quiz.types'

type QuestionStore = {
  questions: Question[]
  refreshQuestionList: () => void
  addNewQuestion: (question: Question) => void
  removeQuestion: (id: string) => void
  editQuestion: (question: Question) => void
}

export const useQuestionStore = create<QuestionStore>((set) => ({
  questions: [],

  refreshQuestionList: () => {
    const questions = getQuestions()
    set({ questions })
  },

  addNewQuestion: (question) => {
    addQuestion(question)
    useQuestionStore.getState().refreshQuestionList()
  },

  removeQuestion: (id) => {
    deleteQuestion(id)
    useQuestionStore.getState().refreshQuestionList()
  },

  editQuestion: (question) => {
    updateQuestion(question)
    useQuestionStore.getState().refreshQuestionList()
  },
}))

// Initialize the questions when the store is first imported
useQuestionStore.getState().refreshQuestionList()
