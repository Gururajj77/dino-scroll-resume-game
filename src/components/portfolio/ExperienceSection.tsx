import React from "react";

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
      company: "IBM India Pvt. Ltd.",
      position: "Frontend Developer, Carbon Design System",
      period: "February 2024 - Present",
      description: [
        "Implemented Codecov in monorepo achieving 85% coverage for @carbon/react library",
        "Shipped optimized UI components with 3,400+ implementations in 2 months",
        "Led TypeScript migration with 80% downstream adoption and improved type safety",
        "Grew @carbon/react community from 15 to 50+ developers with 3% faster adoption",
        "Provided technical support to 5000+ developers through Slack engagement",
      ],
    },
    {
      company: "WIPRO LIMITED - Wells Fargo",
      position: "Project Engineer, Cloud Migration and Modernization",
      period: "September 2021 - February 2024",
      description: [
        "Modernized 5 enterprise apps from WebForms to Angular 14-16 with reusable component library",
        "Built responsive Angular applications with 100% test coverage using Jasmine/Karma",
        "Optimized CI/CD pipelines and implemented secure API integrations",
      ],
    },
  ];

  const education: EducationItem[] = [
    {
      institution: "Tech University",
      degree: "B.S. Computer Science",
      period: "2015 - 2019",
      details: "Focus on Web Technologies and Human-Computer Interaction",
    },
    {
      institution: "Online Learning",
      degree: "Various Certifications",
      period: "2019 - Present",
      details:
        "Advanced React, AWS Solutions Architect, UX Design Fundamentals",
    },
  ];

  return (
    <section
      id="experience"
      className="flex-shrink-0 w-screen h-full flex flex-col items-center justify-center my-64  lg:my-32 px-10 snap-center"
    >
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
                <span className="text-muted-foreground mt-1 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <ul className="list-disc pl-5">
                {exp.description.map((item, i) => (
                  <li key={i} className="mb-1">
                    {item}
                  </li>
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
                <span className="text-muted-foreground mt-1 md:mt-0">
                  {edu.period}
                </span>
              </div>
              {edu.details && (
                <p className="text-muted-foreground">{edu.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
