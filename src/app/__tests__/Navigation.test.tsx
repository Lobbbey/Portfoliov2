import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { Navigation } from '../components/Navigation'

describe('Navigation Component', () => {
  it('renders the desktop resume button with correct link', () => {
    render(<Navigation />)
    
    // There are two resume buttons (desktop/mobile). We check the desktop one.
    const resumeButtons = screen.getAllByText(/Resume/i)
    const desktopResumeLink = resumeButtons[0].closest('a')
    
    expect(desktopResumeLink).toHaveAttribute('href', '/resume.pdf')
    expect(desktopResumeLink).toHaveAttribute('target', '_blank')
  })

  it('toggles mobile menu when hamburger is clicked', () => {
    render(<Navigation />)
    
    // 1. Ensure mobile menu is NOT visible initially
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()

    // 2. Click Hamburger Menu (Now targeting by specific accessible name)
    const menuButton = screen.getByRole('button', { name: /toggle menu/i })
    fireEvent.click(menuButton)

    // 3. Verify menu is now visible
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
    
    // 4. Verify Mobile Resume Link
    const mobileMenu = screen.getByTestId('mobile-menu')
    const mobileResumeLink = mobileMenu.querySelector('a[href="/resume.pdf"]')
    expect(mobileResumeLink).toBeInTheDocument()
  })
})