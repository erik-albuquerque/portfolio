import { Article, Layout, Socials, Title } from '@components'
import Head from 'next/head'
import { ReactElement, ReactNode } from 'react'
import {
  AboutSite,
  Avatar, Career,
  Certificate,
  Container,
  Content,
  Link as StitchesLink,
  Paragraph,
  Section,
  Skill,
  Skills,
  Wrapper
} from '../styles/about'
import { NextPageWithLayout } from './_app'

const Link = ({ children, href }: { children: ReactNode; href: string }) => (
  <StitchesLink href={href} target="_blank">
    {children}
  </StitchesLink>
)

const About: NextPageWithLayout = () => {
  const skills = [
    {
      name: 'typescript',
      url: 'https://www.typescriptlang.org/',
    },
    {
      name: 'javascript',
      url: 'https://www.javascript.com/',
    },
    {
      name: 'reactjs',
      url: 'https://reactjs.org/',
    },
    {
      name: 'nextjs',
      url: 'https://nextjs.org/',
    },
    {
      name: 'css',
      url: 'https://www.w3schools.com/css/',
    },
    {
      name: 'html',
      url: 'https://www.w3schools.com/html/',
    },
  ]

  const career = [
    {
      name: 'Scientific Initiation Fellow',
      company: {
        name: 'IFCE',
        url: 'https://ifce.edu.br/',
      },
      address: {
        city: 'Paracuru',
        state: 'CE',
      },
      period: 'Feb 2019 - May 2019 - 4 months',
    },
  ]

  const utils = [
    {
      title: 'Designed',
      name: 'Figma',
      url: 'https://www.figma.com/',
    },
    {
      title: 'IDE',
      name: 'Visual Studio Code',
      url: 'https://code.visualstudio.com/',
    },
    {
      title: 'Hosted by',
      name: 'Vercel',
      url: 'https://vercel.com/',
    },
    {
      title: 'Font',
      name: 'Inter',
      url: 'https://fonts.google.com/specimen/Inter?query=Inter',
    },
  ]

  const techs = [
    {
      name: 'Github API',
      url: 'https://docs.github.com/en/graphql',
    },
    {
      name: 'Graphql',
      url: 'https://graphql.org/',
    },
    {
      name: 'Apollo Client',
      url: 'https://www.apollographql.com/docs/react/',
    },
    {
      name: 'React.js',
      url: 'https://reactjs.org/',
    },
    {
      name: 'Next.js',
      url: 'https://nextjs.org/',
    },
    {
      name: 'TypeScript',
      url: 'https://www.typescriptlang.org/',
    },
    {
      name: 'Stitches',
      url: 'https://stitches.dev/',
    },
  ]

  const socials = [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/erik-albuquerque/',
    },
    {
      name: 'Github',
      url: 'https://github.com/erik-albuquerque',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/albuquerik',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/albuquerik',
    },
  ]

  const certifications = [
    {
      name: 'Ignite Trilha React.Js',
      company: {
        name: 'Rocketseat',
        url: 'https://www.rocketseat.com.br/',
      },
      credential: {
        credentialId: '358a8f0b-ffe5-4f6b-af5f-97bf1e288870',
        url: 'https://drive.google.com/file/d/1luA5ZzfR2sLKsu5LlKbDwA1b7dOLwp-G/view',
      },
      period: 'Issued in Jul 2022 - No expiration date',
    },
    {
      name: 'Introduction to Programming Using JavaScript',
      company: {
        name: 'Sololearn',
        url: 'https://www.sololearn.com/home',
      },
      credential: {
        credentialId: '',
        url: 'https://www.sololearn.com/Certificate/CT-PETE4I8F/jpg',
      },
      period: 'Issued Nov 2019 · No Expiration Date',
    },
  ]

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
              {utils.length > 0 &&
                utils.map((info) => (
                  <>
                    <Paragraph>
                      {info.title}: <Link href={info.url}>{info.name}</Link>.
                    </Paragraph>
                  </>
                ))}

              {techs.length > 0 && (
                <Paragraph lineHeight="sm">
                  Technologies:{' '}
                  {techs.map((tech, techId) => (
                    <>
                      <Link key={techId} href={tech.url}>
                        {tech.name}
                      </Link>
                      {suffix(techId)}
                    </>
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
