import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from "lucide-react";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* City silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-nebula-purple/20 to-transparent" />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-secondary rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="text-center space-y-8 z-10 animate-slideInUp">
        <div className="space-y-4">
          <h1 className="font-pixel text-4xl md:text-6xl text-secondary animate-glow">
            WELCOME
          </h1>
          <h2 className="font-pixel text-2xl md:text-4xl text-accent animate-pixelDance">
            PLAYER1
          </h2>
        </div>

        <div className="space-y-2 font-inter">
          <p className="text-lg text-muted-foreground">
            PRESS START TO
          </p>
          <p className="text-xl text-foreground font-semibold">
            ENTER STORY MODE
          </p>
        </div>

        <Button 
          onClick={onStart}
          className="pixel-button text-lg px-8 py-4 animate-glow"
        >
          START
        </Button>

        <div className="pt-8">
          <p className="font-pixel text-base md:text-lg text-muted-foreground mb-4">
            FOLLOW ME AT:
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/Faisal18Ansari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors duration-300 animate-float"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/faisal-mujahid-745168273" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300 animate-float"
              style={{ animationDelay: '0.5s' }}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://www.instagram.com/faisa1.exe/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-pink transition-colors duration-300 animate-float"
              style={{ animationDelay: '1s' }}
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;