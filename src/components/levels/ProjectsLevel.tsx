import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Trophy, Code, Users, Clock, Globe } from "lucide-react";

const ProjectsLevel = () => {
  const projects = [
    {
      title: "CURAHUNT",
      subtitle: "Full-stack Hackathon Winner",
      description: "Curahunt was a full stack project developed by the author and their team during a hackethone event hosted by their college's Internship Cell. The project secured second place, and the author played a key role as the leader and SPOC, maintaining the database and learning Mongo DB. This experience not only improved their skills but also improved their teamwork and communication abilities.",
      achievement: "2nd Place at Interware Hackathon",
      role: "Team Lead & Database Manager",
      technologies: ["MongoDB", "Full-stack", "Database Design", "Team Leadership"],
      image: "/curahunt.png",
      links: {
        github: "https://github.com/Faisal18Ansari/IW_CURAHUNT",
        website: "https://futureforward5.vercel.app/"
      },
      status: "completed",
      color: "secondary"
    },
    {
      title: "LIGHT THE LANTERNS",
      subtitle: "Unity Exploration Game",
      description: "Light The Lanterns is a peaceful exploration game I built while learning Unity, where you explore the environment, interact, and light lanterns across the landscape. This project helped me practice core game development workflows, from player movement to animation, camera setup, and environment design. It taught me how to bring small ideas to life and sparked my confidence in building and publishing games on my own.",
      achievement: "Completed Unity Game",
      role: "Solo Developer",
      technologies: ["Unity", "C#", "Game Mechanics", "Level Design"],
      image: "/light.png",
      links: {
        github: "https://github.com/Faisal18Ansari/Light-The-Lanterns",
        demo: "https://faisal-mujahid.itch.io/light-the-lanterns"
      },
      status: "completed",
      color: "accent"
    },
    {
      title: "STARLIGHT DASH",
      subtitle: "Fast-paced Platformer",
      description: "Step into the neon-lit world of StarLight Dash, a fast-paced platforming experience where you must collect coins, avoid deadly traps, and outmaneuver zombie enemies through beautifully designed levels. Whether it's swinging pendulums, spinning saws, or AI-driven chasers, every step forward is earned through skill and focus.",
      achievement: "3 day Development Challenge",
      role: "Game Developer",
      technologies: ["Unity", "C#", "AI Pathfinding", "Game Physics"],
      image: "/starlight-cover.png",
      links: {
        github: "https://github.com/Faisal18Ansari/StarLight-Dash",
        demo: "https://faisal-mujahid.itch.io/starlight-dash"
      },
      status: "completed",
      color: "electric-blue"
    }
  ];

  const upcomingBlog = {
    title: "GAME MECHANICS CHRONICLES",
    subtitle: "Developer's Codex - Coming Soon",
    description: "A dedicated space for upcoming blog about game mechanics analysis, reviews, and industry insights. Planning to cover topics like AI pathfinding, level design psychology, and modern game development trends.",
    topics: [
      "Exploring AI Pathfinding in Modern Games",
      "The Psychology Behind Level Design", 
      "Unity Performance Optimization Tips",
      "Game Testing Best Practices"
    ],
    status: "coming_soon"
  };

  return (
    <div className="container mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 animate-slideInUp">
        <h1 className="font-pixel text-3xl md:text-5xl text-secondary">
          PROJECT SHOWCASE
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
        <p className="text-muted-foreground font-mono text-base">
          EXPLORE MY PROJECTS
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-8">
        {projects.map((project, index) => (
          <Card 
            key={project.title}
            className="level-card animate-slideInUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Project Info */}
              <div className="lg:col-span-2 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <h2 className={`font-pixel text-xl text-${project.color}`}>
                      {project.title}
                    </h2>
                    <Badge variant="outline" className="text-xs">
                      {project.status === 'completed' ? 'COMPLETED' : 'IN PROGRESS'}
                    </Badge>
                  </div>
                  <p className={`text-sm text-${project.color} font-mono`}>
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">
                      {project.achievement}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {project.role}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Project Actions */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-muted to-muted/50 rounded-lg border border-border overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto max-h-48 object-contain"
                  />
                </div>

                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full pixel-button"
                    asChild
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      VIEW CODE
                    </a>
                  </Button>
                  
                  {project.links.website && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full pixel-button"
                      asChild
                    >
                      <a href={project.links.website} target="_blank" rel="noopener noreferrer">
                        <Globe className="w-4 h-4 mr-2" />
                        VISIT WEBSITE
                      </a>
                    </Button>
                  )}
                  
                  {project.links.demo && (
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="w-full pixel-button"
                      asChild
                    >
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        PLAY GAME
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Upcoming Blog Section */}
      <Card className="level-card animate-slideInUp border-accent/20" style={{ animationDelay: '0.4s' }}>
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h2 className="font-pixel text-2xl text-accent">
              {upcomingBlog.title}
            </h2>
            <p className="text-sm text-accent/80 font-mono">
              {upcomingBlog.subtitle}
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {upcomingBlog.description}
          </p>

          <div className="grid md:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {upcomingBlog.topics.map((topic, index) => (
              <div 
                key={topic}
                className="p-3 bg-accent/10 rounded-lg border border-accent/20 text-sm text-foreground"
              >
                {topic}
              </div>
            ))}
          </div>

          <Button variant="outline" className="pixel-button" disabled>
            <Clock className="w-4 h-4 mr-2" />
            COMING SOON
          </Button>
        </div>
      </Card>

      {/* Level Complete Indicator */}
      <div className="text-center animate-slideInUp" style={{ animationDelay: '0.6s' }}>
        <div className="inline-block px-8 py-3 bg-neon-pink/20 border-2 border-neon-pink rounded-lg">
          <p className="font-pixel text-sm md:text-base text-neon-pink">LEVEL 3 CLEARED</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsLevel;