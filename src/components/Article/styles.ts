import { styled } from '../../../stitches.config'

const Container = styled('article', {})

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  ml: '$3',
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
    fontSize: '$4',
  },
})

export { Container, Content, Wrapper, Header }
