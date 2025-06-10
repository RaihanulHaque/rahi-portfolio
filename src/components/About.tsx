
const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                I'm a 4th-year Mechatronics Engineering student at RUET, passionate about bridging the gap between mechanical systems and intelligent software solutions.
              </p>
              
              <p className="text-lg text-muted-foreground">
                Currently working as a Backend Engineer at IntelSense AI, where I focus on making artificial intelligence accessible to everyone through robust backend architectures and innovative solutions.
              </p>
              
              <p className="text-lg text-muted-foreground">
                My expertise spans across Django web development, Computer Vision projects, Large Language Models, and mobile app development with Flutter. I believe in the power of technology to solve real-world problems.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">University:</span>
                  <span>RUET</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Major:</span>
                  <span>Mechatronics Engineering</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Current Role:</span>
                  <span>Backend Engineer</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Company:</span>
                  <span>IntelSense AI</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Focus:</span>
                  <span>AI Accessibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
