
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="flex-shrink-0 w-screen h-full flex flex-col items-center justify-center px-10 snap-center">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold mb-6">Frontend Developer</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-40 h-40 bg-black rounded-full flex-shrink-0">
            {/* Profile photo placeholder */}
            <div className="w-full h-full rounded-full border-2 border-black overflow-hidden">
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-lg mb-4">
              Passionate frontend developer with a focus on creating interactive, accessible, and innovative web experiences.
              I combine technical expertise with creative problem-solving to build engaging user interfaces.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-black text-white rounded-full text-sm">Creative</span>
              <span className="px-3 py-1 bg-black text-white rounded-full text-sm">Problem Solver</span>
              <span className="px-3 py-1 bg-black text-white rounded-full text-sm">Detail-Oriented</span>
              <span className="px-3 py-1 bg-black text-white rounded-full text-sm">Team Player</span>
            </div>
          </div>
        </div>
        <p className="mt-6 text-muted-foreground italic">
          Scroll right to discover more or press Space to jump →
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
