import { styled } from 'stitches.config'

const Container = styled('div', {
  maxW: '1120px',
  mx: 'auto',
})

const Content = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  mt: '$6',
})

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '$3',
})

const Paragraph = styled('span', {
  color: '$gray400',
  fontSize: '$3',
  lineHeight: '$3',
})

export { Container, Content, Wrapper, Paragraph }
