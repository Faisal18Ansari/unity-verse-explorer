import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState("");

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    const dotsInterval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 4) return "";
        return prev + ".";
      });
    }, 300);

    return () => {
      clearInterval(progressInterval);
      clearInterval(dotsInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center space-y-8">
        <div className="font-pixel text-2xl text-secondary animate-glow">
          INITIALIZING WORLD{dots}
        </div>
        
        <div className="w-80 h-2 bg-muted rounded-none border border-secondary">
          <div 
            className="h-full bg-gradient-to-r from-secondary to-accent transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="font-mono text-muted-foreground">
          {progress}% COMPLETE
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-secondary opacity-50 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;