import { featuredProjects } from '../data/projects'
import type { Project } from '../types'
import { Reveal } from './Reveal'
import { site } from '../data/site'

function Row({
  items,
  reverse,
}: {
  items: Project[]
  reverse: boolean
}) {
  const loop = [...items, ...items]

  return (
    <div className="marquee overflow-hidden">
      <div className={`flex w-max gap-5 ${reverse ? 'marquee-track-reverse' : 'marquee-track'}`}>
        {loop.map((project, index) => {
          const duplicate = index >= items.length

          return (
            <a
              key={`${project.repo}-${index}`}
              href={project.liveUrl ?? project.htmlUrl}
              target="_blank"
              rel="noreferrer"
              aria-hidden={duplicate || undefined}
              tabIndex={duplicate ? -1 : undefined}
              className="relative h-[220px] w-[320px] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-panel transition duration-300 hover:border-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue md:h-[269px] md:w-[380px]"
            >
              <img
                src={project.cover}
                alt={duplicate ? '' : project.title}
                className="h-full w-full object-cover object-top"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-3 pt-10 pb-2.5 text-left">
                <span className="block text-[13px] font-medium text-white">{project.title}</span>
                {project.language ? (
                  <span className="mt-0.5 block text-[11px] tracking-wide text-white/70">{project.language}</span>
                ) : null}
              </span>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export function Projects() {
  const top = featuredProjects.slice(0, 4)
  const bottom = featuredProjects.slice(4)

  return (
    <section id="work" className="w-full bg-[#171719] pt-6 pb-16 md:pt-8 md:pb-24">
      <Reveal className="mx-auto mb-10 max-w-xl px-4 text-center">
        <p className="mb-2 text-[13px] tracking-[2px] uppercase text-gray-400">Portfolios</p>
        <h2 className="mb-3 text-[clamp(24px,3vw,32px)] font-bold tracking-wide text-white">
          My <span className="text-blue">completed projects</span>
        </h2>
        <p className="text-sm leading-6 text-gray-400">
          ARCA, a Next.js shop, plus a messenger, a live dashboard, and storefronts in React and TypeScript.
        </p>
        <a
          href={site.githubRepos}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex rounded-full bg-gradient-to-r from-blue to-violet px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-105"
        >
          View all Projects
        </a>
      </Reveal>

      <Reveal variant="fade" delay={120} className="relative mx-auto w-full max-w-[1600px] overflow-hidden">
        <div className="flex flex-col gap-7">
          <Row items={top} reverse={false} />
          <Row items={bottom} reverse />
        </div>
      </Reveal>
    </section>
  )
}
