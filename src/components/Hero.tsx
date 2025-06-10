
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-muted">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Md Raihanul Haque</span>
            <br />
            <span className="text-primary">"Rahi"</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Mechatronics Engineering Student & Backend Engineer
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Making AI accessible to everyone through innovative backend solutions and computer vision projects
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200 hover-scale"
            >
              Get In Touch
            </a>
            <a
              href="#experience"
              className="border border-border px-8 py-3 rounded-lg hover:bg-muted transition-colors duration-200 hover-scale"
            >
              View My Work
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
