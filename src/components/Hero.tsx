
import { ChevronDown, Code, Star, Trophy } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-4xl animate-bounce delay-1000">🤖</div>
        <div className="absolute top-40 right-20 text-3xl animate-pulse delay-500">⚡</div>
        <div className="absolute bottom-40 left-20 text-4xl animate-bounce delay-700">🔧</div>
        <div className="absolute bottom-20 right-10 text-2xl animate-pulse delay-300">💡</div>
      </div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-primary/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-primary/40 rounded-full animate-bounce delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Simplified Tech Stack */}
          <div className="flex justify-center gap-3 mb-8">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/20 transition-all duration-300 hover-scale">ML Engineer</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/20 transition-all duration-300 hover-scale">Backend Expert</span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/20 transition-all duration-300 hover-scale">OSS Contributor</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="text-foreground hover:text-primary transition-colors duration-500">Rahi</span>
            <br />
            <span className="text-primary/80 hover:text-primary transition-colors duration-500">builds AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto opacity-90">
            Making AI accessible to everyone with scalable solutions
          </p>
          
          {/* Minimalist Metrics */}
          <div className="flex justify-center gap-8 mb-12">
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-1 group-hover:text-primary transition-colors duration-300">
                <Code size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="text-2xl font-bold">4+</span>
              </div>
              <p className="text-sm text-muted-foreground">Years Exp</p>
            </div>
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-1 group-hover:text-primary transition-colors duration-300">
                <Trophy size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="text-2xl font-bold">1st</span>
              </div>
              <p className="text-sm text-muted-foreground">JAXA '25</p>
            </div>
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-1 group-hover:text-primary transition-colors duration-300">
                <Star size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="text-2xl font-bold">Microsoft</span>
              </div>
              <p className="text-sm text-muted-foreground">OSS Contrib</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 hover-scale font-medium group"
            >
              <span className="group-hover:tracking-wider transition-all duration-300">Let's Build Together</span>
            </a>
            <a
              href="#achievements"
              className="border border-border px-8 py-3 rounded-lg hover:bg-muted hover:border-primary/50 transition-all duration-300 hover-scale group"
            >
              <span className="group-hover:text-primary transition-colors duration-300">View Work</span>
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
