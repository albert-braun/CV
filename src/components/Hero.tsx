import { site } from '../data/site'
import heroPortrait from '../assets/albert-hero.png'

type HeroProps = {
  onContact: () => void
}

export function Hero({ onContact }: HeroProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-[74dvh] overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_48%,rgba(20,45,140,0.38),transparent_62%)]" />
      <div className="pointer-events-none absolute top-10 right-[18%] h-16 w-16 rounded-full bg-violet/20 blur-2xl" />
      <div className="pointer-events-none absolute top-[18%] right-[8%] text-violet">✦</div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1160px] items-center gap-8 px-5 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:py-12">
        <div className="hero-copy max-w-[620px] text-center lg:text-left">
          <h1 className="text-[clamp(36px,5.4vw,62px)] font-light leading-[1.08] tracking-wide text-white">
            This is your
            <span className="block">front-end developer</span>
            <span className="hero-name block font-extrabold">{site.name}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[470px] text-[16px] leading-7 text-white/70 lg:mx-0">
            Front-end engineer specialising in JavaScript, React and Redux. I take product ideas and design files from Figma to a polished UI: reusable components, clean state, and code that stays readable as the product grows.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5 lg:justify-start">
            <button
              type="button"
              className="gradient-btn min-w-[180px] rounded-full px-6 py-3 text-sm font-semibold text-white transition duration-500"
              onClick={onContact}
            >
              Contact me
            </button>
            <a href="#work" className="inline-flex items-center gap-2 text-sm text-white transition hover:gap-3">
              View projects
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="hero-photo relative mx-auto flex h-[clamp(240px,42svh,460px)] w-full max-w-[480px] items-end justify-center lg:max-w-none">
          <span className="absolute top-[16%] left-[8%] size-8 rounded-full bg-[#1b2a6e]" />
          <span className="absolute bottom-[28%] left-2 size-12 rounded-full bg-[repeating-linear-gradient(135deg,#ad13fb_0_6px,transparent_6px_12px)] opacity-90" />
          <div className="hero-glow absolute bottom-[6%] left-[18%] size-[clamp(200px,40vw,420px)] rounded-full" />
          <div className="hero-glow-violet absolute right-[6%] bottom-[18%] size-[clamp(140px,28vw,300px)] rounded-full" />
          <img
            src={heroPortrait}
            alt="Albert Braun"
            className="hero-avatar relative z-10 h-full w-auto max-w-full object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  )
}
