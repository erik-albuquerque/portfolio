/* eslint-disable react-hooks/exhaustive-deps */
import { ActiveLink, Link } from '@components'
import { useBirthday } from '@hooks/useBirthday'
import React, { useCallback, useEffect, useState } from 'react'
import { Container, Content } from './styles'

const Header: React.FC = () => {
  const { isBirthday, isBirthdayLeft } = useBirthday()
  const [emoji, setEmoji] = useState('')

  const emojis = ['🎂', '🎉']

  const getEmoji = useCallback(() => {
    if (isBirthday) {
      setEmoji(emojis[1])
    } else if (isBirthdayLeft) {
      setEmoji(emojis[0])
    } else {
      setEmoji('')
    }
  }, [emojis, isBirthday, isBirthdayLeft])

  useEffect(() => {
    getEmoji()
  }, [getEmoji])

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
