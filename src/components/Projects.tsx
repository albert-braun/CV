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
        {loop.map((project, index) => (
          <a
            key={`${project.repo}-${index}`}
            href={project.liveUrl ?? project.htmlUrl}
            target="_blank"
            rel="noreferrer"
            className="relative h-[220px] w-[320px] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-panel opacity-50 transition hover:opacity-100 md:h-[269px] md:w-[380px]"
          >
            <img
              src={project.cover}
              alt=""
              className="h-full w-full object-cover object-top"
            />
            <span className="absolute inset-x-0 bottom-0 bg-black/55 px-3 py-2 text-left text-[13px] font-medium text-white">
              {project.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

export function Projects() {
  const top = featuredProjects.slice(0, 4)
  const bottom = featuredProjects.slice(3)

  return (
    <section id="work" className="w-full bg-[#171719] pt-6 pb-16 md:pt-8 md:pb-24">
      <Reveal className="mx-auto mb-10 max-w-[440px] px-4 text-center">
        <p className="mb-2 text-[13px] tracking-[2px] uppercase text-gray-400">Portfolios</p>
        <h2 className="mb-3 text-[clamp(24px,3vw,32px)] font-bold tracking-wide text-white">
          My <span className="text-blue">completed projects</span>
        </h2>
        <p className="text-sm leading-6 text-gray-400">
          Selected work from GitHub: a corporate messenger, a live ops dashboard, e-commerce and studio landings — React, TypeScript and Next.js.
        </p>
      </Reveal>

      <Reveal variant="fade" delay={120} className="relative mx-auto w-full max-w-[1600px] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <a
            href={site.githubRepos}
            target="_blank"
            rel="noreferrer"
            className="pointer-events-auto rounded-full bg-gradient-to-r from-blue to-violet px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-105"
          >
            View all Projects
          </a>
        </div>

        <div className="flex flex-col gap-7">
          <Row items={top} reverse={false} />
          <Row items={bottom} reverse />
        </div>
      </Reveal>
    </section>
  )
}
