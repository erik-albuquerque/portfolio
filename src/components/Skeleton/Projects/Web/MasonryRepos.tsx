import { COLORS } from '@styles/skeleton'
import ContentLoader from 'react-content-loader'

const MasonryRepos: React.FC = () => {
  return (
    <ContentLoader
      viewBox="0 0 734 305"
      height={305}
      width={734}
      speed={2}
      backgroundColor={COLORS.BACKGROUND}
      foregroundColor={COLORS.FOREGROUND}
      style={{
        marginLeft: 16
      }}
    >
      <rect rx="10" ry="10" width="352" height="172"/>
      <rect x="370" rx="10" ry="10" width="352" height="134" />
      <rect y="190" rx="10" ry="10" width="352" height="108" />
      <rect x="370" y="150" rx="10" ry="10" width="352" height="134" />
    </ContentLoader>
  )
}

export { MasonryRepos }
