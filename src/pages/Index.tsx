
import React from 'react';
import Portfolio from '../components/Portfolio';
import "@fontsource/jetbrains-mono";
import { ThemeProvider } from "next-themes";

const Index: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <main className="min-h-screen bg-white dark:bg-black font-jetbrains-mono">
        <Portfolio />
      </main>
    </ThemeProvider>
  );
};

export default Index;
