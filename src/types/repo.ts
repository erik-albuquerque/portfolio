type Language = {
  id: string
  name: string
  color: string
}

type RepoProps = {
  data: {
    id: string
    name: string
    url: string
    description?: string
    isForked: boolean
    forkCount: number
    stargazerCount: number
    updatedAt: string
    licenseInfo?: {
      name: string
    }
    parent?: {
      nameWithOwner: string
      url: string
    }
    languages?: Language[]
  }
}

export type { RepoProps }
