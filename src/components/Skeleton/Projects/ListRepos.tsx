import { COLORS } from '@styles/skeleton'
import ContentLoader from 'react-content-loader'

type Props = {
  isMobile?: boolean
}

const ListRepos: React.FC<Props> = ({ isMobile = false }: Props) => {
  return (
    <ContentLoader
      viewBox="0 0 173 269"
      height={269}
      width={173}
      speed={2}
      backgroundColor={COLORS.BACKGROUND}
      foregroundColor={COLORS.FOREGROUND}
    >
      <rect x={isMobile ? 16 : 0} rx="5" ry="5" width="112" height="24" />

      <rect x={isMobile ? 0 : 20} y="46" rx="5" ry="5" width="74" height="19" />
      <rect x={isMobile ? 0 : 20} y="80" rx="5" ry="5" width="30" height="19" />
      <rect
        x={isMobile ? 0 : 20}
        y="116"
        rx="5"
        ry="5"
        width="113"
        height="19"
      />
      <rect
        x={isMobile ? 0 : 20}
        y="150"
        rx="5"
        ry="5"
        width="68"
        height="19"
      />
      <rect
        x={isMobile ? 0 : 20}
        y="186"
        rx="5"
        ry="5"
        width="70"
        height="19"
      />
      <rect
        x={isMobile ? 0 : 20}
        y="220"
        rx="5"
        ry="5"
        width="59"
        height="19"
      />
      <rect
        x={isMobile ? 0 : 20}
        y="250"
        rx="5"
        ry="5"
        width="145"
        height="19"
      />
    </ContentLoader>
  )
}

export { ListRepos }
