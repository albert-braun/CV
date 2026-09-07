import "./Recommend.css";
import Reveal from "../Reveal/Reveal";
import { resume } from "../../data/resume";

import Signature from "../../images/Recommend/signature.png";
import Avatar from "../../images/Recommend/avatar.webp";

export default function Recommend() {
  return (
    <section
      id="education"
      className="recommend flex w-full max-w-[1228px] scroll-mt-[108px] justify-center pt-[35px]"
    >
      <div className="container flex lg:justify-start justify-center  gap-[clamp(30px,6vw,105px)] p-[clamp(20px,5vw,70px)] flex-wrap">
        <Reveal variant="left" className="recommend__img-box relative ">
          <img src={Avatar} alt={resume.name} />
          <div className="absolute right-[-70px] bottom-[-72px] ">
            <div className="circle-wrapper">
              <svg viewBox="0 0 134 134">
                <defs>
                  <linearGradient
                    id="purpleGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#4f46e5" />
                    <stop offset="100%" stopColor="#d946ef" />
                  </linearGradient>

                  <path
                    id="textPath"
                    d="M 67, 67 m -43, 0 a 43,43 0 1,1 86,0 a 43,43 0 1,1 -86,0"
                  />
                </defs>

                <circle
                  cx="67"
                  cy="67"
                  r="65"
                  stroke="url(#purpleGrad)"
                  strokeWidth="1.5"
                  fill="none"
                />

                <text className="curved-text">
                  <textPath href="#textPath" startOffset="0%">
                    Front-End React Developer •
                  </textPath>
                </text>
              </svg>
              <svg className="center-star" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z"
                  fill="#fff"
                />
              </svg>
            </div>
          </div>
        </Reveal>
        <Reveal variant="right" delay={160} className="recommend__text-box max-w-[600px]  flex flex-col justify-center text-start pt-[5px]  pr-[50px] relative">
          <h3 className="mb-2 text-[14px] uppercase tracking-[2px]">Education</h3>
          <h2 className="text-[18px] tracking-normal mb-[1.2em] font-bold text-white">
            {resume.education.degree}
          </h2>
          <p className="mb-[17px] text-[14px] leading-[20px]">
            {resume.education.school}
          </p>
          <p className="mb-[10px] text-[14px] leading-[20px]">
            {resume.education.dates}
          </p>
          <p className="mb-[12px] text-[14px] leading-[20px]">
            {resume.education.summary}
          </p>
          <img src={Signature} alt="" className="w-[clamp(100px,12vw,160px)]" />
        </Reveal>
      </div>
    </section>
  );
}
