import { ActiveLink } from '@components'
import React from 'react'
import { Container, Content, Link } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <ActiveLink href="/projects" passHref>
          <Link>Projects</Link>
        </ActiveLink>
        <ActiveLink href="/about" passHref>
          <Link>About</Link>
        </ActiveLink>
        <ActiveLink href="/tools" passHref>
          <Link>Tools</Link>
        </ActiveLink>
      </Content>
    </Container>
  )
}

export { Header }
