'use client'

import Link from 'next/link'

import Loader from '@/components/common/loader'
import Button from '@/components/ui/button'
import { routes } from '@/shared/config/routes.config'
import { useAuth } from '@/shared/hooks/use-auth'
import { useAnswerStore } from '@/store/answer-store'
import { Participant } from '@/types/quiz.types'

const Submissions = () => {
  const { participants } = useAnswerStore()
  const { isLoading } = useAuth()

  if (isLoading) return <Loader />

  if (participants.length === 0) {
    return (
      <div className='flex h-[70vh] items-center justify-center md:h-[50vh]'>
        <h1 className='h1'>No submissions yet</h1>
      </div>
    )
  }

  return (
    <div className='pb-10'>
      <h1 className='page-title mb-6'>
        Submissions{' '}
        <span className='text-primary-500'>({participants.length})</span>
      </h1>
      <ul className='space-y-4'>
        {participants.map((participant) => (
          <UserListItem participant={participant} key={participant.id} />
        ))}
      </ul>
    </div>
  )
}

export default Submissions

const UserListItem = ({ participant }: { participant: Participant }) => {
  const url = routes.userSubmission(participant.id)
  return (
    <li
      className='flex items-center justify-between rounded-2xl border bg-neutral-0 p-4 shadow-sm dark:bg-surface-100/70'
      key={participant.id}>
      <p className='md:text-lg'>{participant.name}</p>
      <Link href={url}>
        <Button variant='secondary' size='sm'>
          View
        </Button>
      </Link>
    </li>
  )
}
