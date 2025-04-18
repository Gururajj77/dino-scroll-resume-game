
import React from 'react';

interface SectionIndicatorProps {
  totalSections: number;
  currentSection: number;
  onSectionClick: (index: number) => void;
}

const SectionIndicator: React.FC<SectionIndicatorProps> = ({
  totalSections,
  currentSection,
  onSectionClick,
}) => {
  const sections = [
    'About',
    'Skills',
    'Projects',
    'Experience',
    'Contact'
  ];

  return (
    <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
      {sections.map((section, index) => (
        <button
          key={section}
          className={`w-3 h-3 rounded-full transition-all ${
            index === currentSection 
              ? 'bg-black scale-125' 
              : 'bg-gray-300 hover:bg-gray-400'
          }`}
          onClick={() => onSectionClick(index)}
          title={section}
        />
      ))}
    </div>
  );
};

export default SectionIndicator;
