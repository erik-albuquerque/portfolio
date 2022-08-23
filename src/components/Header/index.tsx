import Link from 'next/link'
import React from 'react'
import { Container, Content } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link href="/projects" passHref>
          <a>Projects</a>
        </Link>
        <Link href="/about" passHref>
          <a>About</a>
        </Link>
        <Link href="/tools" passHref>
          <a>Tools</a>
        </Link>
      </Content>
    </Container>
  )
}

export { Header }
