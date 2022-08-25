import { styled } from '../../stitches.config'

const Container = styled('div', {
  maxW: '650px',
  mx: 'auto',
})

const Content = styled('main', {
  display: 'flex',
  mt: '$5',
})

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '$4',
})

const Link = styled('a', {
  color: '$white',
  fontSize: '$3',
  fontWeight: '$medium',
  textDecoration: 'underline',
  transition: 'color 0.2s',
  '&:hover': {
    color: '$gray400',
  },
})

export { Container, Content, Wrapper, Link }
