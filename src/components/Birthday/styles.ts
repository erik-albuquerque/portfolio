import { styled } from 'stitches.config'

const Container = styled('div', {})

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$1',
})

const Trigger = styled('div', {
  cursor: 'pointer',
  transition: 'filter 0.2s',
  '&:hover': {
    filter: 'brightness(0.9)',
  },
})

export { Container, Content, Trigger }
