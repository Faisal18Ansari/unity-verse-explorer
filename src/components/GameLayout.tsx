import { useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { ChevronLeft, ChevronRight, Zap, User, Code, Briefcase, GraduationCap } from "lucide-react";
=======
import { ChevronLeft, ChevronRight, Zap, Home, User, Code, Briefcase, GraduationCap } from "lucide-react";
>>>>>>> 57b65ccd818d29f4507f5211a6792dba6de49209

interface GameLayoutProps {
  children: ReactNode;
  currentLevel: number;
  onLevelChange: (level: number) => void;
  totalLevels: number;
}

const GameLayout = ({ children, currentLevel, onLevelChange, totalLevels }: GameLayoutProps) => {
  const levels = [
<<<<<<< HEAD
    { id: 1, name: "About Me", icon: User, color: "text-secondary" },
    { id: 2, name: "Skills", icon: Code, color: "text-accent" },
    { id: 3, name: "Projects", icon: Zap, color: "text-electric-blue" },
    { id: 4, name: "Experience", icon: Briefcase, color: "text-neon-pink" },
    { id: 5, name: "Education", icon: GraduationCap, color: "text-cyan-400" }
=======
    { id: 1, name: "ABOUT ME", icon: User, color: "text-cyber-cyan" },
    { id: 2, name: "SKILLS", icon: Code, color: "text-cyber-cyan" },
    { id: 3, name: "PROJECTS", icon: Zap, color: "text-cyber-cyan" },
    { id: 4, name: "EXPERIENCE", icon: Briefcase, color: "text-cyber-cyan" },
    { id: 5, name: "EDUCATION", icon: GraduationCap, color: "text-cyber-cyan" }
>>>>>>> 57b65ccd818d29f4507f5211a6792dba6de49209
  ];

  const currentLevelData = levels[currentLevel - 1];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cyberpunk Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-space-navy to-nebula-purple opacity-90" />
      <div 
        className="fixed inset-0 opacity-20" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
<<<<<<< HEAD
      {/* Top Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 border-b border-gray-700/50 backdrop-blur-sm navbar-transition">
        <div className={`font-pixel text-base md:text-lg ${currentLevelData?.color}`}>
          LEVEL {currentLevel} - {currentLevelData?.name}
        </div>
        
        {/* Level Progress */}
        <div className="flex items-center space-x-4">
          {levels.map((level) => (
            <button
              key={level.id}
              onClick={() => onLevelChange(level.id)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 hover:scale-110 group relative ${
                level.id <= currentLevel 
                  ? `${level.color} border-current animate-pulse` 
                  : 'bg-transparent border-gray-500/50 hover:border-gray-300'
              }`}
              title={level.name}
            />
          ))}
        </div>
=======
             {/* Top Navigation */}
       <nav className="relative z-10 flex items-center justify-between p-6 border-b border-cyber-cyan/30 backdrop-blur-sm navbar-transition">
                  <div className="font-pixel text-base md:text-lg text-cyber-cyan">
            LEVEL {currentLevel} - {currentLevelData?.name}
          </div>
        
                 {/* Level Progress */}
         <div className="flex items-center space-x-4">
           {levels.map((level, index) => (
             <button
               key={level.id}
               onClick={() => onLevelChange(level.id)}
                             className={`w-3 h-3 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
                level.id <= currentLevel 
                  ? 'bg-cyber-cyan border-cyber-cyan animate-pulse' 
                  : 'bg-transparent border-cyber-cyan/50 hover:border-cyber-cyan'
              }`}
               title={level.name}
             />
           ))}
         </div>
>>>>>>> 57b65ccd818d29f4507f5211a6792dba6de49209

        <div className="font-mono text-sm md:text-base text-muted-foreground">
          FAISAL_MUJAHID.EXE
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 min-h-[calc(100vh-88px)] level-transition">
        {children}
      </main>

<<<<<<< HEAD
      {/* Navigation Controls */}
      <div className="fixed z-20 bottom-4 left-4 md:bottom-6 md:left-6">
        <div className="flex items-center space-x-2 md:space-x-4 bg-card/90 backdrop-blur-md rounded-lg border border-gray-700/50 p-2 md:p-4 shadow-lg navbar-transition">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onLevelChange(Math.max(1, currentLevel - 1))}
            disabled={currentLevel === 1}
            className="pixel-button text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
          >
            <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 mr-1" />
            <span className="hidden sm:inline">PREV</span>
          </Button>

          <div className="font-pixel text-center min-w-[80px] md:min-w-[120px]">
            <div className="text-cyan-400 text-sm md:text-base">LEVEL {currentLevel}</div>
=======
             {/* Navigation Controls */}
       <div className="fixed z-20 bottom-4 left-4 md:bottom-6 md:left-6">
         <div className="flex items-center space-x-2 md:space-x-4 bg-card/90 backdrop-blur-md rounded-lg border border-cyber-cyan/30 p-2 md:p-4 shadow-lg navbar-transition">
           <Button
             variant="outline"
             size="sm"
             onClick={() => onLevelChange(Math.max(1, currentLevel - 1))}
             disabled={currentLevel === 1}
             className="pixel-button text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
           >
             <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 mr-1" />
             <span className="hidden sm:inline">PREV</span>
           </Button>

                     <div className="font-pixel text-center min-w-[80px] md:min-w-[120px]">
            <div className="text-cyber-cyan text-sm md:text-base">LEVEL {currentLevel}</div>
>>>>>>> 57b65ccd818d29f4507f5211a6792dba6de49209
            <div className="text-muted-foreground text-xs mt-1">
              {currentLevelData?.name}
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => onLevelChange(Math.min(totalLevels, currentLevel + 1))}
            disabled={currentLevel === totalLevels}
            className="pixel-button text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
          >
            <span className="hidden sm:inline">NEXT</span>
            <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
          </Button>
        </div>
      </div>

<<<<<<< HEAD
      {/* Floating UFO (Next Level Indicator) */}
      {currentLevel < totalLevels && (
        <button
          onClick={() => onLevelChange(currentLevel + 1)}
          className="fixed top-1/2 right-8 z-20 transform -translate-y-1/2 animate-float"
          title="Click the UFO to enter next level"
        >
          <div className="w-12 h-8 bg-gradient-to-b from-cyber-cyan to-secondary rounded-full relative">
=======
             {/* Floating UFO (Next Level Indicator) */}
       {currentLevel < totalLevels && (
         <button
           onClick={() => onLevelChange(currentLevel + 1)}
           className="fixed top-1/2 right-8 z-20 transform -translate-y-1/2 animate-float"
           title="Click the UFO to enter next level"
         >
                     <div className="w-12 h-8 bg-gradient-to-b from-cyber-cyan to-secondary rounded-full relative">
>>>>>>> 57b65ccd818d29f4507f5211a6792dba6de49209
            <div className="absolute inset-0 bg-cyber-cyan/20 rounded-full animate-pulse" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
            </div>
          </div>
<<<<<<< HEAD
        </button>
      )}
=======
         </button>
       )}
>>>>>>> 57b65ccd818d29f4507f5211a6792dba6de49209
    </div>
  );
};

export default GameLayout;