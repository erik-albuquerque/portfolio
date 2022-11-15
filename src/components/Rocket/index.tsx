import { useMediaQuery } from '@hooks'
import { /*CSS,*/ keyframes } from '@stitches/react'
import { useCallback, useEffect, useState } from 'react'
import { Container, Content } from './styles'

const Rocket: React.FC = () => {
  const { isMobile } = useMediaQuery()

  const [isFly, setIsFly] = useState(false)
  // const [isPreFly, setIsPreFly] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  let flyTimeout: NodeJS.Timeout

  // let preFlyTimeout: NodeJS.Timeout
  // let cssAnimation: CSS = {}

  const FLY_ANIMATION_DURATION = 1000

  const imageWidth = 24
  const imageHeight = 24

  const handleFly = useCallback((value: boolean) => {
    setIsFly(value)
  }, [])

  const handleHovering = useCallback((value: boolean) => {
    setIsHovering(value)
  }, [])

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const scaleUp = keyframes({
    '0%': { transform: 'scale(1)', opacity: 1 },
    '25%': { transform: 'scale(1.2)', opacity: 0.7 },
    '50%': { transform: 'scale(1)', opacity: 1 },
    '75%': { transform: 'scale(1.2)', opacity: 0.7 },
    '100%': { transform: 'scale(1)', opacity: 1 },
  })

  // const preFly = keyframes({
  //   '10%, 90%': {
  //     transform: 'translate3d(-1px, 0, 0)',
  //   },

  //   '20%, 80%': {
  //     transform: 'translate3d(1px, 0, 0)',
  //   },

  //   '30%, 50%, 70%': {
  //     transform: 'translate3d(-1px, 0, 0)',
  //   },

  //   '40%, 60%': {
  //     transform: 'translate3d(1px, 0, 0)',
  //   },
  // })

  const fly = keyframes({
    '0%': { bottom: 0, opacity: 1 },
    '100%': { bottom: '98%', opacity: 0 },
  })

  // const preFlyAnimation =
  //   isFly === false || isHovering ? `${preFly} 500ms` : undefined

  const flyAnimation =
    isFly || isHovering ? `${fly} ${FLY_ANIMATION_DURATION}ms` : undefined

  const scaleUpAnimation =
    isFly === false ? `${scaleUp} 2s infinite` : undefined

  // cssAnimation = isFly
  //   ? { animation: flyAnimation }
  //   : { animation: preFlyAnimation }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    flyTimeout = setTimeout(() => {
      if (isFly) handleFly(false)
    }, FLY_ANIMATION_DURATION)

    return () => clearTimeout(flyTimeout)
  }, [isFly])

  return (
    <Container>
      <Content
        onClick={() => {
          handleFly(true)
          handleGoToTop()
        }}
        onMouseOver={() => !isMobile && handleHovering(true)}
        onMouseLeave={() => !isMobile && handleHovering(false)}
        css={{
          animation: flyAnimation,
          '&:hover': !isMobile && {
            animation: scaleUpAnimation,
          },
          // ...cssAnimation,
        }}
      >
        <svg
          width={imageWidth}
          height={imageHeight}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 28H14"
            stroke="#EAEAEA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.3749 2.47496C12.9999 4.37496 5.06243 11.975 11.9999 24H19.9999C26.7999 11.975 18.9749 4.38746 16.6249 2.47496C16.4496 2.32851 16.2284 2.24829 15.9999 2.24829C15.7715 2.24829 15.5503 2.32851 15.3749 2.47496Z"
            fill="#EAEAEA"
            stroke="#EAEAEA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.23769 13.925L5.31269 18.625C5.21381 18.7404 5.14404 18.8778 5.10924 19.0257C5.07444 19.1736 5.07562 19.3277 5.11269 19.475L6.65019 26.4375C6.68729 26.603 6.76587 26.7564 6.87855 26.8832C6.99123 27.0099 7.1343 27.1059 7.2943 27.1622C7.45431 27.2184 7.62599 27.2331 7.79321 27.2047C7.96043 27.1763 8.11768 27.1059 8.25019 27L12.0002 24"
            fill="#EAEAEA"
          />
          <path
            d="M9.23769 13.925L5.31269 18.625C5.21381 18.7404 5.14404 18.8778 5.10924 19.0257C5.07444 19.1736 5.07562 19.3277 5.11269 19.475L6.65019 26.4375C6.68729 26.603 6.76587 26.7564 6.87855 26.8832C6.99123 27.0099 7.1343 27.1059 7.2943 27.1622C7.45431 27.2184 7.62599 27.2331 7.79321 27.2047C7.96043 27.1763 8.11768 27.1059 8.25019 27L12.0002 24"
            stroke="#EAEAEA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6875 13.825L26.6875 18.625C26.7864 18.7403 26.8561 18.8777 26.8909 19.0256C26.9257 19.1735 26.9246 19.3276 26.8875 19.475L25.35 26.4375C25.3129 26.6029 25.2343 26.7563 25.1216 26.8831C25.009 27.0098 24.8659 27.1058 24.7059 27.1621C24.5459 27.2184 24.3742 27.233 24.207 27.2046C24.0398 27.1763 23.8825 27.1058 23.75 27L20 24"
            fill="#EAEAEA"
          />
          <path
            d="M22.6875 13.825L26.6875 18.625C26.7864 18.7403 26.8561 18.8777 26.8909 19.0256C26.9257 19.1735 26.9246 19.3276 26.8875 19.475L25.35 26.4375C25.3129 26.6029 25.2343 26.7563 25.1216 26.8831C25.009 27.0098 24.8659 27.1058 24.7059 27.1621C24.5459 27.2184 24.3742 27.233 24.207 27.2046C24.0398 27.1763 23.8825 27.1058 23.75 27L20 24"
            stroke="#EAEAEA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 13.5C16.8284 13.5 17.5 12.8284 17.5 12C17.5 11.1716 16.8284 10.5 16 10.5C15.1716 10.5 14.5 11.1716 14.5 12C14.5 12.8284 15.1716 13.5 16 13.5Z"
            fill="#121214"
          />
        </svg>
      </Content>
    </Container>
  )
}

export { Rocket }
