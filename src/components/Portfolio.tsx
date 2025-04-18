
import React, { useRef, useState, useEffect, useCallback } from 'react';
import AboutSection from './portfolio/AboutSection';
import SkillsSection from './portfolio/SkillsSection';
import ProjectsSection from './portfolio/ProjectsSection';
import ExperienceSection from './portfolio/ExperienceSection';
import ContactSection from './portfolio/ContactSection';
import GameWorld from './game/GameWorld';
import InstructionOverlay from './InstructionOverlay';
import SectionIndicator from './SectionIndicator';
import GameControls from './game/GameControls';

const Portfolio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 5; // About, Skills, Projects, Experience, Contact
  const [gameOver, setGameOver] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [isJumping, setIsJumping] = useState(false);
  
  // Handle scroll events to update progress
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollLeft = containerRef.current.scrollLeft;
        const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
        const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
        
        setScrollProgress(progress);
        
        // Determine current section based on scroll position
        const sectionIndex = Math.min(
          Math.floor(progress * totalSections),
          totalSections - 1
        );
        setCurrentSection(sectionIndex);
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      
      // Initial calculation
      handleScroll();
      
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  
  // Handle collision in game
  const handleCollision = () => {
    setGameOver(true);
    
    // Reset game after a delay
    setTimeout(() => {
      setGameOver(false);
    }, 1500);
    
    // Could also scroll back to previous section
    if (containerRef.current && currentSection > 0) {
      const sectionWidth = containerRef.current.scrollWidth / totalSections;
      const targetScroll = (currentSection - 1) * sectionWidth;
      
      containerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };
  
  // Navigate to a specific section
  const navigateToSection = (sectionIndex: number) => {
    if (containerRef.current) {
      const sectionWidth = containerRef.current.scrollWidth / totalSections;
      const targetScroll = sectionIndex * sectionWidth;
      
      containerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  // Handle jumping
  const handleJump = useCallback(() => {
    if (!isJumping) {
      setIsJumping(true);
      setTimeout(() => {
        setIsJumping(false);
      }, 500); // Match this with the animation duration in tailwind config
    }
  }, [isJumping]);
  
  // Reset game state
  const resetGame = () => {
    setGameOver(false);
  };
  
  return (
    <div className="h-screen w-full flex flex-col">
      {/* Instructions overlay */}
      {showInstructions && (
        <InstructionOverlay onClose={() => setShowInstructions(false)} />
      )}
      
      {/* Game over overlay */}
      {gameOver && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 pointer-events-none">
          <h2 className="text-white text-5xl font-bold">Game Over!</h2>
        </div>
      )}
      
      {/* Horizontal scrolling container */}
      <div 
        ref={containerRef}
        className="flex-1 overflow-x-auto flex snap-x snap-mandatory scroll-smooth hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
      
      {/* Game component */}
      <GameWorld 
        scrollProgress={scrollProgress}
        currentSection={currentSection}
        totalSections={totalSections}
        onCollision={handleCollision}
        isJumping={isJumping}
        onJump={handleJump}
      />
      
      {/* Section indicators */}
      <SectionIndicator
        totalSections={totalSections}
        currentSection={currentSection}
        onSectionClick={navigateToSection}
      />
      
      {/* Navigation help */}
      {/* Game controls */}
      <GameControls
        onReset={resetGame}
        onJump={handleJump}
        isGameOver={gameOver}
      />
      
      <button 
        className="fixed bottom-4 right-4 z-40 p-2 bg-black text-white opacity-50 hover:opacity-100 transition-opacity rounded-full"
        onClick={() => setShowInstructions(true)}
      >
        ?
      </button>
    </div>
  );
};

export default Portfolio;
