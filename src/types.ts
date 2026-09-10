export type Project = {
  repo: string
  title: string
  description: string
  htmlUrl: string
  liveUrl: string | null
  language: string | null
  cover: string
}

export type GithubRepo = {
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  fork: boolean
  stargazers_count: number
  pushed_at: string
}
