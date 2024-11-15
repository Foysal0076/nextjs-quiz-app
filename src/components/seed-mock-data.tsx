'use client'

import { useEffect } from 'react'

import { STORAGE_KEYS } from '@/shared/config/constants'
import { DEFAULT_USERS } from '@/shared/config/mock-data'
import { getLocalStorage, setLocalStorage } from '@/shared/utils'
import { User } from '@/types'

export const SeedMockData = () => {
  useEffect(() => {
    //check if users already exist in localStorage
    const users = getLocalStorage<User[]>(STORAGE_KEYS.USERS)
    if (!users || users.length === 0) {
      setLocalStorage(STORAGE_KEYS.USERS, DEFAULT_USERS)
    }
  }, [])

  return null
}
