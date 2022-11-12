import { Link, Paragraph } from '@components'
import { useMediaQuery } from '@hooks'
import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
import dataJson from '../../../data.json'
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
  const [isHovering, setIsHovering] = useState(false)

  const appsImagesSrcWithType = dataJson.appsImagesSrc as {
    [key: string]: string
  }

  const imageSrc = appsImagesSrcWithType[name]

  const { isMobile } = useMediaQuery()

  const linkRef = useRef<HTMLAnchorElement>(null)

  const simulateClickOnLink = () => {
    if (linkRef.current) {
      linkRef.current.click()
    }
  }

  const handleHover = useCallback((value: boolean) => setIsHovering(value), [])

  return (
    <Container
      onClick={simulateClickOnLink}
      onMouseOver={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <Content
        style={{
          flexDirection: isMobile ? 'column' : 'row',
        }}
        onMouseOver={() => handleHover(true)}
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
            ref={linkRef}
            href={url}
            isTargetBlank
            {...{
              color: isHovering ? 'blue100' : 'gray50',
              textDecoration: isHovering ? 'underline' : 'none',
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
