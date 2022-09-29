import { styled } from 'stitches.config'

const Container = styled('div', {})

const Content = styled('div', {})

const P = styled('p', {
  color: '$gray400',
 
  b: {
    color: '$white',
  },

  variants: {
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
    fontSize: {
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
    lineHeight: {
      xs: {
        lineHeight: '$2',
      },
      sm: {
        lineHeight: '$3',
      },
      md: {
        lineHeight: '$4',
      },
      lg: {
        lineHeight: '$5',
      },
    },
    isChildrenBold: {
      true: {
        b: {
          fontWeight: '$bold',
        },
      },
      false: {
        b: {
          fontWeight: '$regular',
        },
      },
    },
  },
  defaultVariants: {
    fontSize: 'md',
    fontWeight: 'regular',
    lineHeight: 'md',
    isChildrenBold: 'true',
  },
})


export { Container, Content, P }
