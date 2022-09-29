import { styled, VariantProps } from '@stitches/react'
import NextLink from 'next/link'
import { forwardRef, ForwardRefRenderFunction, ReactNode } from 'react'
import { Anchor } from './styles'

const { defaultProps } = styled('a')

type Props = VariantProps<typeof Anchor> &
  typeof defaultProps & {
    children: ReactNode
    hasURL?: boolean
    isTargetBlank?: boolean
  }

const LinkBase: ForwardRefRenderFunction<HTMLAnchorElement, Props> = (
  { children, href = '', hasURL = true, isTargetBlank = false, ...rest },
  ref
) => {
  return (
    <NextLink href={href} passHref>
      <Anchor
        ref={ref}
        {...rest}
        hasURL={hasURL}
        target={isTargetBlank ? '_blank' : ''}
      >
        {children}
      </Anchor>
    </NextLink>
  )
}

const Link = forwardRef(LinkBase)

export { Link }
