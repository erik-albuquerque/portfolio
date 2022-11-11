import { Header, Paragraph, Title } from '@components'
import { Container, Content, Wrapper } from '@styles/home'
import type { NextPage } from 'next'
import Head from 'next/head'

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
            Dev Front-end.
          </Title>
          <Paragraph lineHeight="sm">
            Dev Front-end and sometimes I like to do some Pixel Art.
          </Paragraph>
        </Wrapper>
      </Content>
    </Container>
  )
}

export default Home
