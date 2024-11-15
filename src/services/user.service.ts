import { STORAGE_KEYS } from '@/shared/config/constants'
import { getLocalStorage, setLocalStorage } from '@/shared/utils'
import { generateID } from '@/shared/utils/generateID'
import { User } from '@/types'

export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
  try {
    // Get existing users from localStorage
    const existingUsers = getLocalStorage<User[]>(STORAGE_KEYS.USERS) || []

    // Check if email already exists
    const emailExists = existingUsers.some((u) => u.email === user.email)
    if (emailExists) {
      throw new Error('Email already exists')
    }

    // Add new user to the array
    const newUser = { ...user, id: generateID() }
    const newUsers = [...existingUsers, newUser]

    // Save updated users array to localStorage
    const success = setLocalStorage(STORAGE_KEYS.USERS, newUsers)

    if (!success) {
      throw new Error('Failed to create user')
    }

    return newUser
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
    throw new Error('Failed to create user')
  }
}

export const getUserByEmail = (email: string): User | null => {
  const users = getLocalStorage<User[]>(STORAGE_KEYS.USERS) || []
  return users.find((user) => user.email === email) || null
}

export const getUserById = (id: string): User | null => {
  const users = getLocalStorage<User[]>(STORAGE_KEYS.USERS) || []
  return users.find((user) => user.id === id) || null
}

export const getAllUsers = (): User[] => {
  return getLocalStorage<User[]>(STORAGE_KEYS.USERS) || []
}
