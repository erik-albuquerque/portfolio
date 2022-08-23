import { Header } from '@components'
import type { NextPage } from 'next'
import { styled } from '../../stitches.config'

const H1 = styled('h1', {
  fontWeight: '$normal',
})

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <H1>hello world!</H1>
    </>
  )
}

export default Home
