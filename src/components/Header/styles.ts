import { styled } from 'stitches.config'

const Container = styled('div', {
  maxW: '1120px',
  mx: 'auto',
})

const Content = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4',
  mt: '2rem',
})

const Link = styled('a', {
  color: '$gray400',
  fontSize: '$3',
  transition: 'color 0.2s',
  '&.active': {
    color: '$white',
    '&:hover': {
      filter: 'brightness(0.95)',
    },
  },
  '&:hover': {
    color: '$white',
  },
})

export { Container, Content, Link }
