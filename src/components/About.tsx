
const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 hover:text-primary transition-colors duration-500">
            Why Work With Me?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover-scale cursor-pointer">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                Proven Results
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Q2 journal publication and international competition winner. I deliver measurable outcomes.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="group bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover-scale cursor-pointer">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                Production Scale
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Currently serving 1000+ users. I build systems that handle real-world complexity.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="group bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover-scale cursor-pointer">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔄</div>
              <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                Full Stack
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                From ML models to Django backends to Flutter apps - complete development pipeline.
              </p>
            </div>
          </div>
          
          {/* Bottom Stats */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-6 bg-card/30 backdrop-blur-sm px-8 py-4 rounded-full border border-border/30">
              <div className="text-center group cursor-pointer">
                <div className="text-lg font-bold group-hover:text-primary transition-colors duration-300">RUET</div>
                <div className="text-xs text-muted-foreground">Top Engineering</div>
              </div>
              <div className="w-px h-8 bg-border/50"></div>
              <div className="text-center group cursor-pointer">
                <div className="text-lg font-bold group-hover:text-primary transition-colors duration-300">IntelSense AI</div>
                <div className="text-xs text-muted-foreground">Backend Engineer</div>
              </div>
              <div className="w-px h-8 bg-border/50"></div>
              <div className="text-center group cursor-pointer">
                <div className="text-lg font-bold group-hover:text-primary transition-colors duration-300">AI for All</div>
                <div className="text-xs text-muted-foreground">Mission</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
