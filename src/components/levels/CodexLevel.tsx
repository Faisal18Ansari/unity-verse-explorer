
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Rss, Gamepad2, Bot, BookOpen } from "lucide-react";

const CodexLevel = () => {
  const blogs = [
    {
      title: "Hey there, I'm Faisal!",
      description: "From breaking down game mechanics 🎮 to exploring stories that stay with us long after we put the controller down.",
      bullets: [
        "Game design breakdowns that actually make sense",
        "Insights from my Unity projects",
        "Honest opinions on games that deserve more (or less) attention"
      ],
      link: "https://developers-codex.hashnode.dev/hey-there-im-faisal",
      linkText: "Check it out",
      icon: <BookOpen className="w-4 h-4 mr-2" />,
      image: "/personal_blog.png"
    },
    {
      title: "The Developers Who Almost Killed Need for Speed",
      description: "Covers:",
      bullets: [
        "How EA’s decisions almost killed the franchise",
        "Why Ghost Games struggled to find NFS’s true identity",
        "How Criterion revived it with Heat and Unbound"
      ],
      link: "https://developers-codex.hashnode.dev/the-developers-who-almost-killed-need-for-speed",
      linkText: "Read more here",
      icon: <Gamepad2 className="w-4 h-4 mr-2" />,
      image: "/nfs.png"
    },
    {
      title: "CRY OF FEAR: What Real Depression Looks Like.",
      description: "A unique horror experience exploring depression, trauma, and isolation. Includes:",
      bullets: [
        "How level design mirrors mental health struggles",
        "Why clunky mechanics make it scarier",
        "Symbolism in enemies and sound design"
      ],
      link: "https://developers-codex.hashnode.dev/cry-of-fear-what-real-depression-looks-like",
      linkText: "Read the full blog",
      icon: <Bot className="w-4 h-4 mr-2" />,
      image: "/cryoffear.png"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 animate-slideInUp">
        <img src="/publication_logo.png" alt="Developer's Codex Logo" className="w-48 h-auto mx-auto mb-4" />
        <h1 className="font-pixel text-3xl md:text-5xl text-secondary">
          DEVELOPER'S CODEX
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
        <p className="text-muted-foreground font-mono text-base">
          A GAME DEVELOPER'S JOURNAL
        </p>
      </div>

      {/* Introduction */}
      <Card className="level-card animate-slideInUp p-6 text-center">
        <h2 className="font-pixel text-xl text-accent mb-4">Why I’m Here</h2>
        <p className="text-muted-foreground mb-6">
          As a game developer, I don’t just play games—I dissect them. My goal is to uncover what games truly communicate, from the psychology of horror to the hidden brilliance in mechanics.
        </p>
        <h2 className="font-pixel text-xl text-accent mb-4">What You’ll Find</h2>
        <div className="grid md:grid-cols-3 gap-4 text-left">
          <a href="https://developers-codex.hashnode.dev/game-dissection-lab" target="_blank" rel="noopener noreferrer" className="p-4 bg-accent/10 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors">
            <h3 className="font-semibold text-foreground">🎮 Game Dissection Lab</h3>
            <p className="text-sm text-muted-foreground">Reviews that break down not just if a game is fun, but why it works.</p>
          </a>
          <a href="https://developers-codex.hashnode.dev/hidden-realms-gaming-secrets" target="_blank" rel="noopener noreferrer" className="p-4 bg-accent/10 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors">
            <h3 className="font-semibold text-foreground">🕵️ Hidden Realms</h3>
            <p className="text-sm text-muted-foreground">Untold stories, forgotten histories, and behind-the-scenes moments in gaming.</p>
          </a>
          <a href="https://developers-codex.hashnode.dev/game-engine-mechanics-explained" target="_blank" rel="noopener noreferrer" className="p-4 bg-accent/10 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors">
            <h3 className="font-semibold text-foreground">⚙️ The Game Engine</h3>
            <p className="text-sm text-muted-foreground">Clear, developer-driven insights into how mechanics and systems are built.</p>
          </a>
        </div>
        <p className="text-muted-foreground mt-6">👉 Explore each category for a deeper dive.</p>
      </Card>

      {/* Blog Entries Grid */}
      <div className="space-y-8">
        {blogs.map((blog, index) => (
          <Card 
            key={blog.title}
            className="level-card animate-slideInUp project-card-tilt"
            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
          >
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 p-6 space-y-4">
                <h2 className="font-pixel text-xl text-secondary">{blog.title}</h2>
                <p className="text-muted-foreground text-sm">{blog.description}</p>
                <ul className="space-y-2">
                  {blog.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent mr-2">✨</span>
                      <span className="text-muted-foreground text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="pixel-button">
                  <a href={blog.link} target="_blank" rel="noopener noreferrer">
                    {blog.icon}
                    {blog.linkText}
                  </a>
                </Button>
              </div>
              <div className="p-6 flex items-center justify-center">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-auto max-h-48 object-contain rounded-lg"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {/* Level Complete Indicator */}
      <div className="text-center animate-slideInUp" style={{ animationDelay: '0.6s' }}>
        <div className="inline-block px-8 py-3 bg-neon-pink/20 border-2 border-neon-pink rounded-lg">
          <p className="font-pixel text-sm md:text-base text-neon-pink">LEVEL 4 CLEARED</p>
        </div>
      </div>
    </div>
  );
};

export default CodexLevel;
