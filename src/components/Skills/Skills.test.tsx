import { render, screen } from '@testing-library/react'
import Skills from './Skills'

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript']

  test('render correctly', () => {
    render(<Skills skills={skills} />)
    const listEl = screen.getByRole('list')
    expect(listEl).toBeInTheDocument()
  })

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />)
    const listEls = screen.getAllByRole('listitem')
    expect(listEls).toHaveLength(skills.length)
  })

  test('renders toggle button', () => {
    render(<Skills />)
    const toggleButton = screen.getByRole('button', { name: 'toggle' })
    expect(toggleButton).toBeInTheDocument()

    const falseButton = screen.queryByRole('button', { name: 'false' })
    expect(falseButton).toBeInTheDocument()

    const trueButton = screen.queryByRole('button', { name: 'true' })
    expect(trueButton).not.toBeInTheDocument()
  })

  test('promise button eventually displayed', async () => {
    render(<Skills />)
    const promiseButton = await screen.findByRole(
      'button',
      { name: 'promise' },
      { timeout: 2000 }
    )
    expect(promiseButton).toBeInTheDocument()
  })
})
