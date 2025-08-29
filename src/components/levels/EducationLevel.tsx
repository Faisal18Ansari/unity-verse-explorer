import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from "lucide-react";

const EducationLevel = () => {
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

  const certifications = [
    {
      name: "Unity Certified User: Programmer",
      issuer: "Unity Technologies",
      year: "2024",
      status: "In Progress"
    },
    {
      name: "Game Development Fundamentals",
      issuer: "Online Course Platform",
      year: "2023",
      status: "Completed"
    }
  ];

  const achievements = [
    {
      title: "Dean's List",
      description: "Maintained high academic performance throughout BCA program",
      year: "2022-2024"
    },
    {
      title: "Programming Competition Winner",
      description: "First place in inter-college coding competition",
      year: "2023"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 animate-slideInUp">
        <h1 className="font-pixel text-3xl md:text-5xl text-secondary">
          EDUCATIONAL JOURNEY
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My academic background and continuous learning path in technology and game development
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Formal Education */}
        <div className="space-y-6">
          <Card className="level-card space-y-6 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center space-x-3">
              <GraduationCap className="w-6 h-6 text-secondary" />
              <h2 className="font-pixel text-xl text-secondary">FORMAL EDUCATION</h2>
            </div>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg border border-border/50 transition-all duration-300 hover:border-secondary/50 ${
                    edu.status === 'current' 
                      ? 'bg-secondary/10 border-secondary' 
                      : 'bg-muted/5'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                    <Badge variant={edu.status === 'current' ? 'default' : 'secondary'}>
                      {edu.status === 'current' ? 'Current' : 'Completed'}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {edu.school}
                    </div>
                    {edu.affiliation && (
                      <div className="text-muted-foreground ml-6">
                        Affiliated to: {edu.affiliation}
                      </div>
                    )}
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                    <div className="flex items-center text-secondary font-semibold">
                      <Award className="w-4 h-4 mr-2" />
                      {edu.grade}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Achievements */}
          <Card className="level-card space-y-6 animate-slideInUp" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center space-x-3">
              <Award className="w-6 h-6 text-accent" />
              <h2 className="font-pixel text-xl text-accent">ACHIEVEMENTS</h2>
            </div>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg border border-border/50 bg-muted/5 transition-all duration-300 hover:border-accent/50"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                    <span className="text-sm text-muted-foreground">{achievement.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Certifications & Continuous Learning */}
        <div className="space-y-6">
          <Card className="level-card space-y-6 animate-slideInUp" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center space-x-3">
              <BookOpen className="w-6 h-6 text-accent" />
              <h2 className="font-pixel text-xl text-accent">CERTIFICATIONS</h2>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg border border-border/50 bg-muted/5 transition-all duration-300 hover:border-accent/50"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{cert.name}</h3>
                    <Badge variant={cert.status === 'Completed' ? 'default' : 'outline'}>
                      {cert.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-1 text-sm">
                    <div className="text-muted-foreground">
                      Issued by: {cert.issuer}
                    </div>
                    <div className="text-muted-foreground">
                      Year: {cert.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Learning Philosophy */}
          <Card className="level-card space-y-6 animate-slideInUp" style={{ animationDelay: '0.5s' }}>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-secondary to-accent p-1">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-secondary" />
                </div>
              </div>
              
              <div>
                <h2 className="font-pixel text-xl text-secondary mb-4">LEARNING PHILOSOPHY</h2>
                <blockquote className="text-muted-foreground italic text-center border-l-4 border-secondary pl-4">
                  "Education is not the filling of a pail, but the lighting of a fire. 
                  I believe in continuous learning and staying updated with the latest 
                  technologies in game development and programming."
                </blockquote>
              </div>
            </div>
          </Card>

          {/* Skills Gained Through Education */}
          <Card className="level-card space-y-6 animate-slideInUp" style={{ animationDelay: '0.6s' }}>
            <h3 className="font-pixel text-lg text-secondary">SKILLS GAINED THROUGH EDUCATION</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Data Structures & Algorithms",
                "Object-Oriented Programming", 
                "Database Management",
                "Software Engineering",
                "Web Development",
                "Game Development",
                "Computer Graphics",
                "Project Management",
                "Problem Solving",
                "Critical Thinking"
              ].map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-xs hover:bg-secondary/20 transition-colors duration-200"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EducationLevel;