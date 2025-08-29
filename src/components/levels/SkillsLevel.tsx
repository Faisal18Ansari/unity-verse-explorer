import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Gamepad2, Database, Wrench, Users, Trophy } from "lucide-react";

const SkillsLevel = () => {
  const skillCategories = [
    {
      title: "GAME DEVELOPMENT",
      icon: Gamepad2,
      color: "text-secondary",
      skills: [
        { name: "Unity 3D/2D", level: 80, icon: "🎮" },
        { name: "C#", level: 75, icon: "💻" },
        { name: "Gameplay Mechanics", level: 70, icon: "⚙️" },
        { name: "Level Design", level: 65, icon: "🏗️" }
      ]
    },
    {
      title: "PROGRAMMING",
      icon: Code,
      color: "text-accent",
      skills: [
        { name: "C++", level: 60, icon: "🔧" },
        { name: "Python", level: 60, icon: "🐍" },
        { name: "JavaScript", level: 55, icon: "⚡" },
        { name: "Git", level: 85, icon: "📝" }
      ]
    },
    {
      title: "DATABASES & TOOLS",
      icon: Database,
      color: "text-electric-blue",
      skills: [
        { name: "SQL", level: 55, icon: "🗃️" },
        { name: "MongoDB", level: 70, icon: "🍃" },
        { name: "NavMesh", level: 70, icon: "🧭" },
        { name: "Game Testing", level: 80, icon: "🐛" }
      ]
    },
    {
      title: "SOFT SKILLS",
      icon: Users,
      color: "text-neon-pink",
      skills: [
        { name: "Leadership", level: 85, icon: "👑" },
        { name: "Time Management", level: 80, icon: "⏰" },
        { name: "Public Speaking", level: 75, icon: "🎤" },
        { name: "Project Management", level: 80, icon: "📊" }
      ]
    }
  ];

  const interests = [
    { name: "Game Facts", icon: "🎲", description: "Gaming knowledge & trivia" },
    { name: "Horror Movies", icon: "👻", description: "Atmospheric inspiration" },
    { name: "Racing Games", icon: "🏎️", description: "Speed & precision mechanics" },
    { name: "Debugging", icon: "🔍", description: "Problem-solving skills" }
  ];

  return (
    <div className="container mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 animate-slideInUp">
        <h1 className="font-pixel text-3xl md:text-5xl text-secondary">
          CHARACTER SKILLS
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
        <p className="text-muted-foreground font-mono text-base">
          THESE SKILLS ARE CONSTANTLY UPGRADED AT HIGHER LEVELS
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <Card 
            key={category.title} 
            className="level-card animate-slideInUp"
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <category.icon className={`w-6 h-6 ${category.color}`} />
              <h2 className={`font-pixel text-lg ${category.color}`}>
                {category.title}
              </h2>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      LVL {skill.level}
                    </Badge>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-muted"
                  />
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Character Interests */}
      <Card className="level-card animate-slideInUp" style={{ animationDelay: '0.4s' }}>
        <div className="flex items-center space-x-3 mb-6">
          <Trophy className="w-6 h-6 text-accent" />
          <h2 className="font-pixel text-lg text-accent">CHARACTER INTERESTS</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {interests.map((interest, index) => (
            <div 
              key={interest.name}
              className="text-center p-4 rounded-lg border border-border/50 hover:border-secondary/50 transition-colors duration-300 group"
            >
              <div className="text-3xl mb-2 group-hover:animate-float">{interest.icon}</div>
              <h3 className="font-semibold text-foreground mb-1">{interest.name}</h3>
              <p className="text-xs text-muted-foreground">{interest.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
          <p className="text-base text-muted-foreground text-center">
            <span className="font-pixel text-sm text-accent">TIP:</span> These are some activities this character is interested in to stay productive.
          </p>
        </div>
      </Card>

      {/* Level Complete Indicator */}
      <div className="text-center animate-slideInUp" style={{ animationDelay: '0.6s' }}>
        <div className="inline-block px-6 py-2 bg-accent/20 border border-accent rounded-lg">
          <p className="font-pixel text-xs text-accent">LEVEL 2 CLEARED</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsLevel;