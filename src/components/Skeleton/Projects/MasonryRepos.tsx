import { COLORS } from '@styles/skeleton'
import ContentLoader from 'react-content-loader'

type Props = {
  isMobile?: boolean
}

const MasonryRepos: React.FC<Props> = ({ isMobile = false }: Props) => {
  const width = isMobile ? '100%' : 734
  const height = isMobile ? 662 : 305

  return (
    <ContentLoader
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      speed={2}
      backgroundColor={COLORS.BACKGROUND}
      foregroundColor={COLORS.FOREGROUND}
      style={
        isMobile
          ? {
            marginTop: -16
          }
          : {
              marginLeft: 16,
            }
      }
    >
      {isMobile ? (
        <>
          <rect x="0" y="0" rx="10" ry="10" width="100%" height="181" />
          <rect x="0" y="194" rx="10" ry="10" width="100%" height="139" />
          <rect x="0" y="347" rx="10" ry="10" width="100%" height="139" />
          <rect x="0" y="502" rx="10" ry="10" width="100%" height="139" />
        </>
      ) : (
        <>
          <rect rx="10" ry="10" width="352" height="172" />
          <rect x="370" rx="10" ry="10" width="352" height="134" />
          <rect y="190" rx="10" ry="10" width="352" height="108" />
          <rect x="370" y="150" rx="10" ry="10" width="352" height="134" />
        </>
      )}
    </ContentLoader>
  )
}

export { MasonryRepos }
