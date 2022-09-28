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

const Paragraph = styled('p', {
  color: '$gray400',
  fontSize: '$3',
  fontWeight: '$regular',

  b: {
    fontWeight: '$regular',
    color: '$white',
  },

  variants: {
    lineHeight: {
      xs: {
        lineHeight: '$2',
      },
      sm: {
        lineHeight: '$3',
      },
      md: {
        lineHeight: '$4',
      },
      lg: {
        lineHeight: '$5',
      },
    },
  },
})

const Link = styled('a', {
  color: '$white',
  textDecoration: 'underline',
  alignSelf: 'flex-start',
  transition: 'color 0.2s',
  '&:hover': {
    color: '$gray400',
  },
})

export { Container, Content, Wrapper, Section, Paragraph, Link, Apps, Setup }
