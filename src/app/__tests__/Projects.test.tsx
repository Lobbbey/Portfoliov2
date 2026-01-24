import { render, screen } from '@testing-library/react'
import { Projects } from '@/app/components/Projects'

jest.mock('@/app/constants/projects', () => ({
  projects: [
    {
      title: 'Test Project 1',
      description: 'Description 1',
      tags: ['React'],
      image: '/img1.png',
      github: 'https://github.com/test',
      demo: 'https://demo.com'
    },
    {
      title: 'Project Without Image',
      description: 'Description 2',
      tags: ['Node'],
      image: '',
      github: '',
      demo: ''
    }
  ]
}))

describe('Projects Component', () => {
  it('renders project cards correctly', () => {
    render(<Projects />)
    
    expect(screen.getByText('Test Project 1')).toBeInTheDocument()
    expect(screen.getByText('Project Without Image')).toBeInTheDocument()
  })

  it('shows "Coming Soon" when image is missing', () => {
    render(<Projects />)
    
    expect(screen.getByText('Coming Soon')).toBeInTheDocument()
  })

  it('renders code/live buttons only when links exist', () => {
    render(<Projects />)
    
    // Project 1 has links
    const githubLink = screen.getByRole('link', { name: /view source code/i })
    expect(githubLink).toHaveAttribute('href', 'https://github.com/test')

    // Project 2 has NO links, so we should only find 1 GitHub link total
    const allGithubLinks = screen.getAllByRole('link', { name: /view source code/i })
    expect(allGithubLinks).toHaveLength(1)
  })
})