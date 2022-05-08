// eslint-disable-next-line @next/next/no-document-import-in-page
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, ReactNode } from 'react'
import { useAuth } from 'ui'

interface ILayout {
  title: string
  children: ReactNode
}

function Layout({ title, children }: ILayout) {
  const { isApproved } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const approved = isApproved()
    if (!approved) {
      router.push('/auth/login')
    }
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </>
  )
}

export default Layout
