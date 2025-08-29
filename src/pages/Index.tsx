import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import StartScreen from "@/components/StartScreen";
import GameLayout from "@/components/GameLayout";
import AboutLevel from "@/components/levels/AboutLevel";
import SkillsLevel from "@/components/levels/SkillsLevel";
import ProjectsLevel from "@/components/levels/ProjectsLevel";
import ExperienceLevel from "@/components/levels/ExperienceLevel";
import EducationLevel from "@/components/levels/EducationLevel";
import cyberpunkCity from "@/assets/cyberpunk-city.jpg";
import astronautCharacter from "@/assets/astronaut-character.png";

const Index = () => {
  const [gameState, setGameState] = useState<'loading' | 'start' | 'playing'>('start');
  const [currentLevel, setCurrentLevel] = useState(1);

  // Preload images
  useEffect(() => {
    const preloadImages = [cyberpunkCity, astronautCharacter];
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleStart = () => {
    setGameState('loading');
  };

  const handleLoadingComplete = () => {
    setGameState('playing');
    setCurrentLevel(1); // Level 1 is now the default landing level
  };

  const handleLevelChange = (level: number) => {
    setCurrentLevel(level);
  };

  const renderLevel = () => {
    switch(currentLevel) {
      case 1:
        return <AboutLevel />;
      case 2:
        return <SkillsLevel />;
      case 3:
        return <ProjectsLevel />;
      case 4:
        return <ExperienceLevel />;
      case 5:
        return <EducationLevel />;
      default:
        return <AboutLevel />; // Fallback to level 1
    }
  };

  if (gameState === 'loading') {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  if (gameState === 'start') {
    return (
      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ 
          backgroundImage: `linear-gradient(rgba(10, 10, 15, 0.8), rgba(26, 26, 46, 0.8)), url(${cyberpunkCity})` 
        }}
      >
        <StartScreen onStart={handleStart} />
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ 
        backgroundImage: `linear-gradient(rgba(10, 10, 15, 0.9), rgba(26, 26, 46, 0.9)), url(${cyberpunkCity})` 
      }}
    >
      <GameLayout 
        currentLevel={currentLevel} 
        onLevelChange={handleLevelChange}
        totalLevels={5}
      >
        {renderLevel()}
      </GameLayout>
    </div>
  );
};

export default Index;
