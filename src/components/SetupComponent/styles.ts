import { styled } from 'stitches.config'

const Container = styled('div', {})

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  strong: {
    color: '$gray50',
    fontWeight: '$medium',
  },
})

export { Container, Content }
