// eslint-disable-next-line import/no-extraneous-dependencies
import { useCallback } from 'react'

export const useAuth = () => {
  const isApproved = useCallback(() => false, [])

  return { isApproved }
}

export default useAuth
