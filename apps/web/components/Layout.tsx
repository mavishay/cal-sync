import { useRouter } from 'next/router'
import { useEffect, ReactNode } from 'react'
import { useAuth } from 'ui'

interface ILayout {
  children: ReactNode
}

function Layout({ children }: ILayout) {
  const { isApproved } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const approved = isApproved()
    if (!approved) {
      router.push('/auth/login')
    }
  }, [])

  return <div>{children}</div>
}

export default Layout
