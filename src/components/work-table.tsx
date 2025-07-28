"use client";
import { motion } from "motion/react";

const experiences = [
  {
    time: "2024 – 2025",
    company: "Nobox Labs",
    position: "Full Stack Developer",
    location: "Remote",
    tech: ["Next.js", "Node.js", "TailwindCSS", "PostgreSQL", "React Native"],
  },
  {
    time: "2022",
    company: "Xerax Labs Inc.",
    position: "Junior Frontend Developer",
    location: "Remote",
    tech: ["React", "TypeScript", "Sass"],
  },
  {
    time: "2023",
    company: "Getlinked Hackathon",
    position: "Frontend Developer",
    location: "Hackathon",
    tech: ["React", "Framer Motion"],
  },
];

const timelineVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

export function WorkTimeline() {
  return (
    <div className="relative border-l border-zinc-300 dark:border-zinc-700 pl-6 space-y-10">
      {experiences.map((exp, i) => (
        <motion.div
          key={exp.company}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={i}
          variants={timelineVariant}
          className="relative pl-2"
        >
          <div className="absolute -left-[10px] top-1.5 w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full shadow-md" />

          <div className="text-sm text-zinc-500">{exp.time}</div>
          <h3 className="text-lg font-bold font-fira text-white">{exp.company}</h3>
          <p className="text-zinc-600 dark:text-zinc-300">{exp.position}</p>
          <p className="text-sm text-zinc-500 mt-1">{exp.location}</p>

          <div className="mt-2 flex flex-wrap gap-2">
            {exp.tech.map((tech) => (
              <span
                key={tech}
                className="bg-zinc-100 dark:bg-zinc-800 text-xs text-zinc-700 dark:text-zinc-200 px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
