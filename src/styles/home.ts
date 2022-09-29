import { styled } from 'stitches.config'

const Container = styled('div', {
  maxW: '1120px',
  '@sm': {
    mx: '$4',
  },
  '@md': {
    mx: 'auto',
  },
})

const Content = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  mt: '$6',
})

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '@sm': {
    gap: '$2',
  },
  '@lg': {
    gap: '$3',
  },
})

export { Container, Content, Wrapper }
