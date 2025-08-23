import { experiences } from "@/data/experience";
import { Shield, Gamepad2, Palette, Users } from "lucide-react";

const ExperienceScrollSection = () => {
  return (
    <section id="experience" className="bg-muted/30 dark:bg-muted/10">
      <div className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">Work Experiences</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hands-on experience in cybersecurity, development, and organizational leadership across diverse teams and projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className="rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] bg-card/80 dark:bg-card/20 border border-border/50 dark:border-border/20 backdrop-blur-[20px] shadow-lg"
              >
                {/* Company Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground font-medium text-sm mb-2">
                      {exp.company}
                    </p>
                  </div>
                  
                  {/* Company Icon */}
                  <div className="flex items-center">
                    {/* Company icons without container */}
                    {exp.company.includes('CTF Cybersecurity') && (
                      <Shield className="w-6 h-6 text-muted-foreground" />
                    )}
                    {exp.company.includes('Independent') && (
                      <Gamepad2 className="w-6 h-6 text-muted-foreground" />
                    )}
                    {exp.company.includes('Nuri') && (
                      <Palette className="w-6 h-6 text-muted-foreground" />
                    )}
                    {exp.company.includes('PUNICO') && (
                      <Users className="w-6 h-6 text-muted-foreground" />
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* Timeline indicator */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                  <span className="text-xs text-muted-foreground/80">
                    {exp.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceScrollSection;