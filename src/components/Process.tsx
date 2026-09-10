import { Reveal } from './Reveal'
import { useInView } from '../hooks/useInView'
import aboutPortrait from '../assets/albert-about.png'

const steps = [
  {
    title: 'Discover',
    text: 'Read the Figma, ask the unclear questions, agree on breakpoints and what “done” looks like.',
    icon: 'search',
  },
  {
    title: 'Structure',
    text: 'Split the page into components. Name things so the next person does not have to guess.',
    icon: 'layers',
  },
  {
    title: 'Build UI',
    text: 'Layout first, then motion, then state. React and TypeScript when they help.',
    icon: 'code',
  },
  {
    title: 'Ship',
    text: 'Check real widths, tidy the PR, leave a UI someone can reuse.',
    icon: 'check',
  },
] as const

export function Process() {
  return (
    <section id="process" className="px-5 py-20 md:px-8">
      <div className="mx-auto grid max-w-[1160px] items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <Reveal>
            <p className="text-[13px] tracking-[2px] uppercase text-gray-400">about me</p>
            <h2 className="mt-2 text-[clamp(24px,3vw,32px)] font-bold text-white">
              My <span className="text-blue">work process</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6">
              Front-end developer focused on React. I take a design and a feature brief and turn them into a clear interface: semantic HTML, structured CSS, reusable components and predictable state. Based in Alicante, working remotely with product teams.
            </p>
          </Reveal>
          <ol className="mt-12 list-none">
            {steps.map((step, index) => (
              <Step key={step.title} icon={step.icon} title={step.title} text={step.text} delay={index * 90} />
            ))}
          </ol>
        </div>

        <Reveal variant="right" delay={160} className="relative mx-auto flex w-full max-w-md items-end justify-center">
          <div className="hero-glow absolute bottom-[6%] left-[10%] size-[70%] rounded-full" />
          <div className="hero-glow-violet absolute right-[4%] bottom-[16%] size-[46%] rounded-full" />
          <img
            src={aboutPortrait}
            alt="Albert Braun"
            className="hero-avatar relative z-10 w-full object-contain object-bottom"
          />
        </Reveal>
      </div>
    </section>
  )
}

function Step({
  icon,
  title,
  text,
  delay,
}: {
  icon: (typeof steps)[number]['icon']
  title: string
  text: string
  delay: number
}) {
  const { ref, visible } = useInView<HTMLLIElement>(0.12)

  return (
    <li
      ref={ref}
      className={`reveal reveal-up relative mb-2 flex gap-4 rounded-2xl p-3 pl-2 transition hover:bg-white/[0.04] ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="relative z-10 mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bg text-blue shadow-[0_0_0_1px_rgba(25,75,253,0.5),0_0_18px_rgba(25,75,253,0.18)]">
        <StepIcon name={icon} />
      </span>
      <div className="min-w-0 pt-1">
        <h3 className="text-base font-semibold tracking-wide text-white">{title}</h3>
        <p className="mt-1.5 text-sm leading-6 text-gray-400">{text}</p>
      </div>
    </li>
  )
}

function StepIcon({ name }: { name: (typeof steps)[number]['icon'] }) {
  const common = 'h-5 w-5'

  switch (name) {
    case 'search':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="11" cy="11" r="6.5" />
          <path d="M16 16.5 20.5 21" strokeLinecap="round" />
        </svg>
      )
    case 'layers':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 4 4.5 8 12 12l7.5-4L12 4Z" strokeLinejoin="round" />
          <path d="M4.5 12 12 16l7.5-4" strokeLinejoin="round" />
          <path d="M4.5 16 12 20l7.5-4" strokeLinejoin="round" />
        </svg>
      )
    case 'code':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M8.5 7.5 4 12l4.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.5 7.5 20 12l-4.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'check':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 12h12.5" strokeLinecap="round" />
          <path d="m12 6.5 6.5 5.5L12 17.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
  }
}
