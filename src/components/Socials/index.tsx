import { Icon, Link, Tooltip } from '@components'
import { Container, Content } from './styles'

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
            <Link key={social.name} href={social.url} isTargetBlank>
              <Tooltip
                side="top"
                triggerChildren={
                  <div>
                    <Icon name={social.name} />
                  </div>
                }
              >
                <a href={social.url}>{social.name}</a>
              </Tooltip>
            </Link>
          ))}
      </Content>
    </Container>
  )
}

export { Socials }
