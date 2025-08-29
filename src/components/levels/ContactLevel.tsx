import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Github, 
  Linkedin, 
  Instagram, 
  Download, 
  Send, 
  User, 
  MessageSquare,
  Briefcase,
  Trophy
} from "lucide-react";

// EmailJS service
const EMAILJS_PUBLIC_KEY = "VwxawXp0-BggAvAvZ";
const EMAILJS_TEMPLATE_ID = "template_rp89vzp";
const EMAILJS_SERVICE_ID = "service_ekvy7c8";

interface ContactLevelProps {
  onLevelChange?: (level: number) => void;
}

const ContactLevel = ({ onLevelChange }: ContactLevelProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize EmailJS
  useEffect(() => {
    // @ts-ignore - EmailJS is loaded from CDN
    window.emailjs?.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.projectType,
        message: formData.message
      };
      
      // Send email using EmailJS
      // @ts-ignore - EmailJS is loaded from CDN
      await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );
      
      toast({
        title: "TRANSMISSION SUCCESSFUL!",
        description: "Message received in the cybernet. Expect a response soon, player!",
      });
      setFormData({ name: "", email: "", projectType: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "TRANSMISSION FAILED!",
        description: "Connection error in the cybernet. Please try again, player.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Faisal18Ansari",
      color: "text-foreground hover:text-secondary",
      description: "Check out my code repositories"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/faisal-mujahid-745168273",
      color: "text-foreground hover:text-accent",
      description: "Connect with me professionally"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/faisa1.exe/",
      color: "text-foreground hover:text-neon-pink",
      description: "Follow my journey"
    },
    {
      name: "Itch.io",
      icon: Trophy,
      url: "https://faisal-mujahid.itch.io/",
      color: "text-foreground hover:text-electric-blue",
      description: "Play my games"
    }
  ];

  const projectTypes = [
    "Game Development",
    "Unity Project",
    "Freelance Opportunity",
    "Collaboration",
    "Consultation",
    "Other"
  ];

  return (
    <div className="container mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 animate-slideInUp">
        <h1 className="font-pixel text-3xl md:text-5xl text-secondary">
          EDUCATION
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
        <p className="text-muted-foreground font-mono text-base">
          FINAL LEVEL - ACADEMIC JOURNEY
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="level-card animate-slideInUp" style={{ animationDelay: '0.1s' }}>
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-secondary" />
              <h2 className="font-pixel text-lg text-secondary">ACADEMIC BACKGROUND</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Name</span>
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="bg-muted/50 border-border focus:border-secondary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-muted/50 border-border focus:border-secondary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center space-x-2">
                  <Briefcase className="w-4 h-4" />
                  <span>Project Type</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, projectType: type }))}
                      className={`p-2 text-xs rounded-lg border transition-colors ${
                        formData.projectType === type
                          ? 'border-secondary bg-secondary/20 text-secondary'
                          : 'border-border bg-muted/20 text-muted-foreground hover:border-secondary/50'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Message</span>
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hi!"
                  rows={5}
                  required
                  className="bg-muted/50 border-border focus:border-secondary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full pixel-button"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                    SENDING...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    SEND MESSAGE
                  </>
                )}
              </Button>
            </form>
          </div>
        </Card>

        {/* Social Links & Resume */}
        <div className="space-y-8">
          {/* Social Links */}
          <Card className="level-card animate-slideInUp" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <h2 className="font-pixel text-lg text-accent">PROFESSIONAL LINKS</h2>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-4 p-3 rounded-lg border border-border/50 hover:border-secondary/50 transition-all duration-300 hover:bg-secondary/10"
                  >
                    <social.icon className={`w-6 h-6 ${social.color} transition-colors`} />
                    <div className="flex-1">
                      <div className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {social.description}
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Card>

          {/* Resume Download */}
          <Card className="level-card animate-slideInUp" style={{ animationDelay: '0.3s' }}>
            <div className="text-center space-y-4">
              <h2 className="font-pixel text-lg text-electric-blue">DOWNLOAD RESUME</h2>
              <p className="text-sm text-muted-foreground">
                Get a comprehensive overview of my skills, experience, and projects
              </p>
              <Button 
                variant="outline" 
                className="pixel-button w-full"
                asChild
              >
                <a href="https://drive.google.com/file/d/1VrOYgPm30rbmkq1BHf3Y1u1CZBMtfV_L/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  DOWNLOAD PDF
                </a>
              </Button>
            </div>
          </Card>

          {/* Game Stats */}
          <Card className="level-card animate-slideInUp" style={{ animationDelay: '0.4s' }}>
            <div className="text-center space-y-6">
              <h2 className="font-pixel text-lg text-neon-pink">GAME COMPLETE!</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="font-pixel text-2xl text-secondary">5</div>
                  <div className="text-sm md:text-base text-muted-foreground">LEVELS CLEARED</div>
                </div>
                <div className="space-y-2">
                  <div className="font-pixel text-2xl text-accent">100%</div>
                  <div className="text-xs text-muted-foreground">COMPLETION</div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Thanks for playing through my portfolio!<br />
                  Ready to start a new game together?
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Final Message */}
      <div className="text-center animate-slideInUp" style={{ animationDelay: '0.5s' }}>
        <Card className="level-card max-w-2xl mx-auto">
          <div className="text-center space-y-4">
            <h2 className="font-pixel text-xl text-secondary">CONGRATULATIONS!</h2>
            <p className="text-muted-foreground">
              You have cleared all the levels! You can go back to any level you want 
              or contact me for work or maybe we can have a cup of coffee and discuss about more games!
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <Button 
                variant="outline" 
                size="sm"
                className="pixel-button border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-xs md:text-sm px-2 md:px-3 py-1 md:py-2"
                onClick={() => onLevelChange?.(1)}
              >
                LEVEL 1
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="pixel-button border-accent text-accent hover:bg-accent hover:text-accent-foreground text-xs md:text-sm px-2 md:px-3 py-1 md:py-2"
                onClick={() => onLevelChange?.(2)}
              >
                LEVEL 2
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="pixel-button border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-electric-blue-foreground text-xs md:text-sm px-2 md:px-3 py-1 md:py-2"
                onClick={() => onLevelChange?.(3)}
              >
                LEVEL 3
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="pixel-button border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-neon-pink-foreground text-xs md:text-sm px-2 md:px-3 py-1 md:py-2"
                onClick={() => onLevelChange?.(4)}
              >
                LEVEL 4
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="pixel-button border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-xs md:text-sm px-2 md:px-3 py-1 md:py-2"
                onClick={() => onLevelChange?.(5)}
              >
                FINAL LEVEL
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContactLevel;