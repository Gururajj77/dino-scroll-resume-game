
import React from 'react';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  links: {
    demo?: string;
    github?: string;
  };
}

const ProjectCard: React.FC<Project> = ({ name, description, technologies, imageUrl, links }) => {
  return (
    <div className="bg-white p-6 border border-black shadow-md hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-muted mb-4 overflow-hidden flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="text-2xl">📁</div>
        )}
      </div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-1 mb-4">
        {technologies.map((tech) => (
          <span key={tech} className="text-xs px-2 py-1 bg-muted rounded-sm">{tech}</span>
        ))}
      </div>
      <div className="flex gap-2">
        {links.demo && (
          <a 
            href={links.demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm px-3 py-1 bg-black text-white flex-1 text-center"
          >
            Demo
          </a>
        )}
        {links.github && (
          <a 
            href={links.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm px-3 py-1 border border-black flex-1 text-center"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      name: "E-Commerce Platform",
      description: "A full-featured online shopping platform with cart, payment processing, and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      name: "Weather Dashboard",
      description: "Real-time weather forecasting application with location detection and visualizations.",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      name: "Task Management System",
      description: "Collaborative project management tool with drag-and-drop interface and role-based permissions.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="projects" className="flex-shrink-0 w-screen h-full flex flex-col items-center justify-center px-10 snap-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
