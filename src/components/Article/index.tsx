import { ReactNode } from 'react'
import { Container, Content, Header, Wrapper } from './styles'

type ArticleProps = {
  title: string
  children: ReactNode
}

const Article: React.FC<ArticleProps> = ({ title, children }: ArticleProps) => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <h1>{title}</h1>
        </Header>
        <Content>{children}</Content>
      </Wrapper>
    </Container>
  )
}

export { Article }
