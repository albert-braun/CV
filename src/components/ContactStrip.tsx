import { publicUrl } from '../lib/publicUrl'

type ContactStripProps = {
  onContact: () => void
}

export function ContactStrip({ onContact }: ContactStripProps) {
  return (
    <section className="px-5 py-16 md:px-8">
      <div className="relative mx-auto max-w-[1160px] overflow-hidden rounded-[28px]">
        <img
          src={publicUrl('cta-room.jpg')}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_60%] brightness-[0.32] saturate-[0.5]"
        />
        <div className="absolute inset-0 bg-[rgba(17,17,19,0.62)]" />
        <div className="relative z-10 flex flex-col items-start gap-8 px-6 py-12 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-16">
          <div className="flex max-w-[560px] items-start gap-5 sm:gap-7">
            <PaperPlane />
            <div>
              <h2 className="text-[clamp(26px,3.4vw,40px)] font-semibold leading-[1.15] tracking-tight text-white">
                Have a project in mind?
              </h2>
              <p className="mt-3 max-w-[420px] text-sm leading-6 text-white/60">
                If you have a Figma file or a product idea, I can turn it into a React interface that is fast, accessible and ready to ship.
              </p>
            </div>
          </div>
          <button
            type="button"
            className="gradient-btn shrink-0 rounded-full px-10 py-3.5 text-sm font-semibold text-white transition duration-500"
            onClick={onContact}
          >
            Contact now
          </button>
        </div>
      </div>
    </section>
  )
}

function PaperPlane() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="mt-0.5 h-[52px] w-[52px] shrink-0 sm:h-14 sm:w-14"
      aria-hidden="true"
    >
      <path d="M6.5 33.2 58 8.5 36.2 56.8 28.8 35.4 6.5 33.2Z" fill="#1d6bff" />
      <path d="M28.8 35.4 58 8.5 36.2 56.8Z" fill="#5aa4ff" />
      <path d="M28.8 35.4 58 8.5 6.5 33.2Z" fill="#7ec8ff" />
      <path d="M28.8 35.4 36.2 56.8" stroke="#0b3fd4" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
