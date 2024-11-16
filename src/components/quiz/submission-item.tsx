type Props = {
  question: string
  answer: string
}

const SubmissionItem = ({ question, answer }: Props) => {
  return (
    <li className='rounded-2xl border border-gray-200 p-4 shadow-sm'>
      <h2 className='font-Inter font-medium text-neutral-600 md:text-lg'>
        Question: {question}
      </h2>
      <p className='mt-2'>Answer: {answer}</p>
    </li>
  )
}

export default SubmissionItem
