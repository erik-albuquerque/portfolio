import { BirthdayContextProvider } from '@contexts'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
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
    <BirthdayContextProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <TopProgressBar />
      <Component {...pageProps} />
    </BirthdayContextProvider>
  )
}

export default App
