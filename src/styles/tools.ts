import { styled } from 'stitches.config'

const Container = styled('div', {
  maxW: '963px',
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
