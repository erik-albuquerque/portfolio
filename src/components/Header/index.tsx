/* eslint-disable react-hooks/exhaustive-deps */
import { ActiveLink, Link } from '@components'
import { useBirthday } from '@hooks/useBirthday'
import React from 'react'
import { Container, Content } from './styles'

const Header: React.FC = () => {
  const { isBirthday, isBirthdayLeft, emojis } = useBirthday()

  const emoji = isBirthday ? emojis[1] : isBirthdayLeft ? emojis[0] : ''

  return (
    <Container>
      <Content>
        <ActiveLink href="/" shouldMatchExactHref passHref>
          <Link
            {...{
              fontWeight: 'regular',
              css: {
                '&:hover': {
                  color: '$white',
                  textDecoration: 'none',
                },
              },
            }}
          >
            Home
          </Link>
        </ActiveLink>
        <ActiveLink href="/projects" passHref>
          <Link
            {...{
              fontWeight: 'regular',
              css: {
                '&:hover': {
                  color: '$white',
                  textDecoration: 'none',
                },
              },
            }}
          >
            Projects
          </Link>
        </ActiveLink>
        <ActiveLink href="/about" passHref>
          <Link
            {...{
              fontWeight: 'regular',
              css: {
                '&:hover': {
                  color: '$white',
                  textDecoration: 'none',
                },
              },
            }}
          >
            About {emoji}
          </Link>
        </ActiveLink>
        <ActiveLink href="/tools" passHref>
          <Link
            {...{
              fontWeight: 'regular',
              css: {
                '&:hover': {
                  color: '$white',
                  textDecoration: 'none',
                },
              },
            }}
          >
            Tools
          </Link>
        </ActiveLink>
      </Content>
    </Container>
  )
}

export { Header }
