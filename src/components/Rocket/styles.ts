import { styled } from 'stitches.config'

const Container = styled('div', {})

const Content = styled('div', {
  position: 'absolute',
  bottom: 0,
  userSelect: 'none',

  '@sm': {
    right: '$3',
    bottom: '-$1',
  },
  '@md': {
    right: '64px',
  },
  '@lg': {
    right: '-64px',
  },
  svg: {
    cursor: 'pointer',
    // transition: 'opacity 0.2s',
    // '&:hover': {
    //   opacity: '0.7',
    // },
  },
})

export { Container, Content }
