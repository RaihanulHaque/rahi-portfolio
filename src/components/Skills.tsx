
const Skills = () => {
  const skillCategories = [
    {
      title: "AI & ML",
      skills: ["Computer Vision", "LLMs", "Generative AI", "RLHF", "Model Training"],
      icon: "🤖",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Backend",
      skills: ["Django", "Python", "REST APIs", "Database Design", "Architecture"],
      icon: "⚙️",
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      title: "Mobile",
      skills: ["Flutter", "Dart", "Cross-platform", "UI/UX", "Architecture"],
      icon: "📱",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Engineering",
      skills: ["Mechatronics", "Integration", "Problem Solving", "Analysis", "Innovation"],
      icon: "🔧",
      color: "from-yellow-500/20 to-orange-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 hover:text-primary transition-colors duration-500">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${category.color} backdrop-blur-sm p-6 rounded-2xl border border-border/30 hover:border-primary/30 transition-all duration-500 hover-scale cursor-pointer overflow-hidden`}
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-3xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-center mb-4 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-sm text-muted-foreground text-center py-1 px-3 bg-background/50 rounded-full border border-border/20 hover:border-primary/30 hover:text-primary transition-all duration-300"
                      style={{ animationDelay: `${skillIndex * 100}ms` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
