import { styled } from 'stitches.config'

const Container = styled('div', {
  maxW: '1120px',
  mx: 'auto',
})

const Content = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4',
  mt: '2rem',
})

export { Container, Content }
