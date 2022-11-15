import { styled } from 'stitches.config'

const Container = styled('div', {
  maxW: '963px',
  position: 'relative',
  '@sm': {
    mx: '$3'
  },
  '@md': {
    mx: '$4'
  },
  '@lg': {
    mx: 'auto',
  },
})

const Content = styled('main', {
  display: 'flex',
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

const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

const Apps = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '$3',
  mt: '$3'
})

const Setup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  mt: '$3'
})

export { Container, Content, Wrapper, Section, Apps, Setup }
