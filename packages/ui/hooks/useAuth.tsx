import { useCallback } from 'react'

export const useAuth = () => {
  const isApproved = useCallback(() => false, [])

  return { isApproved }
}

export default useAuth
