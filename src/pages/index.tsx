import { Header, Title } from '@components'
import type { NextPage } from 'next'
import { Container, Content, Paragraph, Wrapper } from '../styles/home'

const Home: NextPage = () => {
  return (
    <Container>
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
            build some UI designs.
          </Paragraph>
        </Wrapper>
      </Content>
    </Container>
  )
}

export default Home
