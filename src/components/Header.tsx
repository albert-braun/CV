import { useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#work', label: 'Projects' },
  { href: '#stack', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

type HeaderProps = {
  onContact: () => void
}

export function Header({ onContact }: HeaderProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#171719]/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1160px] items-center justify-between gap-4 px-5">
        <a href="#home" className="flex items-center gap-2 text-sm font-bold text-white">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-blue to-violet text-[10px]">
            ✦
          </span>
          frontend developer
        </a>

        <nav className="hidden items-center gap-5 text-[13px] text-white/70 xl:gap-7 xl:text-sm lg:flex">
          {links.map((link) => (
            <a key={link.href} className="transition hover:text-white" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="gradient-btn hidden min-w-[150px] rounded-full px-5 py-2.5 text-sm font-semibold text-white transition duration-500 lg:inline-flex lg:justify-center"
          onClick={onContact}
        >
          Contact me
        </button>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white lg:hidden"
          aria-label="Menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="text-lg leading-none">{open ? '×' : '☰'}</span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/5 px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3 text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                className="text-white/80"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              className="gradient-btn mt-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
              onClick={() => {
                setOpen(false)
                onContact()
              }}
            >
              Contact me
            </button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
