import { HTMLAttributes, ReactNode } from 'react'
import { Container, Content, Header, Wrapper } from './styles'

type ArticleProps = HTMLAttributes<HTMLDivElement> & {
  title: string
  children: ReactNode
}

const Article: React.FC<ArticleProps> = ({ title, children, ...rest }: ArticleProps) => {
  return (
    <Container {...rest}>
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
