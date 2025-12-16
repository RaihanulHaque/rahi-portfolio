
import { Award, BookOpen, Trophy, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <BookOpen className="text-primary" size={32} />,
      title: "Q2 Journal Publication",
      subtitle: "Diet Engine: A Real-time Food Nutrition Assistant System",
      description: "Published research paper on personalized dietary guidance using AI and real-time nutrition analysis. This system provides intelligent dietary recommendations based on individual health profiles and nutritional requirements.",
      impact: "Published in Q2 Journal",
      tech: ["Machine Learning", "Real-time Systems", "Nutrition AI", "Personalized Recommendations"],
      category: "Research"
    },
    {
      icon: <Trophy className="text-primary" size={32} />,
      title: "2nd Place - Kibo Robot Programming Challenge",
      subtitle: "JAXA & NASA International Competition",
      description: "Secured 2nd position among 150+ teams in Bangladesh regional and progressed to international level. Programmed Astrobee robots for zero-gravity navigation and object recognition on the International Space Station (ISS).",
      impact: "232.9 points - 2nd Position",
      tech: ["Android Development", "Computer Vision", "Machine Learning", "Java", "3D Navigation"],
      category: "Competition",
      teamInfo: "Team: Cortex Robotics"
    },
    {
      icon: <Users className="text-primary" size={32} />,
      title: "AI Accessibility Advocate",
      subtitle: "Making AI Technology Accessible to Everyone",
      description: "Led initiatives at IntelSense AI to democratize artificial intelligence, developing user-friendly backend systems that enable non-technical users to leverage advanced AI capabilities in their daily workflows.",
      impact: "Serving 1000+ Users",
      tech: ["Django", "API Design", "AI Integration", "User Experience"],
      category: "Impact"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notable Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognized contributions to AI research, international competitions, and making technology accessible
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border border-border hover:shadow-xl transition-all duration-300 hover-scale"
            >
              <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-1 flex justify-center md:justify-start">
                  {achievement.icon}
                </div>
                
                <div className="md:col-span-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      achievement.category === 'Research' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      achievement.category === 'Competition' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                    }`}>
                      {achievement.category}
                    </span>
                    {achievement.teamInfo && (
                      <span className="text-sm text-muted-foreground">{achievement.teamInfo}</span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <h4 className="text-primary font-medium mb-3">{achievement.subtitle}</h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{achievement.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {achievement.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="md:col-span-3 text-center md:text-right">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <Award className="text-primary mx-auto md:ml-auto md:mr-0 mb-2" size={24} />
                    <p className="font-semibold text-primary">{achievement.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Ready to bring proven expertise to your next AI/ML project? <a href="#contact" className="text-primary hover:underline">Let's discuss your requirements</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
