import { Header, Title } from '@components'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Content, Paragraph, Wrapper } from '../styles/home'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Home | Érik Albuquerque</title>
      </Head>

      <Header />

      <Content>
        <Wrapper>
          <Title>
            Hi, <br />
            {`I'm Érik,`} <br />
            Web Front-end.
          </Title>
          <Paragraph>
            Web Front-end and sometimes I like to <br />
            do some Pixel Art.
          </Paragraph>
        </Wrapper>
      </Content>
    </Container>
  )
}

export default Home
