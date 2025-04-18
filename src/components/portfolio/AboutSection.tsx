import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex-shrink-0 w-screen h-full flex flex-col items-center my-64 lg:my-16 justify-center px-6 py-16 snap-center"
    >
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4">Gururaj</h1>
          <h2 className="text-xl mb-2">
            Frontend Developer at IBM Carbon Design System
          </h2>
        </div>

        <div className="space-y-6 font-mono">
          <p className="text-base sm:text-lg leading-relaxed">
            Here's a fun story - I started out as a Mechanical Engineer in 2021.
            While everyone was figuring out their next move, I stumbled upon
            FreeCodeCamp and dove into HTML, CSS, and JavaScript. Something just
            clicked. Those early programming classes from school (Java in 10th
            and C++ in 12th) suddenly started making a lot more sense.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            Joined a bootcamp at JSPiders for full-stack development, and three
            months later, believe it or not, landed my first tech job at Wipro
            through... Instagram! That's where I first met React, building my
            first landing page with YouTube tutorials as my guide. Then came the
            real challenge - a Wells Fargo project migrating internal WebForms
            applications to modern Angular and React frontends.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            They even threw me into leading an application rewrite (spoiler
            alert: it was a beautiful disaster). But hey, nothing teaches you
            more than a good old-fashioned failure, right? Learned tons about
            frontend architecture, time management, and what real efficiency
            looks like in the process.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            Now I'm at IBM, working on their flagship Carbon Design System. From
            watching tutorial videos to maintaining a design system used by
            thousands of developers - it's been quite a ride. And the best part?
            I'm just getting started.
          </p>
        </div>

        <p className="mt-6 text-center text-muted-foreground italic text-sm sm:text-base">
          Scroll right to discover more or press Space to jump →
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
