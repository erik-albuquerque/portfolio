import { darken } from 'polished'
import { styled } from 'stitches.config'

const Container = styled('div', {
  maxW: '305px',
})

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  border: 'thin solid $gray700',
  bg: '$gray800',
  br: '$3',
  p: '$3',
  gap: '$3',
  transition: 'filter 0.2s',
  '&:hover': {
    filter: 'brightness(0.9)',
  },
})

const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: '$1',
})

const Paragraph = styled('p', {
  color: '$gray400',
  fontSize: '$2',
  fontWeight: '$regular',

  b: {
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
  color: '$gray50',
  fontWeight: '$medium',
  fontSize: '$3',
  transition: 'color 0.2s',
  '&:hover': {
    textDecoration: 'underline',
    color: darken(0.1, '#AEC5EB'),
  },
})

export { Container, Content, Link, Paragraph, Wrapper }
