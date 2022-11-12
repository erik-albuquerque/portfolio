import { Track } from '@types'
import { hasPassedAnHour } from '@utils'
import { GetServerSidePropsContext } from 'next'
import nookies from 'nookies'
import SpotifyWebApi from 'spotify-web-api-node'

let lastRefreshToken = new Date(0)

const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN

const clientId = process.env.SPOTIFY_CLIENT_ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

const credentials = {
  refreshToken,
  clientId,
  clientSecret,
}

const spotifyApi = new SpotifyWebApi()

spotifyApi.setCredentials(credentials)

// Retrieve an access token.

const refreshAccessToken = async (ctx: GetServerSidePropsContext) => {
  if (!hasPassedAnHour(lastRefreshToken)) return

  const { res } = ctx

  try {
    const spotifyAccessToken = await spotifyApi.refreshAccessToken()

    nookies.set({ res }, 'PLAYER_AT', spotifyAccessToken.body.access_token, {
      httpOnly: true,
      maxAge: 60 * 60, // 3600 min = 1 hour
      path: '/',
    })

    spotifyApi.setAccessToken(spotifyAccessToken.body.access_token)

    lastRefreshToken = new Date()
  } catch (error) {
    console.error(
      'Something went wrong when retrieving an access token: ',
      error
    )
  }
}

const getMyCurrentPlayingTrack = async () => {
  const currentPlayingTrack = await spotifyApi.getMyCurrentPlayingTrack()

  if (currentPlayingTrack.body?.item == null) return null
  if (!('artists' in currentPlayingTrack.body?.item)) return null

  const track: Track = {
    isPlaying: currentPlayingTrack.body?.is_playing || false,
    ...currentPlayingTrack.body?.item,
  }

  return track
}

// const getCurrentPlayingTrackState = async () => {
//   const trackState = await spotifyApi.getMyCurrentPlaybackState()

//   return trackState.body
// }

const getCurrentPlayingTrack = async (
  ctx: GetServerSidePropsContext
): Promise<Track | null> => {
  await refreshAccessToken(ctx)

  try {
    return await getMyCurrentPlayingTrack()
  } catch (error) {
    console.error('Spotify API returned an error: ', error)
    return null
  }
}

// const apiCallDelay = (ms: number) =>
//   new Promise((resolve) => setTimeout(resolve, ms))

const updateCurrentPlayingTrack = async (token: string) => {
  spotifyApi.setAccessToken(token)

  try {
    // const currentPlayingTrackState = await getCurrentPlayingTrackState()

    // const timeLeft = (() => {
    //   if (currentPlayingTrackState.item?.duration_ms) {
    //     if (currentPlayingTrackState.progress_ms) {
    //       return (
    //         currentPlayingTrackState.item.duration_ms -
    //         currentPlayingTrackState.progress_ms
    //       )
    //     }
    //   }
    // })()

    // await apiCallDelay(timeLeft)

    return await getMyCurrentPlayingTrack()
  } catch (error) {
    console.error('Something went wrong when update a current track: ', error)
    return null
  }
}

export { getCurrentPlayingTrack, updateCurrentPlayingTrack }
