
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to discussing new opportunities, innovative projects, and ways to make AI more accessible. 
              Let's connect and explore how we can work together!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-card rounded-lg border border-border hover-scale">
              <Mail className="mx-auto mb-4 text-primary" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">rahi@example.com</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border border-border hover-scale">
              <Phone className="mx-auto mb-4 text-primary" size={32} />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+880 XXX XXX XXXX</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border border-border hover-scale">
              <MapPin className="mx-auto mb-4 text-primary" size={32} />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Rajshahi, Bangladesh</p>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-6 text-center">Send Me a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                  placeholder="Project Collaboration"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background resize-none"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200 hover-scale"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
