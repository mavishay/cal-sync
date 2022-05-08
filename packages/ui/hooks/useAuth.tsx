import { useCallback } from 'react'

export const useAuth = () => {
  const isApproved = useCallback(() => {
    return false
  }, [])

  return { isApproved }
}

export default useAuth
