
import { FlipWords } from "@/components/ui/flip-words";
// Import the portrait image from public/png/MePicPort.jpg
import MePicPort from "@/../public/png/MePicPort.jpg";

const HeroSection = () => {
  const specialties = ["Web Development", "Cybersecurity", "UI/UX Design"];

  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-12 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-7xl mx-auto w-full">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center space-y-6 text-center">
          <div className="flex justify-center">
            <div 
              className="p-2 rounded-xl drop-shadow-lg bg-card/80 dark:bg-card/20 border-2 border-border/50 dark:border-border/20 backdrop-blur-[20px]"
            >
              <img
                src={MePicPort}
                alt="Portrait of Mohammad Nabil Hanif"
                className="w-[120px] h-auto object-contain rounded-lg"
                draggable={false}
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-light text-foreground tracking-tight">
                Mohammad Nabil Hanif
              </h1>
              <h2 className="text-lg text-muted-foreground font-light">
                Full-Stack Developer & Systems Analyst
              </h2>
              <div className="text-base text-muted-foreground font-medium min-h-[24px] flex items-center justify-center">
                <FlipWords 
                  words={specialties} 
                  duration={2500}
                  className="text-muted-foreground font-medium px-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-20 items-center">
          <div className="flex justify-center items-center">
            <div 
              className="p-4 rounded-2xl drop-shadow-xl bg-card/80 dark:bg-card/20 border-3 border-border/50 dark:border-border/20 backdrop-blur-[20px]"
            >
              <img
                src={MePicPort}
                alt="Portrait of Mohammad Nabil Hanif"
                className="w-[320px] h-auto object-contain rounded-xl"
                draggable={false}
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
                Mohammad Nabil Hanif
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
                Full-Stack Developer & Systems Analyst
              </h2>
              <div className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium min-h-[32px] md:min-h-[40px] flex items-center">
                <FlipWords 
                  words={specialties} 
                  duration={2500}
                  className="text-muted-foreground font-medium px-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;