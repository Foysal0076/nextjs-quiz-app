import { fireEvent, render, screen } from '@testing-library/react'

import { Input } from '@/components/ui/Input'

describe('Input Component', () => {
  it('renders basic input correctly', () => {
    render(<Input placeholder='Enter text' />)
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  it('renders label when provided', () => {
    render(<Input label='Username' id='username' />)
    expect(screen.getByText('Username')).toBeInTheDocument()
  })

  it('displays error message when error prop is provided', () => {
    render(<Input error='This field is required' />)
    expect(screen.getByText('This field is required')).toBeInTheDocument()
  })

  it('displays helper text when provided', () => {
    render(<Input helperText='Must be at least 8 characters' />)
    expect(
      screen.getByText('Must be at least 8 characters')
    ).toBeInTheDocument()
  })

  it('handles start adornment click', () => {
    const handleClick = jest.fn()
    render(
      <Input
        startAdornment={{
          adornment: <span>@</span>,
          onClick: handleClick,
        }}
      />
    )

    const button = screen.getByLabelText('start-adornment btn')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalled()
  })

  it('handles end adornment click', () => {
    const handleClick = jest.fn()
    render(
      <Input
        endAdornment={{
          adornment: <span>×</span>,
          onClick: handleClick,
        }}
      />
    )

    const button = screen.getByLabelText('end-adornment btn')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalled()
  })

  it('applies horizontal layout correctly', () => {
    render(<Input label='Email' layout='horizontal' />)
    const label = screen.getByText('Email')
    expect(label).toHaveTextContent('Email :')
  })

  // Snapshot test
  it('matches snapshot', () => {
    const { container } = render(
      <Input
        label='Username'
        helperText='Enter your username'
        placeholder='johndoe'
        required
      />
    )
    expect(container).toMatchSnapshot()
  })
})
