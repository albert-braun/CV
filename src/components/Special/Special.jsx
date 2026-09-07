import One from "../../images/Special/1.png";
import Two from "../../images/Special/2.png";
import Three from "../../images/Special/3.png";
import Reveal from "../Reveal/Reveal";
import "./Special.css";

const SPECIALITIES = [
  {
    name: "React & Redux",
    img: One,
    text: "Product UI with React, Redux and Redux Toolkit — scalable components and clear state.",
  },
  {
    name: "JavaScript & TypeScript",
    img: Two,
    text: "Modern JavaScript and TypeScript for maintainable front-end code in agile teams.",
  },
  {
    name: "UI from Figma",
    img: Three,
    text: "Pixel-accurate, responsive layouts from Figma and Photoshop — HTML, CSS, SCSS and Tailwind.",
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
          Front-end work I focus on: React interfaces, JavaScript, and turning
          design files into production UI.
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
