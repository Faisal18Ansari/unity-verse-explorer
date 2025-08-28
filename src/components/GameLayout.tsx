import { useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Zap, Home, User, Code, Briefcase, Mail } from "lucide-react";

interface GameLayoutProps {
  children: ReactNode;
  currentLevel: number;
  onLevelChange: (level: number) => void;
  totalLevels: number;
}

const GameLayout = ({ children, currentLevel, onLevelChange, totalLevels }: GameLayoutProps) => {
  const levels = [
    { id: 0, name: "START", icon: Home, color: "text-secondary" },
    { id: 1, name: "ABOUT ME", icon: User, color: "text-accent" },
    { id: 2, name: "MY SKILLS", icon: Code, color: "text-electric-blue" },
    { id: 3, name: "PROJECTS", icon: Zap, color: "text-neon-pink" },
    { id: 4, name: "EXPERIENCE", icon: Briefcase, color: "text-secondary" },
    { id: 5, name: "CONTACT", icon: Mail, color: "text-accent" }
  ];

  const currentLevelData = levels[currentLevel];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cyberpunk Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-space-navy to-nebula-purple opacity-90" />
      <div className="fixed inset-0 opacity-20" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }} />
      
      {/* Top Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 border-b border-border/30 backdrop-blur-sm">
        <div className="font-pixel text-sm text-secondary">
          LEVEL {currentLevel} - {currentLevelData?.name}
        </div>
        
        {/* Level Progress */}
        <div className="flex items-center space-x-4">
          {levels.map((level, index) => (
            <button
              key={level.id}
              onClick={() => onLevelChange(level.id)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                index <= currentLevel 
                  ? 'bg-secondary border-secondary animate-glow' 
                  : 'bg-transparent border-muted'
              }`}
              title={level.name}
            />
          ))}
        </div>

        <div className="font-mono text-xs text-muted-foreground">
          FAISAL_MUJAHID.EXE
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 min-h-[calc(100vh-88px)]">
        {children}
      </main>

      {/* Navigation Controls */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4 bg-card/80 backdrop-blur-md rounded-lg border border-border p-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onLevelChange(Math.max(0, currentLevel - 1))}
            disabled={currentLevel === 0}
            className="pixel-button"
          >
            <ChevronLeft className="w-4 h-4" />
            PREV
          </Button>

          <div className="font-pixel text-xs text-center min-w-[120px]">
            <div className="text-secondary">LEVEL {currentLevel}</div>
            <div className="text-muted-foreground text-[8px] mt-1">
              {currentLevelData?.name}
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => onLevelChange(Math.min(totalLevels, currentLevel + 1))}
            disabled={currentLevel === totalLevels}
            className="pixel-button"
          >
            NEXT
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Floating UFO (Next Level Indicator) */}
      {currentLevel < totalLevels && (
        <button
          onClick={() => onLevelChange(currentLevel + 1)}
          className="fixed top-1/2 right-8 z-20 transform -translate-y-1/2 animate-float"
          title="Click the UFO to enter next level"
        >
          <div className="w-12 h-8 bg-gradient-to-b from-accent to-secondary rounded-full relative">
            <div className="absolute inset-0 bg-accent/20 rounded-full animate-glow" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
            </div>
          </div>
        </button>
      )}
    </div>
  );
};

export default GameLayout;