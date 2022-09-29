import { styled } from 'stitches.config'

const Container = styled('div', {})

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  bg: '$gray800',
  border: 'thin solid $gray700',
  br: '$3',
  p: '$3',
  w: '100%',
  minW: '22rem',
  transition: 'filter 0.2s',
  '&:hover': {
    filter: 'brightness(0.9)',
  },
})

const Header = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',

  strong: {
    color: '$white',
    fontWeight: '$medium',
    fontSize: '$3',
    '&:hover': {
      color: 'inherit',
    },
  },
})
const Forked = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  span: {
    fontSize: '$1',
    color: '$gray300',
  },
})

const Description = styled('p', {
  fontSize: '$2',
  color: '$gray300',
  lineHeight: '$3',
  flex: '1',
  pr: '$3',
})

const Language = styled('div', {
  display: 'flex',
  flexDirection: 'row',

  span: {
    fontSize: '$1',
    color: '$gray300',
  },
})

const License = styled(Language, {
  alignItems: 'center',
  gap: '$1',
})

const ForkCount = styled(License, {})

const StargazerCount = styled(License, {})

const Updated = styled(License, {})

const Footer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$3',
})

export {
  Container,
  Content,
  Header,
  Forked,
  Description,
  Footer,
  Language,
  License,
  ForkCount,
  StargazerCount,
  Updated,
}
