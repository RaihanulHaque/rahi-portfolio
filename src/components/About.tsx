
const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Me for Your AI/ML Projects?</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                <h3 className="font-semibold text-primary mb-2">🎯 Proven Track Record</h3>
                <p className="text-muted-foreground">
                  Published researcher with Q2 journal publication and international competition winner. I deliver results that matter.
                </p>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                <h3 className="font-semibold text-primary mb-2">🚀 Production-Ready Solutions</h3>
                <p className="text-muted-foreground">
                  Currently serving 1000+ users at IntelSense AI. I build scalable backend systems that handle real-world traffic and complexity.
                </p>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                <h3 className="font-semibold text-primary mb-2">🔄 End-to-End Expertise</h3>
                <p className="text-muted-foreground">
                  From ML model training to Django backends to Flutter mobile apps - I handle the complete development pipeline.
                </p>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-6 text-center">What You Get</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">University:</span>
                  <span className="font-medium">RUET (Top Engineering)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Specialization:</span>
                  <span className="font-medium">Mechatronics Engineering</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Current Role:</span>
                  <span className="font-medium">Backend Engineer</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Company:</span>
                  <span className="font-medium">IntelSense AI</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Mission:</span>
                  <span className="font-medium">AI Accessibility</span>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold mb-3">Client Benefits:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✅ Faster time-to-market</li>
                    <li>✅ Scalable architecture</li>
                    <li>✅ Cost-effective solutions</li>
                    <li>✅ Ongoing support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
