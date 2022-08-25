import { Article, Header, Masonry, Repo, Title } from '@components'
import { client, gql } from '@lib'
import { RepoProps } from '@types'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { Container, Content, Link, Wrapper } from '../styles/projects'

type ProjectsProps = {
  pinnedRepos: RepoProps[]
  repos: RepoProps[]
}

const Projects: NextPage<ProjectsProps> = ({
  pinnedRepos,
  repos,
}: ProjectsProps) => {
  const pinnedRepositories = pinnedRepos
  const repositories = repos

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
              {pinnedRepositories.length > 0 &&
                pinnedRepositories.map((repo) => (
                  <Repo key={repo.id} {...repo} />
                ))}
            </Masonry>
          </Article>

          <Article title="All projects">
            {repositories.length > 0 &&
              repositories.map((repo) => (
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

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      {
        user(login: "erik-albuquerque") {
          pinnedItems(first: 6, types: REPOSITORY) {
            edges {
              node {
                ... on Repository {
                  id
                  name
                  url
                  description
                  isFork
                  forkCount
                  stargazerCount
                  updatedAt
                  licenseInfo {
                    name
                  }
                  parent {
                    nameWithOwner
                    url
                  }
                  languages(
                    first: 1
                    orderBy: { field: SIZE, direction: DESC }
                  ) {
                    edges {
                      size
                      node {
                        id
                        name
                        color
                      }
                      cursor
                    }
                  }
                }
              }
            }
          }
          repositories(
            first: 20
            privacy: PUBLIC
            orderBy: { field: UPDATED_AT, direction: DESC }
          ) {
            edges {
              node {
                ... on Repository {
                  id
                  name
                  url
                }
              }
            }
          }
        }
      }
    `,
  })

  const pinnedRepos = data.user.pinnedItems.edges.map(({ node }: any) => {
    return {
      id: node.id,
      name: node.name,
      url: node.url,
      description: node.description,
      isForked: node.isFork,
      forkCount: node.forkCount,
      stargazerCount: node.stargazerCount,
      updatedAt: node.updatedAt,
      licenseInfo: {
        name: node.licenseInfo.name,
      },
      parent: {
        nameWithOwner: node.nameWithOwner ? node.nameWithOwner : null,
        url: node.url,
      },
      languages: node.languages.edges.map(({ node }: any) => {
        return {
          id: node.id,
          name: node.name,
          color: node.color,
        }
      }),
    }
  })

  const repos = data.user.repositories.edges.map(({ node }: any) => {
    return {
      id: node.id,
      name: node.name,
      url: node.url,
    }
  })

  return {
    props: {
      pinnedRepos,
      repos,
    },
  }
}
