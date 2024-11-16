import { HTMLAttributes } from 'react'

import Spinner from '@/components/ui/spinner'
import { cn } from '@/shared/utils'

type Props = HTMLAttributes<HTMLDivElement>

const Loader = ({ className }: Props) => {
  return (
    <div className={cn('flex h-[70vh] items-center justify-center', className)}>
      <Spinner />
    </div>
  )
}

export default Loader
