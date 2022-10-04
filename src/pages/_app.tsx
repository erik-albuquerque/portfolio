import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import type { ReactElement, ReactNode } from 'react'

import { globalStyles } from 'stitches.config'

import '../components/Mansory/masonry.css'
import '../styles/Nprogress.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const TopProgressBar = dynamic(
  () => {
    return import('@components/TopProgressBar')
  },
  { ssr: false }
)

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  globalStyles()

  return getLayout(
    <>
      <TopProgressBar />
      <Component {...pageProps} />
    </>
  )
}

export default App
