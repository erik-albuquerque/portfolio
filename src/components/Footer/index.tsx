import { getYear } from '@utils/getYear'
import { Container, Content, Text } from './styles'

const Footer = () => {
  const year = getYear()

  return (
    <Container>
      <Content>
        <Text>{`@ ${year} Érik Albuquerque. All Rights Reserved.`}</Text>
      </Content>
    </Container>
  )
}

export { Footer }
