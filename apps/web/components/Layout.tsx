import { useRouter } from 'next/router'
import { useEffect, ReactNode } from 'react'
import { useAuth } from 'ui'

interface ILayout {
  children?: ReactNode
}

const Layout = ({ children }: ILayout) => {
  const { isApproved } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const approved = isApproved()
    if (!approved) {
      router.push('/auth/login')
    }
  }, [])

  return <>{children}</>
}

export default Layout
