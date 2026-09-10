import { site } from '../data/site'

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#work', label: 'Projects' },
  { href: '#stack', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

const profileLinks = [
  { href: site.github, label: 'GitHub' },
  { href: site.telegram, label: 'Telegram' },
  { href: `mailto:${site.email}`, label: 'Email' },
]

export function Footer() {
  return (
    <footer id="contact" className="px-5 pt-16 pb-4 sm:px-8">
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" className="mb-5 inline-flex items-center gap-2 text-base font-bold text-white">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-blue to-violet text-[10px]">
              ✦
            </span>
            frontend developer
          </a>
          <p className="mb-5 max-w-[320px] text-sm leading-5">
            {site.name} — {site.title}. I turn complex Figma designs into production-ready React interfaces — accessible, responsive, and easy to maintain.
          </p>
          <div className="flex gap-3">
            <Social href={site.linkedin} label="LinkedIn">
              in
            </Social>
            <Social href={site.github} label="GitHub">
              gh
            </Social>
            <Social href={site.telegram} label="Telegram">
              tg
            </Social>
          </div>
        </div>

        <nav aria-label="Quick links">
          <h3 className="mb-4 text-base font-bold tracking-wider text-white">Quick link</h3>
          <ul className="flex flex-col gap-1">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a className="text-sm italic transition hover:text-white" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Profile">
          <h3 className="mb-4 text-base font-bold tracking-wider text-white">Profile</h3>
          <ul className="flex flex-col gap-1">
            {profileLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="text-sm italic transition hover:text-white"
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 text-base font-bold tracking-wider text-white">Contacts</h3>
          <ul className="flex flex-col gap-2 text-sm italic">
            <li>
              <a className="transition hover:text-white" href={site.phoneHref}>
                ☎ {site.phone}
              </a>
            </li>
            <li>
              <a className="break-all transition hover:text-white" href={`mailto:${site.email}`}>
                ➤ {site.email}
              </a>
            </li>
            <li>⌖ {site.location}</li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-[1160px] border-t border-white/10 py-7 text-center text-sm italic tracking-wide">
        Copyright {new Date().getFullYear()} | {site.name}
      </p>
    </footer>
  )
}

function Social({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#111113] text-[10px] font-bold uppercase text-white/80 transition hover:bg-white/10"
    >
      {children}
    </a>
  )
}
