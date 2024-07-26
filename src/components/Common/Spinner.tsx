type Props = React.SVGProps<SVGSVGElement>

const Spinner = ({ className, ...props }: Props) => {
  //check if h and w is passed in className, if not add h-5 and w-5
  const hasHeightAndWidth =
    className?.includes('h-') && className?.includes('w-')

  const classNames = `${className ?? ''} text-white -ml-1 mr-3 animate-spin ${
    !hasHeightAndWidth ? 'h-6 w-6' : ''
  }`

  return (
    <svg
      className={classNames}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      {...props}>
      <circle
        className='opacity-25'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'></circle>
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
    </svg>
  )
}

export default Spinner
