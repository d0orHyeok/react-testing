import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CounterTwo from './CounterTwo'

describe('CounterTwo', () => {
  test('renders correctly', () => {
    render(<CounterTwo count={0} />)
    const textEl = screen.getByText('Counter Two')
    expect(textEl).toBeInTheDocument()
  })

  test('handlers are called', () => {
    const incrementHandler = jest.fn()
    const decrementHandler = jest.fn()
    render(
      <CounterTwo
        count={0}
        handleDecrement={decrementHandler}
        handleIncrement={incrementHandler}
      />
    )

    const incrementtButton = screen.getByRole('button', { name: 'Increment' })
    const decrementButton = screen.getByRole('button', { name: 'Decrement' })

    userEvent.click(incrementtButton)
    userEvent.click(decrementButton)

    // mock fucntion 한번씩 실행되었는지
    expect(incrementHandler).toHaveBeenCalledTimes(1)
    expect(decrementHandler).toHaveBeenCalledTimes(1)
  })
})
