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

export { Container, Content }
