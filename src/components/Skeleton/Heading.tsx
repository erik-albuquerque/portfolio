import { COLORS } from '@styles/skeleton'
import ContentLoader from 'react-content-loader'

type Props = {
  width: number
  height: number
}

const Heading: React.FC<Props> = ({ width, height }: Props) => {
  return (
    <ContentLoader
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      speed={2}
      backgroundColor={COLORS.BACKGROUND}
      foregroundColor={COLORS.FOREGROUND}
    >
      <rect
        rx="5"
        ry="5"
        width={width - 11}
        height={height - 9}
      />
    </ContentLoader>
  )
}

export { Heading }
