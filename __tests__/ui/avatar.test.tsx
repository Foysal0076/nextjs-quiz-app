import Avatar from '@/components/ui/avatar'
import { render, screen } from '@testing-library/react'

describe('Avatar', () => {
  it('renders initials when no URL is provided', () => {
    render(<Avatar name='John Doe' />)
    expect(screen.getByText('JD')).toBeInTheDocument()
  })

  it('renders image when URL is provided', () => {
    const url = 'https://example.com/avatar.jpg'
    render(<Avatar name='John Doe' url={url} />)
    const image = screen.getByAltText('John Doe')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src')
  })

  it('applies custom className correctly', () => {
    render(<Avatar name='John Doe' className='custom-class' />)
    expect(screen.getByText('JD').parentElement).toHaveClass('custom-class')
  })

  it('applies custom textClassName to initials', () => {
    render(<Avatar name='John Doe' textClassName='custom-text-class' />)
    expect(screen.getByText('JD')).toHaveClass('custom-text-class')
  })

  // Snapshot test
  it('matches snapshot', () => {
    const { container } = render(<Avatar name='John Doe' />)
    expect(container).toMatchSnapshot()
  })
})
