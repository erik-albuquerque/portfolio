import { Paragraph } from '@components'
import { appsImagesSrc } from '@constants'
import Image from 'next/image'
import { Container, Content, Link, Wrapper } from './styles'

type Props = {
  data: {
    name: string
    description: string
    url: string
  }
}

const AppCard: React.FC<Props> = ({ data }: Props) => {
  const { name, description, url } = data

  const imageSrc = appsImagesSrc[name]

  return (
    <Container>
      <Content>
        <Image
          src={imageSrc}
          objectFit="cover"
          width={40}
          height={40}
          alt={name}
        />
        <Wrapper>
          <Link href={url}>{name}</Link>
          <Paragraph fontSize='sm'>{description}</Paragraph>
        </Wrapper>
      </Content>
    </Container>
  )
}

export { AppCard }
