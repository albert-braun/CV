import One from "../../images/Services/one.svg";
import Two from "../../images/Services/two.svg";
import Three from "../../images/Services/three.svg";
import Four from "../../images/Services/four.svg";
import Five from "../../images/Services/five.svg";
import Six from "../../images/Services/six.svg";
import Reveal from "../Reveal/Reveal";

const SKILLS = [
  {
    title: "JavaScript & TypeScript",
    img: One,
    text: "The language of the UI: ES modules, async data, and TypeScript to keep large interfaces typed, readable and easier to refactor.",
  },
  {
    title: "React & Redux",
    img: Two,
    text: "Component-driven React with hooks, plus Redux and Redux Toolkit for shared state, side effects and predictable updates.",
  },
  {
    title: "HTML & CSS",
    img: Three,
    text: "Semantic markup and responsive CSS architecture — SCSS, LESS and Tailwind — with attention to layout, motion and accessibility.",
  },
  {
    title: "Webpack & Vite",
    img: Four,
    text: "Modern bundling for a fast local loop and production builds: code splitting, assets and a setup a team can actually run.",
  },
  {
    title: "Git & GitHub",
    img: Five,
    text: "Branching, reviews and clean history on GitHub, GitLab and Bitbucket — the same Git workflow used in product teams.",
  },
  {
    title: "Figma & Photoshop",
    img: Six,
    text: "Close to design: inspect Figma, match spacing and type, and ship interfaces that look like the file — not an approximation.",
  },
];

export default function Services() {
  return (
    <section
      id="skills"
      className="flex w-full scroll-mt-[108px] flex-col items-center px-5 pt-[60px] pb-[50px] sm:px-8 md:pt-[100px] lg:pt-[120px]"
    >
      <div className="flex w-full max-w-[1160px] flex-col items-center">
        <Reveal className="mb-[40px] max-w-[510px] text-center md:mb-[72px]">
          <h3 className="mb-[6px] text-[14px] uppercase tracking-[2px]">
            Skills
          </h3>
          <h2 className="mb-[10px] text-[clamp(28px,4vw,32px)] tracking-[1px] text-white">
            My <span className="text-[#194BFD]">tech stack</span>
          </h2>
          <p className="mx-auto max-w-[480px] leading-6">
            A focused front-end stack: JavaScript and TypeScript, React with
            Redux, semantic HTML/CSS, Vite or Webpack, Git, and Figma. I use
            these tools the way product teams do — to ship UI that is reusable,
            reviewable and ready for production.
          </p>
        </Reveal>

        <div className="grid w-full grid-cols-1 justify-items-center gap-x-4 gap-y-9 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-2.5 lg:gap-y-[55px]">
          {SKILLS.map((item, index) => (
            <Reveal
              as="article"
              key={item.title}
              delay={(index % 3) * 120}
              className="group relative z-0 flex w-full max-w-[369px] min-h-[260px] flex-col items-center px-4 pt-2 pb-[22px] text-center before:pointer-events-none before:absolute before:inset-x-0 before:top-3 before:bottom-0 before:-z-10 before:bg-black/20 before:content-[''] lg:max-w-none"
            >
              <span
                className="pointer-events-none absolute "
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute "
                aria-hidden="true"
              />

              <div className="relative z-10 mb-7 grid size-[88px] place-items-center before:absolute before:size-[70px] before:rounded-[18px] before:border before:border-[#6b6375] before:bg-[#16171d] before:content-[''] before:rotate-[-45deg] before:shadow-none before:transition-[transform,border-color,box-shadow] before:duration-[1200ms] before:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:before:rotate-[410deg] group-hover:before:border-[#194BFD]/90 group-hover:before:shadow-[0_0_18px_rgba(25,75,253,0.22)] group-focus-within:before:rotate-[410deg] group-focus-within:before:border-[#194BFD]/90 group-focus-within:before:shadow-[0_0_18px_rgba(25,75,253,0.22)] motion-reduce:before:transition-none motion-reduce:group-hover:before:rotate-[-45deg] motion-reduce:group-focus-within:before:rotate-[-45deg]">
                <img
                  src={item.img}
                  alt=""
                  className="relative z-10 size-[35px]"
                />
              </div>

              <h3 className="relative z-10 mb-[18px] pb-4 text-[18px] font-bold tracking-[0.4px] text-white before:absolute before:bottom-0 before:left-1/2 before:h-[3px] before:w-8 before:-translate-x-1/2 before:bg-[#194BFD] before:content-['']">
                {item.title}
              </h3>

              <p className="relative z-10 mb-[22px] max-w-[260px] text-[14px] leading-[1.6] text-[#9ca3af]">
                {item.text}
              </p>

              <a
                href="#portfolios"
                className="group/cta relative z-10 inline-flex min-w-[188px] items-center justify-between gap-3 rounded-full bg-[rgba(230,230,230,0.1)] px-[18px] text-[13px] font-medium italic leading-[40px] text-white transition-colors duration-300 hover:bg-[rgba(230,230,230,0.2)] focus-visible:bg-[rgba(230,230,230,0.2)]"
              >
                <span>View projects</span>
                <svg
                  className="h-2 w-4 shrink-0 transition-transform duration-300 group-hover/cta:translate-x-[5px] motion-reduce:translate-x-0 motion-reduce:transition-none"
                  viewBox="0 0 18 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 5h16M12.5 1.5 16.5 5l-4 3.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
