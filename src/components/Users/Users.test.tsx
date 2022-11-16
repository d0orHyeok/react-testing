import { screen, render } from '@testing-library/react'
import Users from './Users'
import { server } from '../../mocks/server'
import { rest } from 'msw'

/**
 * using MSW
 * npm install msw --save-dev
 */

describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />)
    const headingEl = screen.getByRole('heading')
    const listEl = screen.getByRole('list')
    expect(headingEl).toBeInTheDocument()
    expect(listEl).toBeInTheDocument()
  })

  test('renders a list of users', async () => {
    render(<Users />)
    const users = await screen.findAllByRole('listitem')
    expect(users).toHaveLength(3)
  })

  // 에러 확인
  test('renders error', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users',
        (req, res, ctx) => {
          return res(ctx.status(500))
        }
      )
    )
    render(<Users />)
    const errorEl = await screen.findByText('Error fetching users')
    expect(errorEl).toBeInTheDocument()
  })
})
