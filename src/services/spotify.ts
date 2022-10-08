import { Track } from '@types'
import { hasPassedAnHour } from '@utils'
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

const refreshAccessToken = async () => {
  if (!hasPassedAnHour(lastRefreshToken)) return

  try {
    const spotifyAccessToken = await spotifyApi.refreshAccessToken()

    spotifyApi.setAccessToken(spotifyAccessToken.body.access_token)

    lastRefreshToken = new Date()
  } catch (error) {
    console.error(
      'Something went wrong when retrieving an access token: ',
      error
    )
  }
}

const getCurrentPlayingTrack = async (): Promise<Track | null> => {
  await refreshAccessToken()

  try {
    const currentPlayingTrack = await spotifyApi.getMyCurrentPlayingTrack()

    // console.log('Track[data]: ', currentPlayingTrack.body.item)

    if (currentPlayingTrack.body?.item == null) return null
    if (!('artists' in currentPlayingTrack.body?.item)) return null

    const track: Track = {
      isPlaying: currentPlayingTrack.body?.is_playing || false,
      ...currentPlayingTrack.body?.item,
    }

    return track
  } catch (error) {
    console.error('Spotify API returned an error: ', error)
    return null
  }
}

export { getCurrentPlayingTrack }
