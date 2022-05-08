import { ReactNode } from 'react'

interface IButton {
  children: ReactNode
}
export function Button({ children }: IButton) {
  return (
    <button className="bg-blue-500" type="button">
      {children}
    </button>
  )
}
export default Button
