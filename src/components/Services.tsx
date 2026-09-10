import { Reveal } from './Reveal'

const offers = [
  {
    title: 'Figma → React',
    text: 'I take a finished layout and turn it into components that match spacing, type and breakpoints — not an approximation.',
  },
  {
    title: 'Storefronts',
    text: 'Catalogues, filters, cart and checkout-oriented flows. State that stays readable when the catalogue grows.',
  },
  {
    title: 'Landings & studios',
    text: 'Image-first pages, long sections and motion that does not fight the layout on a phone.',
  },
  {
    title: 'Product UI',
    text: 'Dashboards and consoles: tables, charts, live status. Clear hierarchy, dark-friendly contrast.',
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-[88px] px-5 py-20 md:px-8">
      <div className="mx-auto max-w-[1160px]">
        <Reveal className="mx-auto max-w-[520px] text-center">
          <p className="text-[13px] tracking-[2px] uppercase text-gray-400">What I do</p>
          <h2 className="mt-2 text-[clamp(24px,3vw,32px)] font-bold text-white">
            How I can <span className="text-blue">help</span>
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-400">
            Front-end only: the UI layer. You bring the design and the product brief; I ship the interface — usually as a GitHub PR with notes on what changed and why.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {offers.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <article className="h-full rounded-2xl border border-white/10 bg-panel p-6 transition hover:border-blue/40">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
