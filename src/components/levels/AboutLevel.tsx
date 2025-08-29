import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const AboutLevel = () => {
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
                         <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-br from-secondary to-accent p-1">
               <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                 <img src="https://i.postimg.cc/bJm782qm/profile2.jpg" alt="Faisal Mujahid" className="w-full h-full object-cover" />
               </div>
             </div>
                         <div>
               <h2 className="font-pixel text-xl text-accent">IT'S FAISAL!</h2>
               <p className="text-muted-foreground font-mono text-sm">CHARACTER_ID: DEV_001</p>
               <p className="font-pixel text-lg text-secondary mt-2 animate-glow">
                 Creating worlds players want to explore.
               </p>
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

                     <div className="space-y-4">
             <h3 className="font-pixel text-base text-secondary">CHARACTER STATS:</h3>
             <div className="grid grid-cols-2 gap-4">
               <Badge variant="outline" className="justify-center border-secondary text-secondary text-sm py-2 px-4">
                 Game Dev
               </Badge>
               <Badge variant="outline" className="justify-center border-accent text-accent text-sm py-2 px-4">
                 Team Leader
               </Badge>
               <Badge variant="outline" className="justify-center border-electric-blue text-electric-blue text-sm py-2 px-4">
                 Unity Expert
               </Badge>
               <Badge variant="outline" className="justify-center border-neon-pink text-neon-pink text-sm py-2 px-4">
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
              <p>During my BCA journey, I gained a strong computer science foundation and focused on game development. I have hands-on experience with Unity for 2D and 3D scenes, using C# for scripting, enabling effective gameplay prototype creation.</p>
              <p>Eager to connect with developers, designers, and enthusiasts passionate about games and interactive experiences. Excited to contribute to discussions and collaborations in game development. Let's connect to bring game ideas to life and explore creative possibilities together.
            </p>
            </div>
          </Card>

          {/* Personal Interests & Goals */}
          <Card className="level-card">
            <h3 className="font-pixel text-lg text-secondary mb-6">PERSONAL INTERESTS</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Beyond coding, I'm passionate about exploring new gaming technologies, 
                participating in game jams, and staying updated with the latest trends 
                in interactive entertainment.
              </p>
              <p>
                I enjoy analyzing game mechanics, studying player psychology, and 
                experimenting with innovative gameplay concepts that push the boundaries 
                of traditional gaming experiences.
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Level Complete Indicator */}
      <div className="text-center animate-slideInUp" style={{
      animationDelay: '0.6s'
    }}>
        <div className="inline-block px-8 py-3 bg-secondary/20 border-2 border-secondary rounded-lg">
          <p className="font-pixel text-sm md:text-base text-secondary">LEVEL 1 CLEARED</p>
        </div>
      </div>
    </div>;
};
export default AboutLevel;