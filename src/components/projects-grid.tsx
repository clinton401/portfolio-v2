
import { ProjectCard } from '@/components/project-card';
import type { Project } from '@/types';

interface ProjectsGridProps {
  projects: Project[];
}

export const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - scroll animated */}
        <div className="mb-16 text-right">
          <h2 className="font-fira font-black text-4xl sm:text-5xl md:text-6xl text-foreground">
            Projects
          </h2>
          <div className="h-px mt-6 bg-gradient-to-l from-accent/30 via-border to-transparent" />
        </div>

        {/* Projects Grid - cards animate on scroll individually */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );

};