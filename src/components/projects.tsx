import { type FC } from "react";
import glamoraImg from "@/assets/glamora.png";
import audiovistaImg from "@/assets/audiovista.png";
import cinematicoImg from "@/assets/cinematico.png";
import getlinkedImg from "@/assets/getlinked.png";
// import worldsearchImg from "@/assets/worldsearch.png";
// import spacetourImg from "@/assets/spacetour.png";
// import cannanImg from "@/assets/cannann.png";
// import foodplugImg from "@/assets/foodplug.png";
// import gestureImg from "@/assets/gesture.png";
import linktideImg from "@/assets/linktide.png";
import resumifyImg from "@/assets/resumify.png"
import brizaImg from "@/assets/briza.png";
import studyAIImg from "@/assets/studyai.png";
import { Button } from "@/components/ui/button";
import { Links } from "@/components/links";
import { motion } from "motion/react";
import {blurAnimation, appearAnimation} from "@/lib/framer-motion-utils";
import { SectionHeader } from "./section-header";

export const Projects: FC = () => {
  const projects = [
    {
  name: "Resumify",
  imgUrl: resumifyImg,
  description:
    "Resumify is an all-in-one career toolkit built to help users create polished, job-ready documents and prepare for interviews. It includes an AI-powered resume builder and cover letter generator that can turn raw information into clean, professional content. Users can practice with tailored interview questions, take MCQ quizzes, and try virtual and coding challenges that sharpen real-world problem solving. The platform also provides automated resume reviews that highlight weak areas and suggest clear improvements. Everything is designed to make job preparation faster, easier, and more effective.",
  technologies: [
    "NextJS",
    "Better-Auth",
    "TailwindCSS",
    "Prisma",
    "TypeScript",
    "Gemini AI"
  ],
  filters: "NextJS",
  liveUrl: "https://resumiefy.vercel.app",
  // githubUrl: "https://github.com/clinton401/resumify"
},

    {
      name: "StudyAI",
      imgUrl: studyAIImg,
      description:
        "StudyAi is a free, AI-powered learning platform designed for students who want to study smarter, not harder. Users can upload PDF documents to receive instant summaries, generate multiple-choice questions, and get contextual writing assistance. The platform integrates cutting-edge AI tools and provides value without requiring login, making it accessible for quick, hassle-free studying on any device.",
      technologies: [
        "NextJS",
        "Next-Auth",
        "TailwindCSS",
        "MongoDB",
        "Typescript",
        "Google Gemini API",
      ],
      filters: "React",
      liveUrl: "https://studyaii.vercel.app",
      githubUrl: "https://github.com/clinton401/study-ai",
    },
    {
      name: "Briza",
      imgUrl: brizaImg,
      description:
        "Briza is a modern, feature-rich social media platform built from the ground up to enable real-time interaction and community engagement. Users can create posts, join and manage topic-based channels, participate in threaded discussions, and connect with others through a clean and responsive interface. It supports authentication, admin management, and real-time updates across the board.",
      technologies: [
        "NextJS",
        "TypeScript",
        "Next-Auth",
        "PostgresSQL",
        "TailwindCSS",
        "Shadcn UI",
      ],
      filters: "React",
      liveUrl: "https://briza-nine.vercel.app",
      githubUrl: "https://github.com/clinton401/briza",
    },
    {
      name: "Linktide",
      imgUrl: linktideImg,
      description:
        "Linktide is an all-in-one social media management tool that allows users to connect multiple accounts, schedule and post content, and monitor analytics from a single dashboard. Built for digital marketers and content creators, it offers a streamlined workflow for managing social presence efficiently and keeping track of performance across platforms.",
      technologies: [
        "NextJS",
        "TypeScript",
        "Next-Auth",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
      ],
      filters: "React",
      liveUrl: "https://linktide.vercel.app",
      githubUrl: "https://github.com/clinton401/linktide",
    },
    {
      name: "Glamora",
      imgUrl: glamoraImg,
      description:
        "Glamora is a sleek eCommerce web app tailored for the beauty industry. It showcases a wide range of high-quality cosmetic products with dynamic product filtering, real-time cart updates, and a modern user interface. Built with scalability in mind, the platform offers a smooth shopping experience from browsing to checkout.",
      technologies: [
        "NextJS",
        "TypeScript",
        "Redux",
        "TailwindCSS",
        "Shadcn UI",
      ],
      filters: "React",
      liveUrl: "https://glamora-three.vercel.app",
      githubUrl: "https://github.com/clinton401/Glamora",
    },
    {
      name: "Audiovista",
      imgUrl: audiovistaImg,
      description:
        "Audiovista is a Spotify-inspired music streaming app that allows users to explore trending albums, search artists, build custom playlists, and enjoy a personalized music experience. It features smooth navigation, real-time interactivity, and a visually appealing UI that mimics the feel of a full-scale music platform.",
      technologies: ["React", "JavaScript", "TailwindCSS"],
      filters: "React",
      liveUrl: "https://audiovista.netlify.app",
      githubUrl: "https://github.com/clinton401/Audiovista",
    },
    {
      name: "Cinematico",
      imgUrl: cinematicoImg,
      description:
        "Cinematico is a full-stack movie discovery app that lets users search for films, watch trailers, view ratings, and explore trending movies and TV shows. It offers rich movie data, interactive carousels, and a sleek interface that makes exploring new content both fun and engaging. Perfect for movie buffs who want all their info in one place.",
      technologies: [
        "React",
        "JavaScript",
        "TailwindCSS",
        "MongoDB",
        "ExpressJS",
        "SwiperJS",
      ],
      filters: "React",
      liveUrl: "https://cinematico.onrender.com",
      githubUrl: "https://github.com/clinton401/cinematico-fullstack",
    },
    //   {
    //     name: "Worldsearch",
    //     imgUrl: worldsearchImg,
    //     description:
    //       "Worldsearch is a simple yet powerful app for exploring countries around the world. Users can search by country name to get detailed information like capital cities, flags, population stats, and more — all in an intuitive and responsive UI.",
    //     technologies: ["React", "JavaScript"],
    //     filters: "React",
    //     liveUrl: "https://worldsearch.netlify.app",
    //     githubUrl: "https://github.com/clinton401/worldsearch",
    //   },
    {
      name: "Getlinked",
      imgUrl: getlinkedImg,
      description:
        "A landing page created as part of a hackathon challenge, Getlinked is built with a focus on visual appeal, responsiveness, and clean layout. It captures the essence of the event and delivers information in a concise, user-friendly format.",
      technologies: ["React", "JavaScript"],
      filters: "React",
      liveUrl: "https://glinked.netlify.app/",
      githubUrl: "https://github.com/clinton401/getlinked",
    },
    //   {
    //     name: "Spacetour",
    //     imgUrl: spacetourImg,
    //     description:
    //       "Spacetour is a personal project that explores space tourism through an immersive design and animated interface. Though simple, it showcases creative layout techniques, animations, and responsive design.",
    //     technologies: ["React", "JavaScript"],
    //     filters: "React",
    //     liveUrl: "https://spaceetour.netlify.app",
    //     githubUrl: "https://github.com/clinton401/spacetour",
    //   },
    //   {
    //     name: "Joy & Sharon",
    //     imgUrl: cannanImg,
    //     description:
    //       "A beautifully crafted wedding website designed to share important event details, directions, and memorable photos of the couple. It includes an elegant image gallery and responsive design for mobile guests.",
    //     technologies: ["HTMl", "CSS", "JavaScript", "SwiperJS"],
    //     filters: "HTML & CSS",
    //     liveUrl: "https://cannan.netlify.app",
    //     githubUrl: "https://github.com/clinton401/josha",
    //   },
    //   {
    //     name: "Foodplug",
    //     imgUrl: foodplugImg,
    //     description:
    //       "Foodplug is a clean and functional food eCommerce demo featuring product sections, category filtering, and a shopping cart. It demonstrates the foundational elements of an online food store with attention to layout and user flow.",
    //     technologies: ["HTMl", "CSS", "JavaScript"],
    //     filters: "HTML & CSS",
    //     liveUrl: "https://foodplug1.netlify.app",
    //     githubUrl: "https://github.com/clinton401/food-plug-prog",
    //   },
    //   {
    //     name: "GestureClash",
    //     imgUrl: gestureImg,
    //     description:
    //       "GestureClash is a modern twist on the classic Rock-Paper-Scissors game. Built for fun, it features interactive animations, game logic, score tracking, and a clean interface that enhances the experience of playing against the computer.",
    //     technologies: ["React", "JavaScript"],
    //     filters: "React",
    //     liveUrl: "https://gestureclash.netlify.app",
    //     githubUrl: "https://github.com/clinton401/rock-paper-scissors",
    //   },
  ];

  return (
    <motion.section
    
         className="py-16"
      id="projects"
    >
      <SectionHeader text="Projects"/>
  
      {/* <h3 className=" text-white text-sm w-full text-center pb-4 font-bold" >
              .../Projects...
            </h3> */}
      <div className="flex flex-col gap-16 px-[5%]">
        {projects.map((project) => {
          return (
            <div
              className="flex flex-col-reverse md:flex-row md:justify-between  gap-8"
              key={project.name}
            >
              <motion.div
                className="w-full md:w-[35%]   "
                variants={blurAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <h4 className="text-xl font-bold pb-2">{project.name}</h4>
                <div className="w-full flex items-center gap-2 flex-wrap pb-4">
                  {project.technologies.map((tech) => {
                    return (
                      <Button
                        key={tech}
                        variant="outline"
                        className="rounded-full"
                      >
                        {tech}
                      </Button>
                    );
                  })}
                </div>
                <p className="text-sm pb-4">{project.description}</p>
                <div className="flex items-center gap-4 flex-wrap">
                  {project.githubUrl && <Links url={project.githubUrl} />}

                  <Links url={project.liveUrl} isGithubLink={false} />
                </div>
              </motion.div>
              <motion.div
                className=" w-full   md:w-[60%]  "
                variants={appearAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <img
                  alt={`${project.name} image`}
                  src={project.imgUrl}
                  className="w-full md:h-[350px] h-64  rounded-md object-cover object-top"
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};
