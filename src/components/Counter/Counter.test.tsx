import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './Counter'

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />)
    const countEl = screen.getByRole('heading')
    expect(countEl).toBeInTheDocument()

    const increaseButton = screen.getByRole('button', { name: 'increase' })
    expect(increaseButton).toBeInTheDocument()
  })

  test('renders a count of 0', () => {
    render(<Counter />)
    const countEl = screen.getByRole('heading')
    expect(countEl).toHaveTextContent('0')
  })

  test('renders a count of 1 after clicking the increase button', async () => {
    render(<Counter />)
    const increaseButton = screen.getByRole('button', { name: 'increase' })
    userEvent.click(increaseButton)
    const countEl = screen.getByRole('heading')
    expect(countEl).toHaveTextContent('1')
  })

  test('renders a count of 10 after clicking set button', async () => {
    render(<Counter />)
    const inputEl = screen.getByRole('spinbutton')
    userEvent.type(inputEl, '10')
    const setButton = screen.getByRole('button', { name: 'Set' })
    userEvent.click(setButton)
    const countEl = screen.getByRole('heading')
    expect(countEl).toHaveTextContent('10')
  })

  test('elements are focused in the right order', () => {
    render(<Counter />)
    const amountInput = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', { name: 'Set' })
    const increaseButton = screen.getByRole('button', { name: 'increase' })
    userEvent.tab()
    expect(increaseButton).toHaveFocus()
    userEvent.tab()
    expect(amountInput).toHaveFocus()
    userEvent.tab()
    expect(setButton).toHaveFocus()
  })
})
