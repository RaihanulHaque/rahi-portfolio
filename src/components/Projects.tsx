
const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Backend System",
      description: "Developed scalable backend infrastructure for IntelSense AI to make artificial intelligence accessible to everyone.",
      tech: ["Django", "Python", "REST APIs", "AI Integration"],
      status: "In Production",
      category: "Backend Development"
    },
    {
      title: "Computer Vision Application",
      description: "Built advanced computer vision solutions for real-world problem solving using modern ML techniques.",
      tech: ["Python", "OpenCV", "Machine Learning", "Image Processing"],
      status: "Completed",
      category: "AI & ML"
    },
    {
      title: "Flutter Mobile App",
      description: "Cross-platform mobile application with clean UI and smooth user experience.",
      tech: ["Flutter", "Dart", "Mobile UI", "State Management"],
      status: "In Development",
      category: "Mobile Development"
    },
    {
      title: "LLM Training Assistant",
      description: "Contributed to training large language models through RLHF techniques and coding assistance.",
      tech: ["Generative AI", "RLHF", "Model Training", "Code Review"],
      status: "Ongoing",
      category: "AI Training"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover-scale"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  project.status === 'In Production' ? 'bg-green-100 text-green-800' :
                  project.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                  project.status === 'In Development' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="mb-4">
                <span className="text-sm font-medium text-primary">{project.category}</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            More projects coming soon! I'm constantly working on new and exciting challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
