/* eslint-disable @typescript-eslint/no-explicit-any */
import { Article, Layout, Link, Masonry, Repo, Title } from '@components'
import { Mobile, Web } from '@components/Skeleton/Projects'
import { useMediaQuery } from '@hooks'
import { client, gql } from '@lib'
import { Container, Content, Repositories, Wrapper } from '@styles/projects'
import { RepoProps } from '@types'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ReactElement, useEffect, useState } from 'react'
import { NextPageWithLayout } from './_app'

type ProjectsProps = {
  pinnedRepos: RepoProps[]
  repos: RepoProps[]
}

const Projects: NextPageWithLayout<ProjectsProps> = ({
  pinnedRepos,
  repos,
}: ProjectsProps) => {
  const [loading, setLoading] = useState(true)

  const pinnedRepositories = pinnedRepos
  const repositories = repos

  const { isMobile } = useMediaQuery()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 2000)

    if (pinnedRepos) timeout

    return () => clearTimeout(timeout)
  }, [pinnedRepos])

  return loading ? (
    <Container>
      <Content>
        <Wrapper>{isMobile ? <Mobile /> : <Web />}</Wrapper>
      </Content>
    </Container>
  ) : (
    <Container>
      <Head>
        <title>Projects | Érik Albuquerque</title>
      </Head>

      <Content>
        <Wrapper>
          <Title>Projects.</Title>

          <Article title="Github Pinned">
            <Masonry breakpointCols={isMobile ? 1 : 2}>
              {pinnedRepositories.length > 0 &&
                pinnedRepositories.map((repo) => (
                  <Repo key={repo.id} {...repo} />
                ))}
            </Masonry>
          </Article>

          <Article title="All projects">
            {repositories.length > 0 && (
              <Repositories
                style={{ marginLeft: isMobile ? '1.5rem' : undefined }}
              >
                {repositories.map((repo) => (
                  <Link
                    key={repo.id}
                    href={repo.url}
                    isTargetBlank
                    {...{
                      color: 'white',
                      textDecoration: 'underline',
                    }}
                  >
                    {repo.name}
                  </Link>
                ))}
              </Repositories>
            )}
          </Article>
        </Wrapper>
      </Content>
    </Container>
  )
}

Projects.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data, loading } = await client.query({
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      licenseInfo: node.licenseInfo!,
      parent: node.parent,
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
      loading,
    },
  }
}

export default Projects
