import React, { forwardRef } from 'react'

import { cn } from '@/shared/utils'

type TextAreaParams = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  labelClassName?: string
  helperText?: string
  layout?: 'horizontal' | 'vertical'
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextAreaParams>(
  function CustomTextarea(
    {
      label,
      error,
      layout = 'vertical',
      className = '',
      labelClassName = '',
      helperText,
      ...textareaParams
    },
    ref
  ) {
    return (
      <div
        className={cn('custom-textarea group flex', {
          'flex-col gap-1': layout === 'vertical',
        })}>
        {label && (
          <label
            htmlFor={textareaParams.id as string}
            className={cn(
              'text-sm font-semibold',
              {
                'text-neutral-600 group-focus-within:text-primary-500 dark:group-focus-within:text-primary-300':
                  !error,
                'text-red-500 group-focus-within:text-red-500': error,
                'after:ml-0.5 after:mr-1 after:text-red-500 after:content-["*"]':
                  textareaParams.required,
                'mt-2': layout === 'horizontal',
              },
              labelClassName
            )}>
            {label} {layout === 'horizontal' && <span>:</span>}
          </label>
        )}
        <div className='relative flex flex-col'>
          <textarea
            ref={ref}
            {...textareaParams}
            className={cn(
              'rounded-lg border-none px-4 py-2 text-neutral-600 outline-none ring-1 placeholder:text-neutral-50 disabled:bg-neutral-30 disabled:text-neutral-100 dark:bg-surface-100 dark:text-neutral-600 dark:disabled:bg-neutral-400',
              {
                'ring-neutral-50 focus:shadow-[0_0_10px_#c9bfff] focus:ring-primary-300 dark:focus:ring-primary-300':
                  !error,
                'ring-red-500 focus:ring-red-500': error,
              },
              className
            )}
          />
          {helperText && (
            <span className='helper-text mt-1 text-xs font-normal text-neutral-400'>
              {helperText}
            </span>
          )}
          {error && (
            <div
              className={cn(
                'absolute -bottom-0 left-0',
                helperText ? 'translate-y-[80%]' : 'translate-y-[90%]'
              )}>
              <span className='text-xs text-red-500 dark:text-red-500'>
                {error}
              </span>
            </div>
          )}
        </div>
      </div>
    )
  }
)
