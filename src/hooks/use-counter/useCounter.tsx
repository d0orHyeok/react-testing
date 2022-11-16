import { useState } from 'react'
import { UseCounterProps } from './useCounter.type'

export const useCounter = ({ initialCount = 0 }: UseCounterProps = {}) => {
  const [count, setCount] = useState(initialCount)
  const increment = () => setCount((state) => state + 1)
  const decrement = () => setCount((state) => state - 1)
  return { count, increment, decrement }
}
