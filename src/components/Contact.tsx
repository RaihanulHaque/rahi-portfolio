
import { Mail, MapPin, Phone, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Ideas into Reality?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how my AI/ML expertise can accelerate your business goals. I'm currently available for new projects.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Value Proposition */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-card rounded-lg border border-border hover-scale">
              <Clock className="mx-auto mb-4 text-primary" size={32} />
              <h3 className="font-semibold mb-2">Quick Response</h3>
              <p className="text-muted-foreground text-sm">24-48 hour response time for project inquiries</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border border-border hover-scale">
              <CheckCircle className="mx-auto mb-4 text-primary" size={32} />
              <h3 className="font-semibold mb-2">Quality Assured</h3>
              <p className="text-muted-foreground text-sm">Published researcher with proven track record</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border border-border hover-scale">
              <Mail className="mx-auto mb-4 text-primary" size={32} />
              <h3 className="font-semibold mb-2">Free Consultation</h3>
              <p className="text-muted-foreground text-sm">30-minute project discussion at no cost</p>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-card rounded-lg border border-border hover-scale">
              <Mail className="mx-auto mb-4 text-primary" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">rahi.dev@example.com</p>
              <p className="text-sm text-muted-foreground mt-1">Business inquiries preferred</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border border-border hover-scale">
              <Phone className="mx-auto mb-4 text-primary" size={32} />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+880 XXX XXX XXXX</p>
              <p className="text-sm text-muted-foreground mt-1">Available 9 AM - 6 PM (GMT+6)</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border border-border hover-scale">
              <MapPin className="mx-auto mb-4 text-primary" size={32} />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Rajshahi, Bangladesh</p>
              <p className="text-sm text-muted-foreground mt-1">Remote work worldwide</p>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-6 text-center">Start Your AI/ML Project Today</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company Email *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background">
                    <option>AI/ML Development</option>
                    <option>Backend API Development</option>
                    <option>Computer Vision Project</option>
                    <option>Mobile App Development</option>
                    <option>Consultation & Strategy</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Timeline</label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background">
                    <option>ASAP (Rush project)</option>
                    <option>1-2 weeks</option>
                    <option>1 month</option>
                    <option>2-3 months</option>
                    <option>Long-term partnership</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Project Description *</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background resize-none"
                  placeholder="Describe your project requirements, goals, and any specific technologies you'd like to use..."
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200 hover-scale font-medium"
                >
                  Get Free Project Quote
                </button>
                <p className="text-sm text-muted-foreground mt-2">
                  No spam. Your information is kept confidential.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
