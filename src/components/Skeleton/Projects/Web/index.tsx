import { Heading } from '../../Heading'
import { Subtitle } from '../../Subtitle'
import { ListRepos } from './ListRepos'
import { MasonryRepos } from './MasonryRepos'

const Web: React.FC = () => {
  return (
    <>
      <Heading width={220} height={67} />

      <Subtitle width={156} height={34} />

      <MasonryRepos />

      <ListRepos />
    </>
  )
}

export { Web }
