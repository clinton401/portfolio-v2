
import { SectionHeader } from "@/components/section-header"; 
import { Links } from "./links";
import {Fragment} from "react"

const frontendSkills = [
  "React",
  "Next.js",
  "React Native",
  "Redux",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Redux Toolkit",
];

const stylingSkills = [
  "Tailwind CSS",
  "Shadcn UI",
  "Material UI",
  "Radix UI",
  "Framer Motion",
  "Sass",
];

const backendSkills = [
  "Node.js",
  "Express.js",
  "Prisma",
  "JWT",
  "Passport.js",
  "Paystack",
  "MongoDB",
  "PostgreSQL",
  "REST API",
];


export const AboutSection = () => {
  const yearsOfExperience = new Date().getFullYear() - 2022;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="mx-auto px-[5%] relative z-10">
        <SectionHeader text="About Me" />

        <div className="flex  flex-col sm:flex-row gap-4 pb-16 ">
          <p className="sm:w-3/4 leading-relaxed">
            Hi, I'm
            <span className="text-white px-1 font-semibold italic">
              Clinton
            </span>
            , a
            <span className="text-white px-1 font-semibold italic">
              Full Stack Developer
            </span>
            with
            <span className="text-white px-1 font-semibold italic">
              {yearsOfExperience}+ years
            </span>
            of hands-on experience. I enjoy building
            <span className="text-white px-1 font-semibold italic">
              thoughtful and user-focused products
            </span>
            that feel good to interact with. I like shaping ideas into
            <span className="text-white px-1 font-semibold italic">
              clear, functional experiences
            </span>
            that actually help people get things done.
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-y-4 relative">
          <div className="flex flex-col w-full md:w-1/2 gap-4">
            <div className="w-full  rounded-[40px] bg-white p-6 flex flex-col ">
              <h4 className=" text-lg text-primary-foreground py-1">
                {" "}
                Front-end
              </h4>
              <div className="text-background">
                {frontendSkills.map((skills) => {
                  return (
                    <Fragment key={skills}>
                      <span className="text-sm ">{skills}</span>
                      {skills !== frontendSkills[frontendSkills.length - 1] && (
                        <span className="text-sm px-1">/ </span>
                      )}
                    </Fragment>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center gap-2 justify-between">
              <div className="w-[60%] sm:w-1/2 rounded-[40px] border p-6 flex flex-col">
                <h4 className=" text-lg py-1"> Styles</h4>
                <div className="">
                  {stylingSkills.map((skills) => {
                    return (
                      <Fragment key={skills}>
                        <span className="text-sm ">{skills}</span>
                        {skills !== stylingSkills[stylingSkills.length - 1] && (
                          <span className="text-sm px-1">/ </span>
                        )}
                      </Fragment>
                    );
                  })}
                </div>
              </div>
              <div className="grow items-center justify-center  flex">
                <Links />
              </div>
            </div>
            <div className="w-full  rounded-[40px] border p-6 flex flex-col ">
              <h4 className=" text-lg  py-1"> Back-end</h4>
              <div className="">
                {backendSkills.map((skills) => {
                  return (
                    <Fragment key={skills}>
                      <span className="text-sm ">{skills}</span>
                      {skills !== backendSkills[backendSkills.length - 1] && (
                        <span className="text-sm px-1">/ </span>
                      )}
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-[500px] sm:w-[600px] pointer-events-none aspect-square rounded-full border absolute top-[-30%] -right-1/2 sm:right-[-15%]" />
        </div>
      </div>
    </section>
  );
};