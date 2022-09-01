import { Icon } from '@components'
import { Container, Content, Link } from './styles'

type Social = {
  name: string
  url: string
}

type SocialsProps = {
  data: Social[]
}

const Socials: React.FC<SocialsProps> = ({ data }: SocialsProps) => {
  return (
    <Container>
      <Content>
        {data.length > 0 &&
          data.map((social) => (
            <Link key={social.name} href={social.url} target="_blank">
              <Icon name={social.name} />
            </Link>
          ))}
      </Content>
    </Container>
  )
}

export { Socials }
