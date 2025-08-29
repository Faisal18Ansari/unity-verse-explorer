import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Briefcase, Users, Trophy, Calendar, MapPin, Zap } from "lucide-react";

const ExperienceLevel = () => {
  const experiences = [
    {
      id: 1,
      title: "Game Tester (Freelance)",
      company: "LionBridge Games Company",
      period: "01/2024 - 01/2025",
      location: "Remote",
      type: "Freelance",
      status: "current",
      description: "Working as a freelance game tester, responsible for comprehensive quality assurance of mobile and PC games.",
      responsibilities: [
        "Level flow evaluation and gameplay testing",
        "Audio-visual assessment and bug documentation", 
        "Performance testing across multiple devices",
        "User experience feedback and improvement suggestions"
      ],
      skills: ["Game Testing", "Bug Documentation", "QA Testing", "User Experience"],
      bossBattle: "Boss Battle 1",
      xpGained: 850,
      color: "secondary"
    },
    {
      id: 2,
      title: "Core Management Team Coordinator",
      company: "Google Developer Group IINTM",
      period: "09/2023 - 01/2025",
      location: "Delhi, India",
      type: "Leadership",
      status: "current",
      description: "Leading technical events and managing developer community initiatives as part of the core management team.",
      responsibilities: [
        "Led Tech Tycoons event with 200+ participants",
        "Hosted Devlution with 7 industry speakers",
        "Managed event logistics and team coordination",
        "Facilitated knowledge sharing sessions"
      ],
      skills: ["Event Management", "Leadership", "Public Speaking", "Team Coordination"],
      bossBattle: "Boss Battle 2",
      xpGained: 1200,
      color: "accent"
    }
  ];

  const achievements = [
    { name: "Event Leadership", description: "Successfully led major tech events", icon: "👑" },
    { name: "Quality Assurance", description: "Expert in game testing methodologies", icon: "🎯" },
    { name: "Team Management", description: "Coordinated multiple project teams", icon: "👥" },
    { name: "Public Speaking", description: "Hosted events with industry experts", icon: "🎤" }
  ];

  const totalXP = experiences.reduce((total, exp) => total + exp.xpGained, 0);

  return (
    <div className="container mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 animate-slideInUp">
        <h1 className="font-pixel text-3xl md:text-5xl text-secondary">
          WORK EXPERIENCE
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
        <p className="text-muted-foreground font-mono text-base">
          EXPLORE MY WORK JOURNEY
        </p>
      </div>

      {/* Experience Cards */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card 
            key={exp.id}
            className="level-card animate-slideInUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Experience Info */}
              <div className="lg:col-span-3 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className={`font-pixel text-xl text-${exp.color} mb-1`}>
                        {exp.bossBattle}
                      </h2>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <Badge 
                      variant={exp.status === 'current' ? 'default' : 'secondary'}
                      className="ml-4"
                    >
                      {exp.status === 'current' ? 'CURRENT' : 'COMPLETED'}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.type}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Responsibilities:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <span className="text-accent mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* XP Stats */}
              <div className="space-y-4">
                <div className="text-center p-4 bg-muted/20 rounded-lg border border-border">
                  <div className="space-y-2">
                    <Zap className={`w-8 h-8 mx-auto text-${exp.color}`} />
                    <div className="font-pixel text-lg text-accent">{exp.xpGained} XP</div>
                    <div className="text-xs text-muted-foreground">EXPERIENCE GAINED</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-semibold text-foreground">Boss Battle Progress</div>
                  <Progress value={100} className="h-2" />
                  <div className="text-xs text-muted-foreground text-center">COMPLETED</div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Achievements Section */}
      <Card className="level-card animate-slideInUp" style={{ animationDelay: '0.3s' }}>
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-3">
            <Trophy className="w-6 h-6 text-accent" />
            <h2 className="font-pixel text-xl text-accent">ACHIEVEMENTS UNLOCKED</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.name}
                className="text-center p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-colors duration-300 group"
              >
                <div className="text-3xl mb-2 group-hover:animate-float">{achievement.icon}</div>
                <h3 className="font-semibold text-foreground mb-1">{achievement.name}</h3>
                <p className="text-xs text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-border">
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <div className="font-pixel text-2xl text-secondary">{totalXP}</div>
                <div className="text-xs text-muted-foreground">TOTAL XP EARNED</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="font-pixel text-2xl text-accent">{experiences.length}</div>
                <div className="text-xs text-muted-foreground">BOSS BATTLES WON</div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Level Complete Indicator */}
      <div className="text-center animate-slideInUp" style={{ animationDelay: '0.5s' }}>
        <div className="inline-block px-6 py-2 bg-electric-blue/20 border border-electric-blue rounded-lg">
          <p className="font-pixel text-xs text-electric-blue">LEVEL 4 CLEARED</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceLevel;