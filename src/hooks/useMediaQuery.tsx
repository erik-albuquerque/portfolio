import { useMediaQuery as mediaQuery } from 'usehooks-ts'

const useMediaQuery = () => {
  const isMobile = mediaQuery('(min-width: 768px)')

  return { isMobile }
}

export { useMediaQuery }
