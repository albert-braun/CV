import Arrow from "../../images/Work/Arrow.png";
import Reveal from "../Reveal/Reveal";
import { resume } from "../../data/resume";
import "./Work.css";

const STEPS = [
  { label: "Discover" },
  { label: "Structure" },
  { label: "Build UI" },
  { label: "State" },
  { label: "Test" },
  { label: "Ship" },
];

export default function Work() {
  return (
    <section
      id="about"
      className="Work flex w-full scroll-mt-[108px] flex-col items-center overflow-x-clip px-5 pt-[60px] pb-[50px] sm:px-8 md:pt-[100px]"
    >
      <div className="container flex w-full max-w-[1160px] flex-col items-center">
        <Reveal className="mb-[36px] flex max-w-[640px] flex-col items-center text-center md:mb-[56px]">
          <h3 className="mb-[6px] text-[14px] uppercase tracking-[2px]">
            about me
          </h3>
          <h2 className="mb-[10px] text-[clamp(28px,4vw,32px)] tracking-[1px] text-white">
            My <span className="text-[#194BFD]">work process</span>
          </h2>
          <p className="mb-3 max-w-[600px] leading-6">{resume.about}</p>
          <p className="mb-3 max-w-[600px] leading-6">{resume.aboutExtra}</p>
          <p className="max-w-[600px] leading-6">{resume.process}</p>
        </Reveal>

        <ol className="work__track">
          {STEPS.map((step, index) => {
            const isLast = index === STEPS.length - 1;

            return (
              <Reveal
                as="li"
                key={step.label}
                delay={index * 110}
                variant="scale"
                className="work__item"
              >
                <div className="work__diamond">
                  <div className="work__diamond-inner">
                    <div className="work__copy">
                      <span className="work__label">{step.label}</span>
                    </div>
                  </div>
                </div>
                {isLast ? null : (
                  <img
                    className="work__arrow"
                    src={Arrow}
                    alt=""
                    aria-hidden="true"
                  />
                )}
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
