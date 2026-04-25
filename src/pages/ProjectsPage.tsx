import { useEffect, useState } from 'react'

type GitHubRepo = {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  topics?: string[]
}

const deviconByLanguage: Record<string, string> = {
  javascript: 'javascript',
  typescript: 'typescript',
  python: 'python',
  ruby: 'ruby',
  go: 'go',
  rust: 'rust',
  java: 'java',
  kotlin: 'kotlin',
  swift: 'swift',
  php: 'php',
  c: 'c',
  'c++': 'cplusplus',
  'c#': 'csharp',
  shell: 'bash',
  html: 'html5',
  css: 'css3',
  scss: 'sass',
  dockerfile: 'docker',
}

function getDeviconUrl(language: string | null): string | null {
  if (!language) {
    return null
  }

  const key = language.toLowerCase()
  const iconName = deviconByLanguage[key]

  if (!iconName) {
    return null
  }

  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconName}/${iconName}-original.svg`
}

function ProjectsPage() {
  useEffect(() => {
    document.body.dataset.page = 'projects'
    return () => { delete document.body.dataset.page }
  }, [])
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [isLoadingRepos, setIsLoadingRepos] = useState(true)
  const [hasAttemptedRepoLoad, setHasAttemptedRepoLoad] = useState(false)
  const [hasRepoLoadError, setHasRepoLoadError] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    const loadRepos = async () => {
      setIsLoadingRepos(true)
      setHasRepoLoadError(false)

      try {
        const requestUrl =
          'https://api.github.com/users/ajwagner777/repos?sort=updated&per_page=21&type=public'

        let response = await fetch(requestUrl, {
          signal: controller.signal,
          headers: {
            Accept: 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28',
          },
        })

        // Retry once without custom headers for environments that strip request headers.
        if (!response.ok) {
          response = await fetch(requestUrl, { signal: controller.signal })
        }

        if (!response.ok) {
          throw new Error(`Could not fetch repositories: ${response.status}`)
        }

        const data = (await response.json()) as GitHubRepo[]
        setRepos(data)
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return
        }

        setHasRepoLoadError(true)
      } finally {
        if (controller.signal.aborted) {
          return
        }

        setHasAttemptedRepoLoad(true)
        setIsLoadingRepos(false)
      }
    }

    loadRepos()

    return () => controller.abort()
  }, [])

  return (
    <section className="content-stack">
      <header className="content-header reveal reveal-1">
        <p className="eyebrow">Projects</p>
        <h1>Selected Public Work</h1>
        <p>
          A few projects that represent how I blend product outcomes with elegant,
          scalable technical delivery using Agentic AI and Prompt Engineering.
        </p>
      </header>

      <div className="project-row project-grid repo-row">
        {(isLoadingRepos || !hasAttemptedRepoLoad) && (
          <article className="project-card reveal reveal-1 repo-loader" aria-live="polite">
            <p className="project-type">GitHub</p>
            <h2>Loading Repositories</h2>
            <p>Pulling public repositories from GitHub.</p>
            <div className="loader-dots" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </article>
        )}

        {hasAttemptedRepoLoad && !isLoadingRepos && hasRepoLoadError && repos.length === 0 && (
          <article className="project-card reveal reveal-1 repo-empty">
            <p className="project-type">GitHub</p>
            <h2>Repositories Unavailable</h2>
            <p>Could not load public repositories right now.</p>
          </article>
        )}

        {hasAttemptedRepoLoad &&
          !isLoadingRepos &&
          !hasRepoLoadError &&
          repos.map((repo, index) => {
            const iconUrl = getDeviconUrl(repo.language)

            return (
              <article key={repo.id} className={`project-card reveal reveal-${(index % 3) + 1}`}>
                <p className="project-type">Repository</p>
                <h2 className="repo-title">
                  {iconUrl && (
                    <span className="repo-icon-wrap" aria-hidden="true">
                      <img src={iconUrl} alt="" className="repo-language-icon" loading="lazy" />
                    </span>
                  )}
                  <span>{repo.name}</span>
                </h2>
                <div className="topic-pills" aria-label="Repository topics">
                  {(repo.topics && repo.topics.length > 0 ? repo.topics : ['general'])
                    .slice(0, 6)
                    .map((topic) => (
                      <span key={`${repo.id}-${topic}`} className="topic-pill">
                        {topic}
                      </span>
                    ))}
                </div>
                <p>{repo.description ?? 'Public GitHub repository.'}</p>
                <a href={repo.html_url} target="_blank" rel="noreferrer" className="repo-link">
                  View on GitHub
                </a>
              </article>
            )
          })}
      </div>
    </section>
  )
}

export default ProjectsPage
