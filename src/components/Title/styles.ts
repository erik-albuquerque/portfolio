import { styled } from 'stitches.config'

const Container = styled('div', {})

const Text = styled('h1', {
  fontWeight: '$bold',
  color: '$gray50',
  '@sm': {
    fontSize: '$6',
  },
  '@md': {
    fontSize: '$7',
  }
})

export { Container, Text }
