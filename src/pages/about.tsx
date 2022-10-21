import {
  Article,
  Layout,
  Link,
  Paragraph,
  Socials,
  SpotifyTrack,
  Title
} from '@components'
import {
  career,
  certifications,
  portfolio,
  skills,
  socials,
  techs
} from '@constants'
import { useMediaQuery } from '@hooks'
import { getCurrentPlayingTrack, updateCurrentPlayingTrack } from '@services'
import {
  AboutSite,
  Avatar,
  Career,
  Certificate,
  Container,
  Content,
  Section,
  Skill,
  Skills,
  Wrapper
} from '@styles/about'
import { Track } from '@types'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { parseCookies } from 'nookies'
import { Fragment, ReactElement, useEffect, useState } from 'react'
import { NextPageWithLayout } from './_app'

type Props = {
  track: Track | null
  token: string
}

const About: NextPageWithLayout<Props> = ({ track, token }: Props) => {
  const { isMobile } = useMediaQuery()

  const [spotifyCurrentTrack, setSpotifyCurrentTrack] = useState<Track | null>(
    track
  )

  useEffect(() => {
    if (!token) return

    async function updateCurrentTrack() {
      const updatedTrack = await updateCurrentPlayingTrack(token)
      setSpotifyCurrentTrack(updatedTrack)
    }
    updateCurrentTrack()
  }, [token])

  const suffix = (techId: number) =>
    techs[techs.length - 1] === techs[techId]
      ? '.'
      : techs[techId + 1] === techs[techs.length - 1]
      ? ' and '
      : ', '

  return (
    <Container>
      <Head>
        <title>About | Érik Albuquerque</title>
      </Head>

      <Content
        style={
          isMobile
            ? {
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }
            : undefined
        }
      >
        <Wrapper>
          {isMobile && (
            <Wrapper>
              <Avatar
                src="/images/me.png"
                size="sm"
                style={{
                  borderRadius: '100%',
                  alignSelf: 'center',
                }}
                alt="Érik Albuquerque"
              />
            </Wrapper>
          )}

          <Title>About me.</Title>

          <Section>
            <Paragraph lineHeight="lg">
              Hi, {`I'm`} <b>Érik Albuquerque</b>. <br />
              {`I'm`} <b>22</b> years.
            </Paragraph>

            <Paragraph lineHeight={isMobile ? 'sm' : 'md'}>
              {`I'm`} a <b>Front-End Developer</b>, based in <b>Brazil</b>. In
              2023 I will start my degree in software engineering at{' '}
              <Link
                href="https://estacio.br/"
                isTargetBlank
                {...{
                  color: 'white',
                  fontWeight: 'regular',
                  textDecoration: 'underline',
                }}
              >
                Estácio
              </Link>
              . Sometimes I like to do some <b>Pixel Art</b>.
            </Paragraph>

            <Paragraph lineHeight="lg">Welcome, have fun! 😌</Paragraph>
          </Section>

          <Article title="Career">
            {career.length > 0 &&
              career.map((job) => (
                <Career key={job.name}>
                  <strong>{job.name}</strong>

                  <Paragraph>
                    <Link
                      href={job.company.url}
                      isTargetBlank
                      {...{
                        color: 'white',
                        fontWeight: 'regular',
                        textDecoration: 'underline',
                      }}
                    >
                      {job.company.name}
                    </Link>{' '}
                    • {job.address.city}, {job.address.state}
                  </Paragraph>

                  <Paragraph>{job.period}</Paragraph>
                </Career>
              ))}
          </Article>

          <Article title="Certifications">
            {certifications.length > 0 &&
              certifications.map((certificate) => (
                <Certificate key={certificate.name}>
                  <strong>{certificate.name}</strong>

                  <Link
                    href={certificate.company.url}
                    isTargetBlank
                    {...{
                      color: 'white',
                      fontWeight: 'regular',
                      textDecoration: 'underline',
                    }}
                  >
                    {certificate.company.name}
                  </Link>

                  {certificate.credential.credentialId && (
                    <Paragraph lineHeight="sm">
                      Credential ID: {certificate.credential.credentialId}
                    </Paragraph>
                  )}

                  <Paragraph>{certificate.period}</Paragraph>

                  <Link
                    href={certificate.credential.url}
                    isTargetBlank
                    {...{
                      color: 'white',
                      fontWeight: 'regular',
                      textDecoration: 'underline',
                    }}
                  >
                    Show credential
                  </Link>
                </Certificate>
              ))}
          </Article>

          <Article title="Skills">
            <Skills>
              {skills.length > 0 &&
                skills.map((skill) => (
                  <Link
                    key={skill.name}
                    href={skill.url}
                    isTargetBlank
                    {...{
                      textDecoration: 'underline',
                    }}
                  >
                    <Skill>#{skill.name}</Skill>
                  </Link>
                ))}
            </Skills>
          </Article>

          <Article title="About this site">
            <AboutSite>
              {portfolio.length > 0 &&
                portfolio.map((info) => (
                  <Paragraph key={info.name}>
                    {info.title}:{' '}
                    <Link
                      href={info.url}
                      isTargetBlank
                      {...{
                        color: 'white',
                        fontWeight: 'regular',
                        textDecoration: 'underline',
                      }}
                    >
                      {info.name}
                    </Link>
                    .
                  </Paragraph>
                ))}

              {techs.length > 0 && (
                <Paragraph lineHeight="sm">
                  Technologies:{' '}
                  {techs.map((tech, techId) => (
                    <Fragment key={techId}>
                      <Link
                        href={tech.url}
                        isTargetBlank
                        {...{
                          color: 'white',
                          fontWeight: 'regular',
                          textDecoration: 'underline',
                        }}
                      >
                        {tech.name}
                      </Link>
                      {suffix(techId)}
                    </Fragment>
                  ))}
                </Paragraph>
              )}

              <Paragraph>
                Made with <b>{'<3'}</b> by me.{' '}
              </Paragraph>

              <Link
                href="https://github.com/erik-albuquerque/portfolio"
                isTargetBlank
                {...{
                  color: 'white',
                  fontWeight: 'regular',
                  textDecoration: 'underline',
                }}
              >
                learn more
              </Link>
            </AboutSite>
          </Article>
        </Wrapper>

        {isMobile ? (
          <>
            {spotifyCurrentTrack && (
              <Article title="in 🎧">
                <SpotifyTrack track={spotifyCurrentTrack} />
              </Article>
            )}

            <Socials data={socials} />
          </>
        ) : (
          <Wrapper
            style={{
              alignItems: 'center',
            }}
          >
            <Wrapper
              style={{
                alignItems: 'center',
              }}
            >
              <Avatar src="/images/me.png" size="md" alt="Érik Albuquerque" />
            </Wrapper>

            <Article title="I ♥">
              <Paragraph lineHeight="md">
                Technology, Animals, Games, Series, <br />
                Music, Pixel art, Coffee and some <br />
                other things.
              </Paragraph>
            </Article>

            <Socials data={socials} />

            {spotifyCurrentTrack && (
              <Article title="in 🎧">
                <SpotifyTrack track={spotifyCurrentTrack} />
              </Article>
            )}

            {/* <Socials data={socials} /> */}
          </Wrapper>
        )}
      </Content>
    </Container>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const track: Track | null = await getCurrentPlayingTrack(ctx)
  const cookies = parseCookies(ctx)

  return {
    props: {
      track,
      token: cookies.PLAYER_AT,
    },
  }
}

export default About
