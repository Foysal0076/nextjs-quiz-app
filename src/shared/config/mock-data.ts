import { User } from '@/types'

export const DEFAULT_USERS: User[] = [
  {
    id: '1',
    name: 'Admin',
    email: 'admin@test.com',
    password: 'admin',
    role: 'admin',
  },
  {
    id: '2',
    name: 'Second Admin',
    email: 'secondadmin@test.com',
    password: 'admin',
    role: 'admin',
  },
  {
    id: '3',
    name: 'John Snow',
    email: 'johndoe@test.com',
    password: 'Test1234',
    role: 'user',
  },
  {
    id: '4',
    name: 'Arya Stark',
    email: 'aryastark@test.com',
    password: 'Test1234',
    role: 'user',
  },
]
