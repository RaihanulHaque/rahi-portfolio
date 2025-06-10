
const Experience = () => {
  const experiences = [
    {
      title: "Backend Engineer",
      company: "IntelSense.ai",
      type: "Internship",
      duration: "Apr 2024 - Present • 1 yr 3 mos",
      location: "Remote",
      description: "Making AI accessible to everyone through robust backend solutions",
      skills: ["Back-End Web Development", "Django", "+1 skill"],
      logo: "🤖"
    },
    {
      title: "Machine Learning Engineer",
      company: "CORTEX Technologies",
      type: "Full-time",
      duration: "Jan 2024 - Present • 1 yr 6 mos",
      location: "Bangladesh",
      description: "Developing cutting-edge ML solutions and AI models",
      skills: ["Generative AI"],
      logo: "🧠"
    },
    {
      title: "AI Trainer",
      company: "Outlier",
      type: "Freelance",
      duration: "Sep 2024 - Dec 2024 • 4 mos",
      location: "Remote",
      description: "RLHF Trainer - Helping to train AI models by providing assistance on coding-related tasks",
      skills: ["Generative AI"],
      logo: "⚡"
    },
    {
      title: "AI Trainer",
      company: "Remotasks",
      type: "Freelance",
      duration: "Jul 2023 - Jan 2024 • 7 mos",
      location: "Remote",
      description: "Helping to train AI models by providing assistance on coding-related tasks",
      skills: ["Generative AI"],
      logo: "🚀"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover-scale"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{exp.logo}</div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <span className="text-sm text-muted-foreground">{exp.location}</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <span className="text-primary font-medium">{exp.company}</span>
                      <span className="text-sm text-muted-foreground">• {exp.type}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">{exp.duration}</p>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
