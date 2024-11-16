import { Textarea } from '@/components/ui/textarea'
import { render, screen } from '@testing-library/react'

describe('Textarea Component', () => {
  it('renders textarea correctly', () => {
    render(<Textarea placeholder='Enter text' />)
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  it('renders label when provided', () => {
    render(<Textarea label='Description' id='desc' />)
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('displays error message when error prop is provided', () => {
    const errorMessage = 'This field is required'
    render(<Textarea error={errorMessage} />)
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
  })

  it('displays helper text when provided', () => {
    const helperText = 'Maximum 500 characters'
    render(<Textarea helperText={helperText} />)
    expect(screen.getByText(helperText)).toBeInTheDocument()
  })

  it('applies horizontal layout correctly', () => {
    render(<Textarea label='Notes' layout='horizontal' />)
    const label = screen.getByText('Notes')
    expect(label).toBeInTheDocument()
  })

  it('shows required asterisk when textarea is required', () => {
    render(<Textarea label='Required Field' required />)
    const labelContainer = screen.getByText('Required Field')
    expect(labelContainer).toHaveClass('after:content-["*"]')
  })

  it('applies custom className to textarea', () => {
    const customClass = 'custom-textarea'
    render(<Textarea className={customClass} />)
    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveClass(customClass)
  })

  it('applies custom labelClassName to label', () => {
    const customLabelClass = 'custom-label'
    render(<Textarea label='Custom Label' labelClassName={customLabelClass} />)
    const label = screen.getByText('Custom Label')
    expect(label).toHaveClass(customLabelClass)
  })

  it('applies error styles when error is provided', () => {
    render(<Textarea error='Error message' />)
    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveClass('ring-red-500')
  })

  it('forwards ref correctly', () => {
    const ref = jest.fn()
    render(<Textarea ref={ref} />)
    expect(ref).toHaveBeenCalled()
  })

  // Snapshot test
  it('matches snapshot', () => {
    const { container } = render(
      <Textarea
        label='Description'
        helperText='Enter your description'
        placeholder='Type here...'
        required
      />
    )
    expect(container).toMatchSnapshot()
  })
})
