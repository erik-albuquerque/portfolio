import { VariantProps } from '@stitches/react'
import { ReactNode } from 'react'
import { Container, Content, P } from './styles'

type Props = VariantProps<typeof P> & {
  children: ReactNode
}

const Paragraph: React.FC<Props> = ({ children, ...rest }: Props) => {
  return (
    <Container>
      <Content>
        <P {...rest}>{children}</P>
      </Content>
    </Container>
  )
}

export { Paragraph }
