import { Article, Header, Masonry, Repo, Title } from '@components'
import { NextPage } from 'next'
import Head from 'next/head'
import { Container, Content, Link, Wrapper } from '../styles/projects'

const Projects: NextPage = () => {
  const repos = [
    {
      id: 'dsad',
      name: 'border_radius_previewer',
      description:
        '🔲 This tool can be used to generate CSS3 border-radius effects.',
      url: 'https://github.com/erik-albuquerque/border_radius_previewer',
      isForked: true,
      forkCount: 0,
      stargazerCount: 1,
      updatedAt: '2022-08-04T16:45:54Z',
      licenseInfo: {
        name: 'MIT License',
      },
      parent: {
        nameWithOwner: 'erikalbuquerque/border_radius_previewer',
        url: 'https://github.com/erikalbuquerque/border_radius_previewer',
      },
      languages: [
        {
          id: '#typeScript',
          name: 'TypeScript',
          color: '#3178c6',
        },
      ],
    },
    {
      id: 'w2222',
      name: 'dashgo',
      description: '📊 Modern dashboard for user management.',
      url: 'https://github.com/erik-albuquerque/dashgo',
      isForked: false,
      forkCount: 0,
      stargazerCount: 0,
      updatedAt: 'Wed Aug 24 2022 14:00:58 GMT-0300',
      licenseInfo: {
        name: 'MIT License',
      },
      languages: [
        {
          id: '#typeScript',
          name: 'TypeScript',
          color: '#3178c6',
        },
      ],
    },
    {
      id: 'aweq',
      name: 'ignews',
      url: 'https://github.com/erik-albuquerque/ignews',
      isForked: false,
      forkCount: 0,
      stargazerCount: 0,
      updatedAt: 'Wed May 24 2022 01:42:58 GMT-0300',
      licenseInfo: {
        name: 'MIT License',
      },
      languages: [
        {
          id: '#typeScript',
          name: 'TypeScript',
          color: '#3178c6',
        },
      ],
    },
    {
      id: 'dsa23123d',
      name: 'readme_template',
      description: '📄 README Template for use in Front-end projects..',
      url: 'https://github.com/erik-albuquerque/readme_template',
      isForked: false,
      forkCount: 0,
      stargazerCount: 0,
      updatedAt: 'Wed Aug 24 2022 15:21:58 GMT-0300',
      licenseInfo: {
        name: 'MIT License',
      },
    },
  ]

  return (
    <Container>
      <Head>
        <title>Projects | Érik Albuquerque</title>
      </Head>

      <Header />

      <Content>
        <Wrapper>
          <Title>Projects.</Title>

          <Article title="Github Pinned">
            <Masonry>
              {repos.length > 0 &&
                repos.map((repo) => <Repo key={repo.id} data={repo} />)}
            </Masonry>
          </Article>

          <Article title="All projects">
            {repos.length > 0 &&
              repos.map((repo) => (
                <Link key={repo.id} href={repo.url} target="_blank">
                  {repo.name}
                </Link>
              ))}
          </Article>
        </Wrapper>
      </Content>
    </Container>
  )
}

export default Projects
