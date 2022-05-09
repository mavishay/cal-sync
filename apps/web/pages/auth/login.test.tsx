import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react'
import Login from './login'
import '@testing-library/jest-dom'

jest.mock('next/router', () => ({
  useRouter: () => [],
}))
describe('Login page test', () => {
  it('should generate', () => {
    render(<Login />)
    expect(screen).toMatchSnapshot()
    expect(screen.getByText('Sign in to your account')).toBeInTheDocument()
  })
})
