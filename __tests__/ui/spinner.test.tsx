import Spinner from '@/components/ui/spinner'
import { render } from '@testing-library/react'

describe('Spinner Component', () => {
  it('renders spinner correctly', () => {
    const { container } = render(<Spinner />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('applies default classes', () => {
    const { container } = render(<Spinner />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass(
      '-ml-1',
      'h-6',
      'w-6',
      'animate-spin',
      'text-primary-500'
    )
  })

  it('merges custom className with default classes', () => {
    const { container } = render(<Spinner className='custom-class' />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass(
      '-ml-1',
      'h-6',
      'w-6',
      'animate-spin',
      'text-primary-500',
      'custom-class'
    )
  })

  it('renders path with correct attributes', () => {
    const { container } = render(<Spinner />)
    const path = container.querySelector('path')
    expect(path).toHaveAttribute('fill', 'currentColor')
    expect(path).toHaveClass('opacity-75')
  })

  // Snapshot test
  it('matches snapshot', () => {
    const { container } = render(<Spinner />)
    expect(container).toMatchSnapshot()
  })
})
