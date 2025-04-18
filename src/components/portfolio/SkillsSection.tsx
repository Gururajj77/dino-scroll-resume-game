import React from "react";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 border border-black rounded-md text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Development",
      skills: [
        "React.js & Angular",
        "TypeScript & JavaScript",
        "HTML5 & Tailwind CSS",
        "SCSS & CSS3",
        "GraphQL",
        "Nx & Lerna (Monorepo Tools)",
      ],
    },
    {
      title: "Testing & Tools",
      skills: [
        "Jest",
        "React Testing Library",
        "Playwright (Visual Regression)",
        "Accessibility Testing",
        "Storybook",
        "Git Version Control",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="flex-shrink-0 w-screen h-full flex flex-col items-center justify-center px-10 snap-center"
    >
      <div className="max-w-2xl w-full">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
