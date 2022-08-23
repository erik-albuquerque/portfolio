import { createStitches, PropertyValue } from '@stitches/react'

type ConfigType = Parameters<typeof createStitches>[0] & {}

const config: ConfigType = {
  theme: {
    colors: {
      white: '#f2f2f2',
      gray50: '#EAEAEA',
      gray300: '#8B949E',
      gray400: '#848484',
      gray700: '#242424',
      gray800: '#212024',
      gray900: '#151417',
      blue100: '#AEC5EB',
      blue500: '#3178C6',
    },
    fonts: {
      inter: 'Inter, sans-serif',
    },
    fontSizes: {
      1: '0.75rem', // 12px
      2: '0.875rem', // 14px
      3: '1rem', // 16px
      4: '1.25rem', // 20px
      5: '1.5rem', // 24px
      6: '2rem', // 32px
      7: '3rem', // 46px
    },
    space: {
      1: '0.25rem', // 4px
      2: '0.5rem', // 8px
      3: '1rem', // 16px
      4: '2rem', // 32px
      5: '4rem', // 64x
      6: '8rem', // 126px
    },
    sizes: {
      1: '0.25rem', // 4px
      2: '0.5rem', // 8px
      3: '1rem', // 16px
      4: '2rem', // 32px
      5: '4rem', // 64x
      6: '8rem', // 126px
    },
    radii: {
      1: '0.125rem', // 2px
      2: '0.25rem', // 4px
      3: '0.5rem', // 8px
      4: '1rem', // 16px
      round: '100%',
    },
    fontWeights: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  utils: {
    p: (value: PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    w: (value: PropertyValue<'width'>) => ({
      width: value,
    }),
    h: (value: PropertyValue<'height'>) => ({
      height: value,
    }),
    minW: (value: PropertyValue<'minWidth'>) => ({
      minWidth: value,
    }),
    maxW: (value: PropertyValue<'maxWidth'>) => ({
      maxWidth: value,
    }),
    minH: (value: PropertyValue<'minHeight'>) => ({
      minHeight: value,
    }),
    maxH: (value: PropertyValue<'maxHeight'>) => ({
      maxHeight: value,
    }),
    size: (value: PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),
    br: (value: PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    bg: (value: PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
  },
  media: {
    sm: '(min-width: 320px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1200px)',
  },
}

const { css, globalCss, keyframes, styled, theme, getCssText, createTheme } =
  createStitches(config)

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: '$inter',
    bg: '$gray900',
  },
  button: {
    cursor: 'pointer',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
})

export { css, globalStyles, keyframes, styled, theme, getCssText, createTheme }
