
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
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
  const [dinoPosition, setDinoPosition] = useState(0);
  const { setTheme, theme } = useTheme();

  // Update scroll position based on dino position
  useEffect(() => {
    if (containerRef.current && !gameOver) {
      const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
      const targetScroll = (dinoPosition / 100) * maxScroll;
      
      containerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  }, [dinoPosition, gameOver]);

  // Update scroll progress and current section on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollLeft = containerRef.current.scrollLeft;
        const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
        const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
        
        setScrollProgress(progress);
        
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
      
      handleScroll();
      
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, [totalSections]);
  
  const handleCollision = () => {
    setGameOver(true);
    
    setTimeout(() => {
      setGameOver(false);
    }, 1500);
    
    if (containerRef.current && currentSection > 0) {
      const sectionWidth = containerRef.current.scrollWidth / totalSections;
      const targetScroll = (currentSection - 1) * sectionWidth;
      
      containerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      
      // Also update dino position to match
      setDinoPosition(((currentSection - 1) / totalSections) * 100);
    }
  };
  
  const navigateToSection = (sectionIndex: number) => {
    if (containerRef.current) {
      const sectionWidth = containerRef.current.scrollWidth / totalSections;
      const targetScroll = sectionIndex * sectionWidth;
      
      containerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      
      // Update dino position to match section
      setDinoPosition((sectionIndex / totalSections) * 100);
    }
  };

  const handleJump = useCallback(() => {
    if (!isJumping) {
      setIsJumping(true);
      setTimeout(() => {
        setIsJumping(false);
      }, 500);
    }
  }, [isJumping]);
  
  const resetGame = () => {
    setGameOver(false);
  };
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <span className="text-sm">🌞</span>
        <Switch 
          checked={theme === "dark"}
          onCheckedChange={toggleTheme}
        />
        <span className="text-sm">🌚</span>
      </div>
      
      {showInstructions && (
        <InstructionOverlay onClose={() => setShowInstructions(false)} />
      )}
      
      {gameOver && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 pointer-events-none">
          <h2 className="text-white text-5xl font-bold">Game Over!</h2>
        </div>
      )}
      
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
      
      <GameWorld 
        scrollProgress={scrollProgress}
        currentSection={currentSection}
        totalSections={totalSections}
        onCollision={handleCollision}
        isJumping={isJumping}
        onJump={handleJump}
      />
      
      <SectionIndicator
        totalSections={totalSections}
        currentSection={currentSection}
        onSectionClick={navigateToSection}
      />
      
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
