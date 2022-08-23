import { ReactNode } from 'react'
import { Container, Text } from './styles'

type TitleProps = {
  children: ReactNode
}

const Title: React.FC<TitleProps> = ({ children }: TitleProps) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  )
}

export { Title }
