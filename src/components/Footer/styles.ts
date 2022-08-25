import { styled } from '../../../stitches.config'

const Container = styled('footer', {
  maxW: '720px',
  mx: 'auto',
})

const Content = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mt: '$5',
  mb: '$4',
})

const Text = styled('span', {
  color: '$gray400',
  fontSize: '$2',
})

export { Container, Content, Text }
