import { Heading } from '../../Heading'
import { Subtitle } from '../../Subtitle'
import { ListRepos } from '../ListRepos'
import { MasonryRepos } from '../MasonryRepos'

const Mobile: React.FC = () => {
  return (
    <>
      <Heading width={150} height={48} />

      <Subtitle
        width={156}
        height={34}
        style={{
          marginLeft: 16,
        }}
      />

      <MasonryRepos isMobile />

      <ListRepos isMobile />
    </>
  )
}

export { Mobile }
