
import React from 'react';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string[];
}

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

const ExperienceSection: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Frontend Developer",
      period: "2022 - Present",
      description: [
        "Led development of company's flagship web application using React and TypeScript",
        "Implemented CI/CD pipelines reducing deployment time by 40%",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      company: "Digital Solutions Co.",
      position: "Frontend Developer",
      period: "2019 - 2022",
      description: [
        "Developed responsive UI components for multiple client projects",
        "Optimized application performance improving load time by 60%",
        "Collaborated with design team to implement pixel-perfect interfaces"
      ]
    },
    {
      company: "StartupXYZ",
      position: "Web Developer Intern",
      period: "2018 - 2019",
      description: [
        "Assisted in developing company website and internal tools",
        "Created interactive data visualization dashboards",
        "Participated in agile development process"
      ]
    }
  ];

  const education: EducationItem[] = [
    {
      institution: "Tech University",
      degree: "B.S. Computer Science",
      period: "2015 - 2019",
      details: "Focus on Web Technologies and Human-Computer Interaction"
    },
    {
      institution: "Online Learning",
      degree: "Various Certifications",
      period: "2019 - Present",
      details: "Advanced React, AWS Solutions Architect, UX Design Fundamentals"
    }
  ];

  return (
    <section id="experience" className="flex-shrink-0 w-screen h-full flex flex-col items-center justify-center px-10 snap-center">
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl font-bold mb-8">Experience</h2>
        
        <div className="mb-10">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <h4 className="text-lg">{exp.company}</h4>
                </div>
                <span className="text-muted-foreground mt-1 md:mt-0">{exp.period}</span>
              </div>
              <ul className="list-disc pl-5">
                {exp.description.map((item, i) => (
                  <li key={i} className="mb-1">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-5">Education</h2>
        <div>
          {education.map((edu, index) => (
            <div key={index} className="mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <h4 className="text-lg">{edu.institution}</h4>
                </div>
                <span className="text-muted-foreground mt-1 md:mt-0">{edu.period}</span>
              </div>
              {edu.details && <p className="text-muted-foreground">{edu.details}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
