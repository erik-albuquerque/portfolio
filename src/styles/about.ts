import { darken } from 'polished'
import { styled } from 'stitches.config'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  maxW: '820px',
  '@sm': {
    mx: '$3',
  },
  '@md': {
    mx: 'auto',
  },
})

const Content = styled('main', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '$5',
  mt: '$5',
})

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  w: '100%',
  '@sm': {
    gap: '1.5rem',
  },
  '@md': {
    gap: '$4',
  },
})

const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

const Career = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  strong: {
    color: '$white',
  },
})

const Certificate = styled(Career, {
  alignItems: 'flex-start',
})

const AboutSite = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

const Skills = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '$2',
})

const Skill = styled('strong', {
  color: '$gray300',
  textDecoration: 'underline',
  fontSize: '$3',
  transition: 'color 0.2s',
  '&:hover': {
    color: darken(0.2, '#8B949E'),
  },
})

const Avatar = styled('img', {
  br: '$3',
  variants: {
    size: {
      sm: {
        size: '12.5rem',
      },
      md: {
        size: '18.75rem',
      },
      lg: {
        size: '25rem',
      },
    },
  },
})

export {
  Container,
  Content,
  Wrapper,
  Section,
  Career,
  Certificate,
  Skill,
  Skills,
  AboutSite,
  Avatar,
}
