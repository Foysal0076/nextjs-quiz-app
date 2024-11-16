import { forwardRef, InputHTMLAttributes } from 'react'

import { cn } from '@/shared/utils'

type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label?: string
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className='flex items-center space-x-2'>
        <input
          {...props}
          ref={ref}
          type='radio'
          id={id}
          className={cn(
            'h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:checked:bg-primary-500 dark:focus:ring-primary-600',
            className
          )}
        />
        {label && (
          <label
            htmlFor={id}
            className='cursor-pointer select-none text-sm font-medium text-neutral-700'>
            {label}
          </label>
        )}
      </div>
    )
  }
)

export default Radio
