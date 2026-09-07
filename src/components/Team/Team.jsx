import "./Team.css";
import Reveal from "../Reveal/Reveal";
import one from "../../images/Team/1.png";
import two from "../../images/Team/2.png";
import three from "../../images/Team/3.png";
import four from "../../images/Team/4.png";
import rectangle from "../../images/Team/Rectangle.svg";
import plane from "../../images/Team/plane.png";
import contactBg from "../../images/Team/bg.webp";

const STACK = [
  {
    img: one,
    title: "Node.js",
    text: "JavaScript beyond the browser: scripts, tooling and APIs that sit next to the React app when the UI needs a backend edge.",
  },
  {
    img: two,
    title: "Tailwind CSS",
    text: "Utility-first styling for consistent spacing and type, used alongside SCSS and LESS when a project already has a CSS architecture.",
  },
  {
    img: three,
    title: "Redux Toolkit",
    text: "Slices, thunks and a single store for larger React products — less boilerplate than classic Redux, same predictable data flow.",
  },
  {
    img: four,
    title: "GitLab & Bitbucket",
    text: "The same Git habits on every host: feature branches, pull requests and reviews, whether the remote is GitHub, GitLab or Bitbucket.",
  },
];

export default function Team() {
  return (
    <section className="relative isolate z-0 flex w-full flex-col items-center bg-[#171719] px-5 py-12 sm:px-8 md:py-[100px]">
      <div className="flex w-full max-w-[1160px] flex-col items-center">
        <Reveal className="mb-10 max-w-[510px] text-center md:mb-16">
          <h3 className="mb-[6px] text-[14px] uppercase tracking-[2px]">
            also using
          </h3>
          <h2 className="mb-[10px] text-[clamp(28px,4vw,32px)] tracking-[1px] text-white">
            More <span className="text-[#194BFD]">tools I work with</span>
          </h2>
          <p className="mx-auto max-w-[480px] leading-6">
            Beyond the core React stack I work with Node.js for tooling, Tailwind
            for rapid UI, Redux Toolkit for app state, and Git on GitHub, GitLab
            or Bitbucket — whatever the team already uses.
          </p>
        </Reveal>

        <div className="mb-12 grid w-full grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:mb-[72px] lg:grid-cols-4 lg:gap-6">
          {STACK.map((member, index) => (
            <Reveal
              as="article"
              key={member.title}
              delay={index * 120}
              className="group flex w-full max-w-[300px] flex-col rounded-xl p-2 transition-colors duration-500 hover:bg-[#111111]/40 sm:max-w-[241px]"
            >
              <div className="relative isolate mb-5 h-[215px] w-full">
                <img
                  src={rectangle}
                  alt=""
                  className="pointer-events-none absolute inset-x-0 bottom-[-22px] z-0 w-full"
                />
                <img
                  src={member.img}
                  alt={member.title}
                  className="relative z-[1] h-full w-full rounded-2xl object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="px-1 pt-1 text-start">
                <h3 className="mb-2 text-[18px] text-white">{member.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {member.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          variant="scale"
          className="flex min-h-[171px] w-full max-w-[1138px] flex-col items-center justify-between gap-6 overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat px-5 py-6 sm:flex-row sm:px-8 md:px-[54px] md:py-10"
          style={{ backgroundImage: `url(${contactBg})` }}
        >
          <div className="flex w-full max-w-[454px] items-center gap-3 text-center sm:gap-4 sm:text-start">
            <img
              src={plane}
              alt=""
              className="size-[clamp(48px,8vw,85px)] shrink-0"
            />
            <div className="min-w-0 text-start">
              <h2 className="mb-1 text-[clamp(20px,2.4vw,32px)] font-bold text-white">
                Have a project in mind?
              </h2>
              <p className="text-[clamp(12px,1.4vw,14px)] leading-relaxed">
                If you have a Figma file or a product idea, I can turn it into a
                React interface that is fast, accessible and ready to ship.
              </p>
            </div>
          </div>
          <a
            className="team__button flex min-h-[40px] w-full min-w-[180px] shrink-0 items-center justify-center rounded-full border border-[#194BFD] px-6 text-[14px] text-white transition-all duration-500 sm:w-auto sm:min-w-[215px]"
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              window.dispatchEvent(new CustomEvent("open-discuss"));
            }}
          >
            Contact now
          </a>
        </Reveal>
      </div>
    </section>
  );
}
