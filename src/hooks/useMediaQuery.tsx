import { useMediaQuery as mediaQuery } from 'usehooks-ts'

const useMediaQuery = () => {
  const isMobile = mediaQuery('(max-width: 768px)')

  return { isMobile }
}

export { useMediaQuery }
