const StatsSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">3.80</div>
            <div className="text-sm text-muted-foreground">GPA Score</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">6+</div>
            <div className="text-sm text-muted-foreground">Work Experiences</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">110</div>
            <div className="text-sm text-muted-foreground">English DET Score</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;