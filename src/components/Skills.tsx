
const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: ["Django", "Python", "REST APIs", "Database Design", "Server Architecture"],
      icon: "⚙️"
    },
    {
      title: "AI & Machine Learning",
      skills: ["Computer Vision", "Large Language Models", "Generative AI", "RLHF Training", "Model Training"],
      icon: "🤖"
    },
    {
      title: "Mobile Development",
      skills: ["Flutter", "Dart", "Cross-platform Apps", "UI/UX Design", "Mobile Architecture"],
      icon: "📱"
    },
    {
      title: "Engineering",
      skills: ["Mechatronics", "System Integration", "Problem Solving", "Technical Analysis", "Innovation"],
      icon: "🔧"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover-scale"
            >
              <div className="text-3xl mb-4 text-center">{category.icon}</div>
              <h3 className="text-lg font-semibold text-center mb-4">{category.title}</h3>
              
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-sm text-muted-foreground text-center py-1 px-2 bg-muted rounded"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
