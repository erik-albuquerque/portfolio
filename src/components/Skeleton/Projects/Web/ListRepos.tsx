import { COLORS } from '@styles/skeleton'
import ContentLoader from 'react-content-loader'

const ListRepos: React.FC = () => {
  return (
    <ContentLoader
      viewBox="0 0 173 269"
      height={269}
      width={173}
      speed={2}
      backgroundColor={COLORS.BACKGROUND}
      foregroundColor={COLORS.FOREGROUND}
    >
      <rect rx="5" ry="5" width="112" height="24" />

      <rect x="20" y="46" rx="5" ry="5" width="74" height="19" />
      <rect x="20" y="76" rx="5" ry="5" width="30" height="19" />
      <rect x="20" y="106" rx="5" ry="5" width="113" height="19" />
      <rect x="20" y="136" rx="5" ry="5" width="68" height="19" />
      <rect x="20" y="166" rx="5" ry="5" width="70" height="19" />
      <rect x="20" y="196" rx="5" ry="5" width="59" height="19" />
      <rect x="20" y="226" rx="5" ry="5" width="145" height="19" />
    </ContentLoader>
  )
}

export { ListRepos }

