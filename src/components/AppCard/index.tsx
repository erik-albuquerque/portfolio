import { Link, Paragraph } from '@components'
import { appsImagesSrc } from '@constants'
import { useMediaQuery } from '@hooks'
import Image from 'next/image'
import { Container, Content, Wrapper } from './styles'

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

  const { isMobile } = useMediaQuery()

  return (
    <Container>
      <Content
        style={{
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        <Image
          src={imageSrc}
          objectFit="cover"
          width={40}
          height={40}
          alt={name}
        />

        <Wrapper>
          <Link
            href={url}
            isTargetBlank
            {...{
              color: 'gray50',
              textDecoration: 'none',
            }}
          >
            {name}
          </Link>
          {!isMobile && <Paragraph fontSize="sm">{description}</Paragraph>}
        </Wrapper>
      </Content>
    </Container>
  )
}

export { AppCard }
