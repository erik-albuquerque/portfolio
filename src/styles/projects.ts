import { styled } from 'stitches.config'

const Container = styled('div', {
  maxW: '720px',
  '@sm': {
    mx: '$2',
  },
  '@md': {
    mx: 'auto',
  },
})

const Content = styled('main', {
  mt: '$5',
})

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '@sm': {
    gap: '1.5rem',
  },
  '@md': {
    gap: '$4',
  },
})

const Repositories = styled(Wrapper, {
  alignItems: 'flex-start',
  gap: '$3',
})

export { Container, Content, Wrapper, Repositories }
