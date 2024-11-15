import { Role } from '@/types/common.types'

export type User = {
  id: string
  name: string
  email: string
  password: string
  role: Role
}

export type AuthenticatedUser = Omit<User, 'password'>
