import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./Hero.css";
import Reveal from "../Reveal/Reveal";
import { resume } from "../../data/resume";
import arrowIcon from "../../images/Hero/arrow.svg";
import avatar from "../../images/Hero/avatar.png";
import Star from "../../images/Hero/star.png";
import PinkRound from "../../images/Hero/pinkRound.png";
import Round from "../../images/Hero/round.png";

export default function Hero() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpenDiscuss = () => setOpen(true);
    window.addEventListener("open-discuss", onOpenDiscuss);
    return () => window.removeEventListener("open-discuss", onOpenDiscuss);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <section id="home" className="Hero relative z-0 w-full overflow-hidden">
      <div className="relative z-10 mx-auto grid h-full w-full max-w-[1160px] items-center gap-6 px-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:gap-10 lg:px-8">
        <div className="max-w-[620px] text-center lg:text-start">
          <Reveal>
            <h1 className="mb-[clamp(10px,2.2svh,22px)] text-[clamp(36px,5.4vw,62px)] font-light leading-[1.08] tracking-[1px] text-white">
              This is your
              <span className="block">front-end developer</span>
              <span className="hero__name block font-extrabold">{resume.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mx-auto max-w-[470px] text-[clamp(14px,1.6vw,16px)] leading-7 text-white/70 lg:mx-0">
              {resume.hero}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-[clamp(18px,4svh,40px)] flex flex-wrap items-center justify-center gap-[18px] lg:justify-start">
              <button
                type="button"
                className="hero__button min-w-[180px] cursor-pointer rounded-[29px] border border-[#194BFD] px-[22px] text-[14px] font-semibold leading-[44px] text-white transition-all duration-500"
                onClick={() => setOpen(true)}
              >
                Contact me
              </button>
              <a
                href="#portfolios"
                className="hero__link inline-flex items-center gap-[10px] text-[14px] text-white"
              >
                View projects
                <img src={arrowIcon} alt="" className="h-[13px] w-[28px]" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal
          variant="right"
          delay={180}
          className="relative order-[-1] mx-auto flex h-[clamp(220px,40svh,520px)] w-full max-w-[520px] items-end justify-center lg:order-none lg:h-[min(680px,78svh)] lg:max-w-none"
        >
          <img
            src={Star}
            alt=""
            className="hero__spark pointer-events-none absolute top-[8%] right-[8%] z-20 w-[clamp(16px,2.4vw,28px)]"
          />
          <img
            src={Round}
            alt=""
            className="hero__spark pointer-events-none absolute top-[16%] left-[6%] z-20 w-[clamp(22px,3vw,40px)]"
          />
          <img
            src={PinkRound}
            alt=""
            className="pointer-events-none absolute bottom-[26%] left-0 z-20 w-[clamp(28px,4vw,52px)]"
          />

          <div className="hero__glow absolute bottom-[8%] size-[clamp(180px,36vw,380px)] rounded-full" />
          <img
            src={avatar}
            alt={resume.name}
            className="hero__avatar relative z-10 h-full w-auto max-w-full object-contain object-bottom"
          />

          <div className="circle-wrapper absolute right-1 bottom-[14%] z-30 size-[clamp(84px,11vw,134px)] lg:right-2">
            <svg className="rotating-svg h-full w-full" viewBox="0 0 134 134">
              <defs>
                <linearGradient
                  id="heroPurpleGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#4f46e5" />
                  <stop offset="100%" stopColor="#d946ef" />
                </linearGradient>
                <path
                  id="heroTextPath"
                  d="M 67, 67 m -43, 0 a 43,43 0 1,1 86,0 a 43,43 0 1,1 -86,0"
                />
              </defs>
              <circle
                cx="67"
                cy="67"
                r="65"
                stroke="url(#heroPurpleGrad)"
                strokeWidth="1.5"
                fill="none"
              />
              <text className="curved-text">
                <textPath href="#heroTextPath" startOffset="0%">
                  Front-End React Developer •
                </textPath>
              </text>
            </svg>
            <svg
              className="center-star pointer-events-none absolute top-1/2 left-1/2 h-[22%] w-[22%] -translate-x-1/2 -translate-y-1/2"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z"
                fill="#fff"
              />
            </svg>
          </div>
        </Reveal>
      </div>

      {open &&
        createPortal(
          <div
            className="hero__backdrop fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <form
              className="hero__modal relative z-10 flex w-full max-w-[480px] flex-col gap-[14px] rounded-[18px] border border-white/10 bg-[#171719] px-7 py-8 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
              onSubmit={(event) => {
                event.preventDefault();
                setOpen(false);
              }}
            >
            <button
              type="button"
              className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full text-[22px] leading-none text-white/60 hover:bg-white/10 hover:text-white"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <h2 className="mb-2 text-center text-2xl font-bold text-white">
              Discuss your project
            </h2>
            <label className="flex flex-col gap-1.5 text-left text-[13px] font-medium text-gray-300">
              Your name
              <input
                className="rounded-[8px] border border-white/10 bg-[#111216] p-3 text-sm text-white focus:border-[#194BFD] focus:outline-none"
                type="text"
                name="name"
                placeholder="Enter your name..."
                required
              />
            </label>
            <label className="flex flex-col gap-1.5 text-left text-[13px] font-medium text-gray-300">
              Your email
              <input
                className="rounded-[8px] border border-white/10 bg-[#111216] p-3 text-sm text-white focus:border-[#194BFD] focus:outline-none"
                type="email"
                name="email"
                placeholder="Enter your email..."
                required
              />
            </label>
            <label className="flex flex-col gap-1.5 text-left text-[13px] font-medium text-gray-300">
              Your number
              <input
                className="rounded-[8px] border border-white/10 bg-[#111216] p-3 text-sm text-white focus:border-[#194BFD] focus:outline-none"
                type="tel"
                name="number"
                placeholder="Enter your number..."
                required
              />
            </label>
            <label className="flex flex-col gap-1.5 text-left text-[13px] font-medium text-gray-300">
              Project details
              <textarea
                className="resize-none rounded-[8px] border border-white/10 bg-[#111216] p-3 text-sm text-white focus:border-[#194BFD] focus:outline-none"
                name="details"
                rows={3}
                placeholder="Enter project details..."
              />
            </label>
            <button
              className="hero__button mt-2 min-w-[180px] cursor-pointer self-center rounded-[29px] border border-[#194BFD] px-[22px] text-[14px] font-semibold leading-[44px] text-white transition-all duration-500"
              type="submit"
            >
              Send Request
            </button>
            </form>
          </div>,
          document.body,
        )}
    </section>
  );
}
