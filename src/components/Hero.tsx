
import { ChevronDown, Code, Database, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-6xl">🤖</div>
        <div className="absolute top-40 right-20 text-4xl">⚡</div>
        <div className="absolute bottom-40 left-20 text-5xl">🔧</div>
        <div className="absolute bottom-20 right-10 text-3xl">💡</div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">ML Engineer</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Backend Expert</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">AI Specialist</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Md Raihanul Haque</span>
            <br />
            <span className="text-primary">"Rahi"</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            ML Engineer & Backend Architect | Making AI Accessible to Everyone
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Published researcher • Competition winner • Proven track record in delivering scalable AI solutions for real-world problems
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
            <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
              <div className="flex items-center justify-center mb-2">
                <Code className="text-primary mr-2" size={24} />
                <span className="text-2xl font-bold text-foreground">4+</span>
              </div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
              <div className="flex items-center justify-center mb-2">
                <Database className="text-primary mr-2" size={24} />
                <span className="text-2xl font-bold text-foreground">Q2</span>
              </div>
              <p className="text-sm text-muted-foreground">Journal Published</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
              <div className="flex items-center justify-center mb-2">
                <Zap className="text-primary mr-2" size={24} />
                <span className="text-2xl font-bold text-foreground">2nd</span>
              </div>
              <p className="text-sm text-muted-foreground">JAXA Competition</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-200 hover-scale font-medium"
            >
              Hire Me for Your Next Project
            </a>
            <a
              href="#achievements"
              className="border border-border px-8 py-3 rounded-lg hover:bg-muted transition-colors duration-200 hover-scale"
            >
              View My Achievements
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
