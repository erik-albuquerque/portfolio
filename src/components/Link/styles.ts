import { darken } from 'polished'
import { styled } from 'stitches.config'

const Anchor = styled('a', {
  transition: 'color 0.2s',
  svg: {
    transition: 'fill 0.2s',
    '&:hover': {
      fill: '$white',
    },
  },
  '&.active': {
    color: '$white',
    '&:hover': {
      filter: 'brightness(0.95)',
    },
  },
  variants: {
    color: {
      gray50: {
        color: '$gray50',
      },
      gray400: {
        color: '$gray400',
      },
      blue100: {
        color: '$blue100',
      },
      white: {
        color: '$white',
        '&:hover': {
          color: '$gray400',
        },
      },
    },
    fontSize: {
      xs: {
        '@sm': {
          fontSize: '$2',
        },
        '@md': {
          fontSize: '$1',
        },
      },
      sm: {
        fontSize: '$2',
      },
      md: {
        fontSize: '$3',
      },
      lg: {
        fontSize: '$4',
      },
    },
    fontWeight: {
      regular: {
        fontWeight: '$regular',
      },
      medium: {
        fontWeight: '$medium',
      },
      bold: {
        fontWeight: '$bold',
      },
    },
    textDecoration: {
      none: {
        textDecoration: 'none',
      },
      underline: {
        textDecoration: 'underline',
      },
    },
    hasURL: {
      true: {
        '&:hover': {
          textDecoration: 'underline',
          color: darken(0.1, '#AEC5EB'),
        },
      },
      false: {
        textDecoration: 'none !important',
        cursor: 'default !important',
        color: '$gray400 !important',
        pointerEvents: 'none',
      },
    },
  },
  defaultVariants: {
    color: 'gray400',
    fontSize: 'md',
    fontWeight: 'medium',
    textDecoration: 'none',
  },
})

export { Anchor }
