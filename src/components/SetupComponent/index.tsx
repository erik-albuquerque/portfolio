import { Link } from '@components'
import { Container, Content } from './styles'

type Props = {
  data: {
    title: string
    description: string
    url: string
  }
}

const SetupComponent: React.FC<Props> = ({ data }) => {
  const { title, description, url } = data

  return (
    <Container>
      <Content>
        <strong>{title}</strong>
        <Link
          href={url}
          isTargetBlank
          hasURL={!!url}
          {...{
            color: 'blue100',
            fontSize: 'sm',
            css: {
              alignSelf: 'flex-start',
            },
          }}
        >
          {description}
        </Link>
      </Content>
    </Container>
  )
}

export { SetupComponent }
