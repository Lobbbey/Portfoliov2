import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../page.tsx'

describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)

    const image = screen.getByRole('img', {
      name: /next\.js logo/i,
    })

    expect(image).toBeInTheDocument()
  })
})
