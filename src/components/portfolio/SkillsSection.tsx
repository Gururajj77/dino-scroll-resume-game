
import React from 'react';

interface SkillBarProps {
  name: string;
  level: number; // 0-100
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full bg-muted h-2">
        <div 
          className="bg-black h-2" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const techSkills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "CSS/SASS", level: 95 },
    { name: "Next.js", level: 80 },
    { name: "Node.js", level: 75 }
  ];
  
  const softSkills = [
    { name: "Communication", level: 90 },
    { name: "Problem Solving", level: 95 },
    { name: "Team Collaboration", level: 85 },
    { name: "Adaptability", level: 90 }
  ];

  return (
    <section id="skills" className="flex-shrink-0 w-screen h-full flex flex-col items-center justify-center px-10 snap-center">
      <div className="max-w-2xl w-full">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
            {techSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
            {softSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
            
            <h3 className="text-xl font-bold mt-6 mb-4">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 border border-black rounded-md">Git</span>
              <span className="px-3 py-1 border border-black rounded-md">VS Code</span>
              <span className="px-3 py-1 border border-black rounded-md">Figma</span>
              <span className="px-3 py-1 border border-black rounded-md">AWS</span>
              <span className="px-3 py-1 border border-black rounded-md">Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
