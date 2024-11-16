'use client'

import { useEffect } from 'react'

import { STORAGE_KEYS } from '@/shared/config/constants'
import { DEFAULT_QUESTIONS, DEFAULT_USERS } from '@/shared/config/mock-data'
import { getLocalStorage, setLocalStorage } from '@/shared/utils'
import { User } from '@/types'
import { Question, UserAnswer } from '@/types/quiz.types'

export const SeedMockData = () => {
  useEffect(() => {
    //check if users already exist in localStorage
    const users = getLocalStorage<User[]>(STORAGE_KEYS.USERS)
    if (!users || users.length === 0) {
      setLocalStorage(STORAGE_KEYS.USERS, DEFAULT_USERS)
    }

    const questions = getLocalStorage<Question[]>(STORAGE_KEYS.QUESTIONS)
    if (!questions) {
      setLocalStorage(STORAGE_KEYS.QUESTIONS, DEFAULT_QUESTIONS)
    }

    const answers = getLocalStorage<UserAnswer[]>(STORAGE_KEYS.ANSWERS)
    if (!answers) {
      setLocalStorage(STORAGE_KEYS.ANSWERS, [])
    }

    const participantIds = getLocalStorage<string[]>(
      STORAGE_KEYS.PARTICIPANT_IDS
    )

    if (!participantIds) {
      setLocalStorage(STORAGE_KEYS.PARTICIPANT_IDS, [])
    }
  }, [])

  return null
}
