import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
const AboutLevel = () => {
  const education = [{
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Institute of Innovation in Technology and Management, Delhi",
    affiliation: "Guru Gobind Singh University",
    period: "2022-2025",
    grade: "CGPA: 9.1",
    status: "current"
  }, {
    degree: "Senior Secondary (12th)",
    school: "Summer Fields School, Gurugram",
    period: "2021-2022",
    grade: "75%",
    status: "completed"
  }, {
    degree: "Secondary (10th)",
    school: "Summer Fields School, Gurugram",
    period: "2019-2020",
    grade: "87%",
    status: "completed"
  }];
  return <div className="container mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 animate-slideInUp">
        <h1 className="font-pixel text-3xl md:text-5xl text-secondary">
          KNOW ABOUT ME
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Character Introduction */}
        <Card className="level-card space-y-6 animate-slideInUp" style={{
        animationDelay: '0.2s'
      }}>
          <div className="text-center space-y-4">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-secondary to-accent p-1">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                <img src="https://i.postimg.cc/bJm782qm/profile2.jpg" alt="Faisal Mujahid" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="font-pixel text-xl text-accent">IT'S FAISAL!</h2>
              <p className="text-muted-foreground font-mono text-sm">CHARACTER_ID: DEV_001</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-secondary" />
              <span className="text-sm">Delhi, India</span>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="text-sm">BCA  Graduate
            </span>
            </div>
            <div className="flex items-center space-x-3">
              <GraduationCap className="w-5 h-5 text-electric-blue" />
              <span className="text-sm">Unity & C# Specialist</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-pixel text-sm text-secondary">CHARACTER STATS:</h3>
            <div className="grid grid-cols-2 gap-3">
              <Badge variant="outline" className="justify-center border-secondary text-secondary">
                Game Dev
              </Badge>
              <Badge variant="outline" className="justify-center border-accent text-accent">
                Team Leader
              </Badge>
              <Badge variant="outline" className="justify-center border-electric-blue text-electric-blue">
                Unity Expert
              </Badge>
              <Badge variant="outline" className="justify-center border-neon-pink text-neon-pink">
                C# Ninja
              </Badge>
            </div>
          </div>
        </Card>

        {/* Bio */}
        <div className="space-y-8 animate-slideInUp" style={{
        animationDelay: '0.4s'
      }}>
          <Card className="level-card">
            <h3 className="font-pixel text-lg text-accent mb-4">PLAYER BACKSTORY</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Faisal Mujahid, and I'm a recent BCA graduate from Guru Gobind Singh Indraprastha University, 
                with a strong focus on game development and programming using Unity and C#.
              </p>
              <p>
                My passion is to explore games and explain their mechanics to others. 
                I have plans to start a gaming blog where I can document my game development 
                journey and share insights about the industry.
              </p>
              <p>
                I am eager to connect with developers, designers, and enthusiasts who share a passion for games and interactive experiences. I believe in learning by building and am excited to contribute to discussions and collaborations within the game development community. If you're ready to bring your game idea to life or want to discuss the craft of game creation, let's connect and explore what we can build together.
              </p>
            </div>
          </Card>

          {/* Education Section */}
          <Card className="level-card">
            <h3 className="font-pixel text-lg text-secondary mb-6">EDUCATIONAL JOURNEY</h3>
            <div className="space-y-4">
              {education.map((edu, index) => <div key={index} className={`p-4 rounded-lg border border-border/50 ${edu.status === 'current' ? 'bg-secondary/10 border-secondary' : 'bg-muted/5'}`}>
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <Badge variant={edu.status === 'current' ? 'default' : 'secondary'} className="text-xs">
                      {edu.grade}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{edu.school}</p>
                  {edu.affiliation && <p className="text-xs text-muted-foreground mb-1">Affiliated with {edu.affiliation}</p>}
                  <p className="text-xs text-accent font-mono">{edu.period}</p>
                </div>)}
            </div>
          </Card>
        </div>
      </div>

      {/* Level Complete Indicator */}
      <div className="text-center animate-slideInUp" style={{
      animationDelay: '0.6s'
    }}>
        <div className="inline-block px-6 py-2 bg-secondary/20 border border-secondary rounded-lg">
          <p className="font-pixel text-xs text-secondary">LEVEL 1 CLEARED</p>
        </div>
      </div>
    </div>;
};
export default AboutLevel;