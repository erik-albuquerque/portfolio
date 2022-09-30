import { styled } from 'stitches.config'

const Container = styled('article', {})

const Content = styled('div', {
  w:'100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  '@sm': {
    ml: 0,
  },
  '@md': {
    ml: '$3',
  },
})

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '$3',
})

const Header = styled('header', {
  h1: {
    color: '$gray50',
    '@sm': {
      fontSize: '$4',
      ml: '$3',
    },
    '@md': {
      fontSize: '$4',
      ml: 0,
    },
  },
})

export { Container, Content, Wrapper, Header }
