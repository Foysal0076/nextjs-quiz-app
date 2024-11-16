import Radio from '@/components/ui/radio-input'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Radio Component', () => {
  it('renders radio input correctly', () => {
    render(<Radio />)
    const radio = screen.getByRole('radio')
    expect(radio).toBeInTheDocument()
  })

  it('renders with label when provided', () => {
    render(<Radio label='Choose option' id='test-radio' />)
    const label = screen.getByText('Choose option')
    expect(label).toBeInTheDocument()
    expect(label).toHaveAttribute('for', 'test-radio')
  })

  it('can be checked and unchecked', () => {
    render(<Radio defaultChecked />)
    const radio = screen.getByRole('radio')

    expect(radio).toBeChecked()
  })

  it('can be checked when not checked', () => {
    render(<Radio />)
    const radio = screen.getByRole('radio')

    expect(radio).not.toBeChecked()
  })

  it('applies custom className correctly', () => {
    const customClass = 'custom-radio'
    render(<Radio className={customClass} />)
    const radio = screen.getByRole('radio')
    expect(radio).toHaveClass(customClass)
  })

  it('forwards ref correctly', () => {
    const ref = jest.fn()
    render(<Radio ref={ref} />)
    expect(ref).toHaveBeenCalled()
  })

  it('handles disabled state', () => {
    render(<Radio disabled />)
    const radio = screen.getByRole('radio')
    expect(radio).toBeDisabled()
  })

  it('handles name attribute', () => {
    render(<Radio name='test-group' />)
    const radio = screen.getByRole('radio')
    expect(radio).toHaveAttribute('name', 'test-group')
  })

  // Snapshot test
  it('matches snapshot', () => {
    const { container } = render(
      <Radio label='Test Option' id='test-radio' name='test-group' />
    )
    expect(container).toMatchSnapshot()
  })
})
