import { ReactNode } from 'react'
import { Container, Content, Link as StitchesLink } from './styles'

type Props = {
  data: {
    title: string
    description: string
    url: string
  }
}

const Link = ({ children, href }: { children: ReactNode; href: string }) => (
  <StitchesLink isUrl={!!href} href={href} target="_blank">
    {children}
  </StitchesLink>
)

const SetupComponent: React.FC<Props> = ({ data }) => {
  const { title, description, url } = data

  return (
    <Container>
      <Content>
        <strong>{title}</strong>
        <Link href={url}>{description}</Link>
      </Content>
    </Container>
  )
}

export { SetupComponent }
