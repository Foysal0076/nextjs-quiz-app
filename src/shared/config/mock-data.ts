import { User } from '@/types'
import { Question, UserAnswer } from '@/types/quiz.types'

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

export const DEFAULT_QUESTIONS: Question[] = [
  {
    id: '1',
    title: 'What is the capital of France?',
    createdAt: new Date(),
    createdBy: {
      id: '1',
      name: 'Admin',
    },
    options: [
      { id: '1', title: 'Paris' },
      { id: '2', title: 'London' },
      { id: '3', title: 'Berlin' },
      { id: '4', title: 'Madrid' },
    ],
    correctAnswer: 'Paris',
  },
  {
    id: '2',
    title:
      'Which motorcycle manufacturer is known for the slogan "The Art of Motorcycling"?',
    createdAt: new Date(),
    createdBy: {
      id: '1',
      name: 'Admin',
    },
    options: [
      { id: '1', title: 'Royal Enfield' },
      { id: '2', title: 'Harley Davidson' },
      { id: '3', title: 'Yamaha' },
      { id: '4', title: 'BMW' },
    ],
    correctAnswer: 'Royal Enfield',
  },
  {
    id: '3',
    title: 'Which of these Yamaha bikes is known as "The King of Bikes"?',
    createdAt: new Date(),
    createdBy: {
      id: '1',
      name: 'Admin',
    },
    options: [
      { id: '1', title: 'YZF R1' },
      { id: '2', title: 'MT-15' },
      { id: '3', title: 'RX 100' },
      { id: '4', title: 'FZ-S' },
    ],
    correctAnswer: 'RX 100',
  },
  {
    id: '4',
    title: 'What does ATGATT stand for in motorcycle safety?',
    createdAt: new Date(),
    createdBy: {
      id: '1',
      name: 'Admin',
    },
    options: [
      { id: '1', title: 'All The Gear, All The Time' },
      { id: '2', title: 'Advanced Training Gives Added Track Time' },
      { id: '3', title: 'Always Take Guidance And Technical Training' },
      { id: '4', title: 'All Terrain Gear And Track Training' },
    ],
    correctAnswer: 'All The Gear, All The Time',
  },
  {
    id: '5',
    title:
      'Describe your most memorable motorcycle journey and what made it special.',
    createdAt: new Date(),
    createdBy: {
      id: '1',
      name: 'Admin',
    },
    options: [],
    correctAnswer: '',
  },
  {
    id: '6',
    title:
      'What does riding a motorcycle mean to you in terms of personal freedom?',
    createdAt: new Date(),
    createdBy: {
      id: '1',
      name: 'Admin',
    },
    options: [],
    correctAnswer: '',
  },
  {
    id: '7',
    title:
      'Which is the minimum engine displacement typically allowed on highways?',
    createdAt: new Date(),
    createdBy: {
      id: '1',
      name: 'Admin',
    },
    options: [
      { id: '1', title: '100cc' },
      { id: '2', title: '150cc' },
      { id: '3', title: '200cc' },
      { id: '4', title: '250cc' },
    ],
    correctAnswer: '150cc',
  },
]
export const DEFAULT_ANSWERS: UserAnswer[] = []
