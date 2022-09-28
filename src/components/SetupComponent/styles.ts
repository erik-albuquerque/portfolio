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

const Link = styled('a', {
  color: '$gray400',
  fontSize: '$2',
  alignSelf: 'flex-start',
  transition: 'color 0.2s',
  variants: {
    isUrl: {
      true: {
        textDecoration: 'underline',
        cursor: 'pointer',
        '&:hover': {
          color: '$gray300',
        },
      },
      false: {
        textDecoration: 'none',
        cursor: 'default',
      },
    },
  },
})

export { Container, Content, Link }
