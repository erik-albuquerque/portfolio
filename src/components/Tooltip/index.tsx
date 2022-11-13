import * as RadixTooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'

type Props = RadixTooltip.TooltipProps & {
  children: ReactNode
  triggerChildren: ReactNode
  side?: "bottom" | "left" | "right" | "top" | undefined
}

const Tooltip = ({ children, triggerChildren, side = 'right', ...rest }: Props) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root {...rest}>
        <RadixTooltip.Trigger asChild>{triggerChildren}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            side={side}
            style={{
              borderRadius: '4px',
              padding: '6px',
              lineHeight: 1,
              backgroundColor: 'white',
              boxShadow:
                'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
              userSelect: 'none',
              animationDuration: '100ms',
              animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              willChange: 'transform, opacity',
              margin: '8px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {children}
            <RadixTooltip.Arrow style={{ fill: 'white' }} />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

export { Tooltip }
