import One from "../../images/Special/1.png";
import Two from "../../images/Special/2.png";
import Three from "../../images/Special/3.png";
import Reveal from "../Reveal/Reveal";
import "./Special.css";

const SPECIALITIES = [
  {
    name: "React architecture",
    img: One,
    text: "Reusable components, hooks and Redux Toolkit so product UI stays predictable as features grow — the same approach used on mature React codebases.",
  },
  {
    name: "JavaScript & TypeScript",
    img: Two,
    text: "Modern ES and TypeScript for safer, maintainable front-end code: async flows, clear modules, and fewer regressions in team review.",
  },
  {
    name: "Design to production",
    img: Three,
    text: "Pixel-accurate, responsive implementation from Figma and Photoshop — semantic HTML, CSS/SCSS/Tailwind, accessibility and performance baked in.",
  },
];

export default function Special() {
  return (
    <section className="special flex flex-col items-center  pt-[40px]  md:pt-[100px] pb-[50px] ">
      <Reveal className="max-w-[510px] mb-[62px]">
        <h3 className="uppercase  mb-[5px] tracking-[2px]">speciality</h3>
        <h2 className="mb-[6px] text-[32px]">
          My
          <span className="text-[#194BFD] tracking-[3px]"> specialities</span>
        </h2>
        <p>
          I specialise in taking a design system and a product brief and turning
          them into a React interface that is fast, accessible and ready for a
          team to extend.
        </p>
      </Reveal>
      <div className="flex flex-wrap items-center justify-center gap-[10px]">
        {SPECIALITIES.map((item, index) => {
          return (
            <Reveal
              key={item.name}
              delay={index * 140}
              className="items-center flex flex-col text-center max-w-[369px] bg-[#111111]/40 backdrop-blur-sm pt-[30px]  p-8 rounded-2xl "
            >
              <div className="special__img mb-[10px]">
                <img className=" w-[48px] h-[48px]" src={item.img} alt="" />
              </div>

              <h2 className="mb-[16px] pb-[16px] text-[18px] relative before:content-[''] before:w-[30px] before:bg-[#194BFD] before:h-[2px] before:absolute before:bottom-0 before:right-[40%] break-before-all after:content-[''] after:bg-[#16171d] after:w-[4px] after:h-[2px] after:absolute after:bottom-0 after:right-[45%]">
                {item.name}
              </h2>
              <p>{item.text}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
