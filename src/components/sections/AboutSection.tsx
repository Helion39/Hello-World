import { skills } from "@/data/skills";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            I am an Information Technology enthusiast currently studying Informatics at President University, passionate about building digital experiences that are functional, intuitive, and secure. I believe that the best technology feels both effortless and safe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-medium text-foreground mb-6">Core Skills</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Analytical Thinking</strong> - Skilled in evaluating complex systems, identifying inconsistencies, and making data-driven decisions through structured problem-solving approaches.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Team Collaboration</strong> - Collaborates effectively in diverse teams by contributing ideas, actively listening, and adapting to dynamic group settings.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Leadership & Initiative</strong> - Actively contributes in team settings by planning activities, supporting peers, and ensuring shared goals are met responsibly.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Adaptability & Growth Mindset</strong> - Eager to learn new tools and ideas, and adapts quickly when faced with unfamiliar challenges.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-foreground mb-6">Core Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 hover:scale-[1.02] bg-card/80 dark:bg-card/20 border border-border/50 dark:border-border/20 backdrop-blur-[15px]"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                    <div className="text-lg">{skill.icon}</div>
                  </div>
                  <span className="text-foreground font-medium text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;