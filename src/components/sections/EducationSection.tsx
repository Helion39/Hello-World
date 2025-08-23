import { education } from "@/data/education";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6 md:px-12 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic excellence in Information Technology and Cybersecurity
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu) => (
            <div 
              key={edu.id} 
              className="rounded-2xl p-6 transition-all duration-300 hover:scale-[1.01] bg-card/80 dark:bg-card/20 border border-border/50 dark:border-border/20 backdrop-blur-[20px]"
            >
              <div className="flex flex-col space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-muted-foreground mt-1">{edu.institution}</p>
                  <p className="text-muted-foreground/80 text-sm mt-1">{edu.period}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 rounded-full text-sm font-medium bg-primary/15 text-primary border-2 border-primary/30"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;