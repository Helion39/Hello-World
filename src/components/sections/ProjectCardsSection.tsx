import { projects } from "@/data/projects";
import { useState } from "react";
import ProjectModal from "@/components/ui/project-modal";
import { Project } from "@/types";

const ProjectCardsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="project-cards" className="py-20 px-6 md:px-12 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover my technical and creative projects, from current builds to completed work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl p-6 flex flex-col transition-all duration-300 hover:scale-[1.02] cursor-pointer bg-card/80 dark:bg-card/20 border border-border/50 dark:border-border/20 shadow-lg hover:shadow-xl backdrop-blur-[20px]"
              onClick={() => handleProjectClick(project)}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${project.title}`}
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent dark:from-white/5 pointer-events-none" />
              
              {/* Project Image */}
              <div 
                className="relative w-full h-48 mb-6 flex items-center justify-center overflow-hidden rounded-xl group/image bg-muted/30 dark:bg-muted/20 border border-border/50 dark:border-border/20 backdrop-blur-[15px]"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-contain h-full max-w-full transition-transform duration-300 group-hover:scale-105" 
                />
                {(project.id === 'safe-elderly-care' || project.id === 'banddit-reddit-clone') && (
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                    <span className="text-white text-lg font-semibold">Coming Soon</span>
                  </div>
                )}
              </div>
              
              {/* Category Badge */}
              <div className="mb-3 flex items-center gap-2">
                <span 
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium text-muted-foreground bg-muted/50 dark:bg-muted/30 border border-border/50 dark:border-border/20 backdrop-blur-[10px]"
                >
                  {project.category}
                </span>
                {/* AI Tag - show for projects that have AI in technologies */}
                {project.technologies.includes("AI") && (
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium text-muted-foreground bg-muted/50 dark:bg-muted/30 border border-border/50 dark:border-border/20 backdrop-blur-[10px]"
                  >
                    AI
                  </span>
                )}
              </div>
              
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3 transition-colors duration-200">
                {project.title}
              </h3>
              
              {/* Project Period */}
              {project.period && (
                <p className="text-xs text-muted-foreground mb-2">{project.period}</p>
              )}
              
              {/* Project Description */}
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed line-clamp-3 flex-grow">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies
                  .filter((tech) => tech !== "AI" && tech !== "Full-Stack Development")
                  .map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 rounded-md text-xs font-medium text-muted-foreground bg-muted/50 dark:bg-muted/30 border border-border/50 dark:border-border/20 backdrop-blur-[10px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto">
                <button 
                  className="flex-1 px-4 py-2 rounded-lg text-muted-foreground font-medium text-sm transition-all duration-200 hover:scale-[1.02] bg-muted/50 dark:bg-muted/30 border border-border/50 dark:border-border/20 backdrop-blur-[10px] hover:bg-muted/70 dark:hover:bg-muted/50"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProjectClick(project);
                  }}
                >
                  View Details
                </button>
                {(project.id === 'safe-elderly-care' || project.id === 'banddit-reddit-clone') ? (
                  <button 
                    className="px-4 py-2 rounded-lg text-muted-foreground font-medium text-sm cursor-default bg-muted/30 dark:bg-muted/20 border border-border/50 dark:border-border/20 backdrop-blur-[10px]"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    Coming Soon
                  </button>
                ) : (
                  <button 
                    className="px-4 py-2 rounded-lg text-primary-foreground font-medium text-sm transition-all duration-200 hover:scale-[1.02] flex items-center gap-2 bg-primary hover:bg-primary/90"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    GitHub
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ProjectCardsSection;
