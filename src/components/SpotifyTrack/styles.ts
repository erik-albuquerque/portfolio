import { styled } from 'stitches.config'

const Container = styled('div', {})

const Content = styled('div', {
  w: '300px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$3',
  p: '$2',
  borderRadius: '$3',
  bg: '$gray800',
  img: {
    borderRadius: '$3',
    objectFit: 'cover',
  },
})

const Artists = styled('div', {
  color: '$gray300',
})

const Infos = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})

const Icon = styled('div', {
  justifySelf: 'flex-end',
  alignSelf: 'flex-start',
  // position: 'absolute',
  // top: '$2',
  // right: '$3'
})

export { Container, Content, Infos, Artists, Icon }
