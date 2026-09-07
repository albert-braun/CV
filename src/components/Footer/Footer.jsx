import Reveal from "../Reveal/Reveal";
import { resume } from "../../data/resume";
import logo from "../../images/Footer/logo.svg";
import instagram from "../../images/Footer/in.svg";
import facebook from "../../images/Footer/f.svg";
import youtube from "../../images/Footer/y.svg";
import twitter from "../../images/Footer/t.svg";
import call from "../../images/Footer/call.svg";
import send from "../../images/Footer/send.svg";
import location from "../../images/Footer/location.svg";

const QUICK_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolios", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const IMPORTANT_LINKS = [
  { href: resume.github, label: "GitHub" },
  { href: resume.linkedin, label: "LinkedIn" },
  { href: resume.telegram, label: "Telegram" },
  { href: resume.githubRepos, label: "Repositories" },
  { href: `mailto:${resume.email}`, label: "Email" },
];

const SOCIALS = [
  { href: resume.linkedin, src: instagram, label: "LinkedIn" },
  { href: resume.github, src: youtube, label: "GitHub" },
  { href: resume.telegram, src: twitter, label: "Telegram" },
  { href: resume.githubRepos, src: facebook, label: "Repositories" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="flex w-full scroll-mt-[108px] justify-center px-5 pt-12 sm:px-8 md:pt-16"
    >
      <div className="w-full max-w-[1160px]">
        <Reveal className="grid grid-cols-1 gap-10 text-start sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:max-w-[289px]">
            <a
              href="#home"
              className="mb-5 inline-flex items-center gap-2 text-[16px] font-bold text-white"
            >
              <img src={logo} alt="" className="h-6 w-6" />
              {resume.shortTitle}
            </a>
            <p className="mb-5 max-w-[320px] text-[14px] leading-5">
              {resume.name} — {resume.title}. {resume.tagline}
            </p>
            <div className="flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#111113] transition-colors duration-300 hover:bg-white/10"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <img src={social.src} alt="" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="mb-4 text-[16px] font-bold tracking-wider text-white">
              Quick link
            </h3>
            <ul className="flex flex-col gap-1">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    className="text-[14px] italic transition-colors duration-300 hover:text-white"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Profile links">
            <h3 className="mb-4 text-[16px] font-bold tracking-wider text-white">
              Profile
            </h3>
            <ul className="flex flex-col gap-1">
              {IMPORTANT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    className="text-[14px] italic transition-colors duration-300 hover:text-white"
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-4 text-[16px] font-bold tracking-wider text-white">
              Contacts
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  className="flex items-center gap-2.5 text-[14px] italic transition-colors duration-300 hover:text-white"
                  href={resume.phoneHref}
                >
                  <img src={call} alt="" className="h-[15px] w-[15px] shrink-0" />
                  {resume.phone}
                </a>
              </li>
              <li>
                <a
                  className="flex min-w-0 items-center gap-2.5 text-[14px] italic transition-colors duration-300 hover:text-white"
                  href={`mailto:${resume.email}`}
                >
                  <img src={send} alt="" className="h-[15px] w-[15px] shrink-0" />
                  <span className="break-all">{resume.email}</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2.5 text-[14px] italic transition-colors duration-300 hover:text-white"
                  href={resume.locationHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={location}
                    alt=""
                    className="h-[15px] w-[15px] shrink-0"
                  />
                  {resume.location}
                </a>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-10 border-t border-white/10 py-7 text-center text-[14px] italic tracking-[0.5px]">
          <span>Copyright 2026 | {resume.name}</span>
        </Reveal>
      </div>
    </footer>
  );
}
