import { motion } from "motion/react";
import { Calendar, MapPin } from "lucide-react";
import { fadeInUp } from "@/lib/framer-motion-utils";
import { SectionHeader } from "./section-header";

import type { Experience } from "@/types";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export const ExperienceTimeline = ({
  experiences,
}: ExperienceTimelineProps) => {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto">
  

<SectionHeader text="Experience"/>
          

        {/* Timeline */}
        <div className="relative w-[90%] mx-auto space-y-12">
          {/* Vertical line */}
          {/* CHANGED: from-accent -> from-ring (Mid-tone grey for the spine) */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-ring/50 via-border to-transparent hidden sm:block" />

          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative pl-0 sm:pl-12"
            >
              {/* Timeline dot */}
              {/* CHANGED: bg-accent/50 -> bg-primary (Bright white dot) */}
              <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-primary ring-4 ring-background hidden sm:block -translate-x-[5px]" />

              {/* Card */}
              {/* CHANGED: hover:border-accent -> hover:border-ring (Visible border on hover) */}
              <div className="p-6 rounded-xl bg-card border border-border hover:border-ring hover:shadow-sm transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-primary/70" />
                      <span>
                        {exp.startDate} - {exp.endDate || "Present"}
                      </span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-primary/70" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Details */}
                {exp.details && exp.details.length > 0 && (
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {/* CHANGED: text-accent -> text-primary (Makes the bullet visible) */}
                        <span className="text-primary mt-1">▹</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech tags */}
                {exp.tech && exp.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        // CHANGED: Added border-border to give tags slightly more definition
                        className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground border border-transparent hover:border-border transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
