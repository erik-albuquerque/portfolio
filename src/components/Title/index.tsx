import { HTMLAttributes, ReactNode } from 'react'
import { Container, Text } from './styles'

type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode
}

const Title: React.FC<TitleProps> = ({ children, ...rest }: TitleProps) => {
  return (
    <Container>
      <Text {...rest}>{children}</Text>
    </Container>
  )
}

export { Title }
