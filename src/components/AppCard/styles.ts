import { styled } from 'stitches.config'

const Container = styled('div', {
  maxW: '305px',
})

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  userSelect: 'none',
  cursor: 'pointer',
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


export { Container, Content, Wrapper }
