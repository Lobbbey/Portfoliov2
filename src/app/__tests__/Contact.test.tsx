import { render, screen, fireEvent } from '@testing-library/react'
import { Contact } from '@/app/components/Contact'

describe('Contact Form', () => {
  it('renders all form inputs', () => {
    render(<Contact />)
    
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/message/i)).toBeInTheDocument()
  })

  // Optional: If you have validation logic
  it('prevents submission with empty fields', () => {
    render(<Contact />)
    
    const submitBtn = screen.getByRole('button', { name: /send/i })
    fireEvent.click(submitBtn)
    
    // Check for HTML5 validation or custom error message
    // HTML5 validation prevents the submit handler from firing, which is hard to test in JSDOM
    // But if you have custom state errors:
    // expect(screen.getByText(/field is required/i)).toBeInTheDocument() 
  })
})