import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";
import { fadeInUp } from "@/lib/framer-motion-utils";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`group relative rounded-xl overflow-hidden bg-card border border-border hover:border-accent/50 transition-all ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      <div className={`p-6 ${project.featured ? "md:flex md:gap-6" : ""}`}>
        {/* Image */}
        {project.cover && (
          <div
            className={`relative rounded-lg overflow-hidden bg-muted ${
              project.featured ? "md:w-1/2" : "mb-4"
            }`}
          >
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-48 md:h-64 object-cover object-top"
              loading="lazy"
            />

            {project.featured && (
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-ring/10 opacity-40" />
            )}
          </div>
        )}

        {/* Content */}
        <div
          className={`py-6 flex flex-col justify-between ${
            project.featured ? "md:w-2/5" : ""
          }`}
        >
          <div>
            {/* Title with featured badge */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-xl font-bold text-foreground">
                {project.title}
              </h3>
              {project.featured && (
                <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-accent/20 to-ring/20 text-foreground border border-accent/30">
                  Featured
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* VISIBLE Action Links - Always shown */}
          <div className="flex gap-3 pt-4 border-t border-border">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-muted hover:bg-accent/10 text-foreground transition-colors"
              >
                <Github size={16} />
                <span>Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-muted hover:bg-accent/10 text-foreground transition-colors"
              >
                <ExternalLink size={16} />
                <span>Live</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};
