import { createContext, useContext, useEffect, useState } from 'react'

import {
  addQuestion,
  deleteQuestion,
  getQuestions,
  updateQuestion,
} from '@/services/quiz.service'
import { Question } from '@/types/quiz.types'

type QuestionContextType = {
  questions: Question[]
  addNewQuestion: (question: Question) => void
  removeQuestion: (id: string) => void
  editQuestion: (question: Question) => void
}

export const QuestionContext = createContext<QuestionContextType | undefined>(
  undefined
)

export const QuestionProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [questions, setQuestions] = useState<Question[]>([])

  const refreshQuestionList = () => {
    const questions = getQuestions()
    setQuestions(questions)
  }

  const addNewQuestion = (question: Question) => {
    addQuestion(question)
    refreshQuestionList()
  }

  const removeQuestion = (id: string) => {
    deleteQuestion(id)
    refreshQuestionList()
  }

  const editQuestion = (question: Question) => {
    updateQuestion(question)
    refreshQuestionList()
  }

  useEffect(() => {
    refreshQuestionList()
  }, [])

  return (
    <QuestionContext.Provider
      value={{ questions, addNewQuestion, removeQuestion, editQuestion }}>
      {children}
    </QuestionContext.Provider>
  )
}

export const useQuestionList = () => {
  const context = useContext(QuestionContext)
  if (!context) {
    throw new Error('useQuestionList must be used within a QuestionProvider')
  }
  return context
}
