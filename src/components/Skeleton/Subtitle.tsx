import { COLORS } from '@styles/skeleton'
import ContentLoader, { IContentLoaderProps } from 'react-content-loader'

type Props = IContentLoaderProps & {
  width: number
  height: number
}

const Subtitle: React.FC<Props> = ({ width, height, ...rest }: Props) => {
  return (
    <ContentLoader
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      speed={2}
      backgroundColor={COLORS.BACKGROUND}
      foregroundColor={COLORS.FOREGROUND}
      {...rest}
    >
      <rect rx="5" ry="5" width={width - 11} height={height - 10} />
    </ContentLoader>
  )
}

export { Subtitle }
