import * as Ai from 'react-icons/ai'
import { Container, Content, Link } from './styles'

type Social = {
  name: string
  url: string
}

type SocialsProps = {
  data: Social[]
}

const Socials: React.FC<SocialsProps> = ({ data }: SocialsProps) => {
  const GetIcon = (IconName: string) => {
    const AiIcons = Object.values(Ai)

    const Icons = AiIcons.filter((_, i) =>
      AiIcons[i].name.includes(`AiFill${IconName}`)
    )

    const Icon = Icons[0]
    const IconSquare = Icons[1]

    if (IconSquare) return <IconSquare size={24} color="#848484" />

    return <Icon size={24} color="#848484" />
  }

  return (
    <Container>
      <Content>
        {data.length > 0 &&
          data.map((social) => (
            <Link key={social.name} href={social.url} target="_blank">
              {GetIcon(social.name)}
            </Link>
          ))}
      </Content>
    </Container>
  )
}

export { Socials }
