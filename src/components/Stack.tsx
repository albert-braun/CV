import { stackItems } from '../data/stack'
import type { StackItem } from '../data/stack'
import { useInView } from '../hooks/useInView'
import { Reveal } from './Reveal'

const tileShape: Record<string, string> = {
  React: 'rounded-[2.5rem] rounded-tr-[5.5rem]',
  TypeScript: 'rounded-[2.5rem] rounded-bl-[5.5rem]',
  JavaScript: 'rounded-[2rem] rounded-tr-[3.5rem]',
  HTML: 'rounded-[2.4rem] rounded-bl-[4.2rem]',
  Tailwind: 'rounded-[2rem] rounded-tl-[4rem]',
  'Redux Toolkit': 'rounded-[1.75rem]',
  Vite: 'rounded-[2.2rem] rounded-br-[4.5rem]',
  'CSS / SCSS': 'rounded-[1.6rem] rounded-bl-[3.8rem]',
  Figma: 'rounded-[2.8rem]',
  Git: 'rounded-[3rem]',
  'REST API': 'rounded-[2rem] rounded-tr-[4rem]',
}

export function Stack() {
  const { ref, visible } = useInView<HTMLDivElement>(0.12)

  return (
    <section id="stack" className="relative overflow-hidden px-5 py-20 md:px-8">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[12%] bottom-10 h-32 w-32 rounded-full bg-violet/15 blur-3xl" />

      <div className="relative mx-auto max-w-[1160px]">
        <Reveal>
          <p className="text-center text-[13px] tracking-[2px] uppercase text-gray-400">Skills</p>
          <h2 className="mt-2 text-center text-[clamp(24px,3vw,32px)] font-bold text-white">
            Tech <span className="text-blue">stack</span>
          </h2>
        </Reveal>

        <div ref={ref} className="stack-honeycomb mt-12 lg:mt-14">
          {stackItems.map((item, index) => (
            <div
              key={item.name}
              className={`stack-hex-cell reveal ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <HexTile item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HexTile({ item, index }: { item: StackItem; index: number }) {
  const gid = `hex-stroke-${index}`

  return (
    <article className={`stack-hex group ${tileShape[item.name] ?? 'rounded-2xl'}`}>
      <svg className="stack-hex-svg absolute inset-0 h-full w-full" viewBox="0 0 200 230" aria-hidden="true">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#194BFD" />
            <stop offset="100%" stopColor="#AD13FB" />
          </linearGradient>
        </defs>
        <polygon
          className="stack-hex-fill"
          points="100,0 200,57.5 200,172.5 100,230 0,172.5 0,57.5"
        />
        <polygon
          className="stack-hex-edge"
          points="100,2 198,58.5 198,171.5 100,228 2,171.5 2,58.5"
          fill="none"
          stroke={`url(#${gid})`}
          strokeWidth="1.4"
        />
      </svg>
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-9 text-center">
        <TileBody item={item} />
      </div>
    </article>
  )
}

function TileBody({ item, compact = false }: { item: StackItem; compact?: boolean }) {
  return (
    <>
      <span className="stack-icon mb-2 inline-flex h-10 w-10 items-center justify-center text-blue">
        <StackMark name={item.name} />
      </span>
      <h3 className={`font-semibold text-white ${compact ? 'text-lg' : 'text-[16px] leading-tight'}`}>
        {item.name}
      </h3>
      <p
        className={`mt-1.5 leading-snug text-gray-400 ${compact ? 'text-sm' : 'line-clamp-4 text-[11px]'}`}
      >
        {item.note}
      </p>
    </>
  )
}

function StackMark({ name }: { name: string }) {
  const common = 'h-[22px] w-[22px]'

  switch (name) {
    case 'React':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.4">
          <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        </svg>
      )
    case 'TypeScript':
      return <span className="text-[11px] font-bold tracking-tight">TS</span>
    case 'Tailwind':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor">
          <path d="M12 6c-2.5 0-4.1 1.3-4.8 3.8 1-.5 1.8-.7 2.6-.5.5.1.9.5 1.3 1 .7.9 1.6 1.5 3 1.5 2.5 0 4.1-1.3 4.8-3.8-1 .5-1.8.7-2.6.5-.5-.1-.9-.5-1.3-1C14.3 6.6 13.4 6 12 6zm-4.8 6.2C5.5 12.2 3.9 13.5 3.2 16c1-.5 1.8-.7 2.6-.5.5.1.9.5 1.3 1 .7.9 1.6 1.5 3 1.5 2.5 0 4.1-1.3 4.8-3.8-1 .5-1.8.7-2.6.5-.5-.1-.9-.5-1.3-1-.7-.9-1.6-1.5-3-1.5z" />
        </svg>
      )
    case 'Redux Toolkit':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M16.5 6.2a4 4 0 0 0-7.2-1.3M7.2 8.8A4 4 0 0 0 8 16.7M12.8 18.8a4 4 0 0 0 6.4-4.2" />
          <circle cx="16.6" cy="6.4" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="7.2" cy="8.6" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="12.6" cy="18.8" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'Vite':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor">
          <path d="M12 3 3.5 19h3.3L12 7.6 17.2 19H20.5L12 3z" />
          <path d="M12 10.5 8.8 19h6.4L12 10.5z" opacity=".55" />
        </svg>
      )
    case 'Figma':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor">
          <circle cx="12" cy="8" r="3" />
          <circle cx="12" cy="14" r="3" opacity=".7" />
          <path d="M9 5h3v6H9a3 3 0 0 1 0-6z" opacity=".85" />
          <path d="M12 5h3a3 3 0 1 1 0 6h-3V5z" opacity=".55" />
        </svg>
      )
    case 'JavaScript':
      return <span className="text-[11px] font-bold tracking-tight">JS</span>
    case 'CSS / SCSS':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor">
          <path d="M5.2 3h13.6l-1.2 14.3L12 21.2 6.4 17.3 5.2 3zm2.2 3.2 4.6 10.2 4.6-10.2h-2.1l-2.5 6.1-2.5-6.1H7.4z" />
        </svg>
      )
    case 'Git':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor">
          <path d="M21.1 11.1 12.9 2.9a2.1 2.1 0 0 0-3 0L8.4 4.4l2.4 2.4a2 2 0 0 1 2.5 2.5l2.3 2.3a2 2 0 1 1-1.1.6l-2.3-2.3v6.1a2 2 0 1 1-1.7 0V10.2a2 2 0 0 1-1.1-1.1L6.9 6.6 2.9 10.6a2.1 2.1 0 0 0 0 3l8.2 8.2a2.1 2.1 0 0 0 3 0l7-7a2.1 2.1 0 0 0 0-3z" />
        </svg>
      )
    case 'HTML':
      return <span className="text-[10px] font-bold tracking-tight">&lt;/&gt;</span>
    case 'REST API':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M4 12h6M14 12h6M10 12l-2-2m2 2-2 2M14 12l2-2m-2 2 2 2" />
          <rect x="8.5" y="8.5" width="7" height="7" rx="1.2" />
        </svg>
      )
    default:
      return null
  }
}
