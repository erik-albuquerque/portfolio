import { styled } from 'stitches.config'

const Container = styled('div', {
  alignSelf: 'center',
})

const Content = styled('main', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3',
})

const Link = styled('a', {
  svg: {
    transition: 'fill 0.2s',
    '&:hover': {
      fill: '$white',
    },
  },
})

export { Container, Content, Link }
