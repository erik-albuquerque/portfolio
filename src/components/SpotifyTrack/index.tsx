/* eslint-disable @next/next/no-img-element */
import { Link } from '@components'
import { Track } from '@types'
import { Fragment } from 'react'
import { BsSpotify } from 'react-icons/bs'
import { Artists, Container, Content, Icon, Infos } from './styles'
type Props = {
  track: Track
}

const SpotifyTrack: React.FC<Props> = ({ track }: Props) => {
  const { album, artists } = track
  const albumCover = album.images[2] ? album.images[2] : album.images[0]

  const truncate = (srt: string) =>
    srt.length > 20 ? `${srt.substring(0, 21)}...` : srt

  return (
    <Container>
      <Content>
        <img
          src={albumCover.url}
          width={albumCover.width}
          height={albumCover.height}
          alt={track.name}
        />

        <Infos>
          <Link
            href={track.external_urls.spotify}
            isTargetBlank
            {...{
              color: 'white',
              fontWeight: 'medium',
            }}
          >
            <span>{truncate(track.name)}</span>
          </Link>

          <Artists>
            {artists.length > 0 &&
              artists.map((artist) => (
                <Fragment key={artist.id}>
                  <Link
                    href={artist.external_urls.spotify}
                    isTargetBlank
                    {...{
                      color: 'gray300',
                      fontWeight: 'medium',
                      fontSize: 'sm',
                    }}
                  >
                    {truncate(artist.name)}
                  </Link>
                  {artists.length > 1 && ', '}
                </Fragment>
              ))}
          </Artists>

          <Link
            href={track.album.external_urls.spotify}
            isTargetBlank
            {...{
              color: 'gray400',
              fontSize: 'xs',
            }}
          >
            {truncate(track.album.name)}
          </Link>
        </Infos>

        <Icon>
          <Link href={track.external_urls.spotify} isTargetBlank>
            <BsSpotify size={16} color="#f2f2f2" />
          </Link>
        </Icon>
      </Content>
    </Container>
  )
}

export { SpotifyTrack }
