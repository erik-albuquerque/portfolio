import { Article, Layout, Paragraph, Socials, Title } from '@components'
import {
  career,
  certifications,
  portfolio,
  skills,
  socials,
  techs
} from '@constants'
import {
  AboutSite,
  Avatar,
  Career,
  Certificate,
  Container,
  Content,
  Link as StitchesLink,
  Section,
  Skill,
  Skills,
  Wrapper
} from '@styles/about'
import Head from 'next/head'
import { Fragment, ReactElement, ReactNode } from 'react'
import { NextPageWithLayout } from './_app'

const Link = ({ children, href }: { children: ReactNode; href: string }) => (
  <StitchesLink href={href} target="_blank">
    {children}
  </StitchesLink>
)

const About: NextPageWithLayout = () => {
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

      <Content>
        <Wrapper>
          <Title>About me.</Title>

          <Section>
            <Paragraph lineHeight="lg">
              Hi, {`I'm`} <b>Érik Albuquerque</b>. <br />
              {`I'm`} <b>22</b> years.
            </Paragraph>

            <Paragraph lineHeight="md">
              {`I'm`} a <b>Front-End Developer</b>, based in <b>Brazil</b>. In
              2023 <br />I will start my degree in software engineering at{' '}
              <Link href="https://estacio.br/">Estácio</Link>
              . <br />
              Sometimes I like to do some <b>Pixel Art</b>.
            </Paragraph>

            <Paragraph lineHeight="lg">Welcome, have fun! 😌</Paragraph>
          </Section>

          <Article title="Career">
            {career.length > 0 &&
              career.map((job) => (
                <Career key={job.name}>
                  <strong>{job.name}</strong>

                  <Paragraph>
                    <Link href={job.company.url}>{job.company.name}</Link> •{' '}
                    {job.address.city}, {job.address.state}
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

                  <Link href={certificate.company.url}>
                    {certificate.company.name}
                  </Link>

                  {certificate.credential.credentialId && (
                    <Paragraph lineHeight="sm">
                      Credential ID: {certificate.credential.credentialId}
                    </Paragraph>
                  )}

                  <Paragraph>{certificate.period}</Paragraph>

                  <Link href={certificate.credential.url}>Show credential</Link>
                </Certificate>
              ))}
          </Article>

          <Article title="Skills">
            <Skills>
              {skills.length > 0 &&
                skills.map((skill) => (
                  <Link key={skill.name} href={skill.url}>
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
                    {info.title}: <Link href={info.url}>{info.name}</Link>.
                  </Paragraph>
                ))}

              {techs.length > 0 && (
                <Paragraph lineHeight="sm">
                  Technologies:{' '}
                  {techs.map((tech, techId) => (
                    <Fragment key={techId}>
                      <Link href={tech.url}>{tech.name}</Link>
                      {suffix(techId)}
                    </Fragment>
                  ))}
                </Paragraph>
              )}

              <Paragraph>
                Made with <b>{'<3'}</b> by me.{' '}
              </Paragraph>

              <Link href="https://github.com/erik-albuquerque/portfolio">
                learn more
              </Link>
            </AboutSite>
          </Article>
        </Wrapper>
        <Wrapper>
          <Wrapper>
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
        </Wrapper>
      </Content>
    </Container>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default About
