import {type FC, Fragment} from "react";
import {ArrowRight} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Twitter,
    Linkedin,
    Github,
    Mail,
    // Globe
} from "lucide-react";
import { Links } from "@/components/links";
  import { WorkTimeline } from "@/components/work-table";
  import {Projects} from "@/components/projects";
import { motion } from "motion/react";
import {
  leftAnimation,
  appearAnimation,
  rightAnimation,
  staggerVariants,
  blurAnimation
} from "@/lib/framer-motion-utils";
  
  export const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/phillips464",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/clinton-phillips-316a42250",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/clinton401",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:clintonphillips464@gmail.com",
    },
  
  ];

const frontendSkills = [
  "React",
  "Next.js",
  "React Native",
  "Redux",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Redux Toolkit"
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


const Home: FC = () => {
    return (
      <div className="w-full">
        <motion.section
          className="w-full px-[5%]"
          variants={appearAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className=" flex items-center justify-between flex-wrap gap-4 ">
            <motion.h1
              className="font-black font-fira text-white text-4xl md:text-6xl lg:text-8xl"
              variants={leftAnimation}
              // initial="hidden"
              // whileInView="visible"
              // viewport={{ once: true, amount: 0.2 }}
            >
              Full-stack
            </motion.h1>
            <motion.h1
              variants={rightAnimation}
              className="font-black font-fira w-full  text-4xl text-white sm:hidden flex items-center justify-end text-right pb-2"
            >
              Developer
            </motion.h1>
            <div className="sm:grow  w-full flex sm:items-center gap-2 flex-col sm:flex-row flex-wrap sm:w-auto  sm:justify-end ">
              <p className="w-[80%] pb-4  sm:hidden  min-w-[200px]">
                I focus on writing{" "}
                <span className="text-white italic font-bold">
                  clean, maintainable, and readable code
                </span>{" "}
                that makes building and improving products feel smooth and
                enjoyable.
              </p>
              <div className="w-[80%] min-w-[200px]  flex items-center gap-2 flex-wrap sm:w-auto sm:justify-end ">
                <Button
                  className="rounded-full h-[40px] grow sm:grow-0 sm:w-[250px]"
                  asChild
                  size="lg"
                >
                  <a href="#projects">Projects</a>
                </Button>

                <Button className="rounded-full h-[40px] aspect-square" asChild>
                  <a href="#projects">
                    <ArrowRight />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className=" hidden sm:flex items-center justify-between pt-4 gap-4  ">
            <div className="grow  ">
              <p className="w-[60%]  min-w-[300px]">
                I focus on writing{" "}
                <span className="text-white italic font-bold">
                  clean, maintainable, and readable code
                </span>{" "}
                that makes building and improving products feel smooth and
                enjoyable.
              </p>
            </div>
            <motion.h1
              variants={rightAnimation}
              className="font-black font-fira text-white sm:text-4xl md:text-6xl lg:text-8xl"
            >
              Developer
            </motion.h1>
          </div>
        </motion.section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerVariants}
          className="flex w-full flex-wrap gap-4 py-16 px-[5%] items-center sm:justify-center"
        >
          {socialLinks.map(({ name, icon: Icon, url }) => (
            <motion.div key={name} variants={blurAnimation}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 rounded-full px-4"
              >
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <Icon size={16} />
                  {name}
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
        <motion.section
          variants={appearAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-16 px-[5%]"
          id="about"
        >
          <div className="flex  flex-col sm:flex-row gap-4 pb-16 ">
            <h3 className=" text-white text-sm sm:w-1/4 font-bold">
              ... /About me ...
            </h3>
            <p className=" sm:w-3/4 leading-relaxed">
              Hi, I'm{" "}
              <span className="text-white pl-1 font-semibold italic">
                Clinton
              </span>{" "}
              — a
              <span className="text-white pl-1 font-semibold italic">
                {" "}
                Full Stack Developer
              </span>{" "}
              with
              <span className="text-white pl-1 font-semibold italic">
                {new Date().getFullYear() - 2020}+ years
              </span>{" "}
              of experience. I build{" "}
              <span className="text-white pl-1 font-semibold italic">
                clean, user-focused web and mobile apps
              </span>
              using tools like React and Node.js. I love turning ideas into
              <span className="text-white pl-1 font-semibold italic">
                functional digital products
              </span>
              .
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
                        {skills !==
                          frontendSkills[frontendSkills.length - 1] && (
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
                          {skills !==
                            stylingSkills[stylingSkills.length - 1] && (
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
            {/* <div className="w-full  flex items-center justify-center">
              <img
                src={profile}
                alt="Clinton Phillips"
                className=" w-full md:w-1/2 md:min-w-[350px] rounded-xl"
              />
              </div> */}
            <div className="w-[500px] sm:w-[600px] pointer-events-none aspect-square rounded-full border absolute top-[-40%] -right-1/2 sm:right-[-15%]" />
          </div>
        </motion.section>
        <motion.section
          variants={appearAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="  flex flex-col "
        >
          <motion.h2
            className="text-4xl sm:text-6xl w-full px-[5%] text-right font-black font-fira text-white py-4"
            variants={rightAnimation}
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: true, amount: 0.2 }}
          >
            Work
          </motion.h2>
          <hr className="pb-4 " />
          <div className="w-full px-[5%]">
            <WorkTimeline />
          </div>
        </motion.section>
        <Projects />
        <section
          className="pt-16 pb-8 px-[5%] flex gap-8 sm:items-center sm:justify-between flex-col-reverse sm:flex-row"
          id="contacts"
        >
          <motion.div
            variants={appearAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full sm:w-[50%] relative"
          >
            <div className="w-[500px] sm:w-[600px] pointer-events-none aspect-square rounded-full border absolute bottom-0 sm:top-[-50%] -right-1/2 sm:left-[-15%]" />
            <motion.h1
              variants={leftAnimation}
              className="font-black font-fira pb-4  text-white text-4xl md:text-6xl lg:text-8xl"
            >
              Clinton
            </motion.h1>
            <div className="w-full flex gap-2 items-center justify-between">
              <p>
                Full-stack
                <br />
                developer
              </p>
              <motion.h1
                variants={rightAnimation}
                className="font-black font-fira text-white text-4xl md:text-6xl lg:text-8xl"
              >
                Owoseni
              </motion.h1>
            </div>
          </motion.div>
          <motion.div
            className=" w-[80%] sm:w-[40%] "
            variants={appearAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className=" text-white text-sm w-full text-left pb-4 font-bold">
              ... /Contacts ...
            </h3>
            <div className="w-full px-4 py-6 rounded-xl border">
              <h4 className="text-lg  pb-2">Site</h4>
              <ul className="text-sm flex flex-col gap-2">
                <li>Handcrafted by ME /</li>
                <li>
                  Designed by{" "}
                  <a
                    href="https://www.behance.net/taisia_pro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-white"
                  >
                    Taisa
                  </a>
                  /
                </li>
                <li>Powered by ReactJS</li>
              </ul>
            </div>
          </motion.div>
        </section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerVariants}
          className="flex w-full flex-wrap gap-4 pb-16 px-[5%] items-center justify-center"
        >
          {socialLinks.map(({ name, icon: Icon, url }) => (
            <motion.div key={name} variants={blurAnimation}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 rounded-full px-4"
              >
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <Icon size={16} />
                  {name}
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
}



export default Home