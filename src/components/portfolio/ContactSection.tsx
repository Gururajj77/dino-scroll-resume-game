import React from "react";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="flex-shrink-0 w-screen h-full flex flex-col items-center justify-center px-10 snap-center"
    >
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>

        <p className="text-lg mb-8">
          I'm currently open to new opportunities and collaborations. Feel free
          to reach out if you'd like to connect!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 max-w-md mx-auto mb-10">
          <a
            href="mailto:jdotgururaj@gmail.com"
            className="flex items-center justify-center gap-2 p-3 bg-black text-white hover:bg-gray-800 transition-colors"
          >
            <Mail size={20} />
            <span>Email Me</span>
          </a>

          {/* <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 p-3 border border-black hover:bg-muted transition-colors"
          >
            <FileText size={20} />
            <span>Resume PDF</span>
          </a> */}
        </div>

        <div className="flex justify-center gap-8">
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:opacity-70 transition-opacity"
          >
            <Linkedin size={30} />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:opacity-70 transition-opacity"
          >
            <Github size={30} />
          </a>
        </div>

        <div className="mt-16">
          <p className="text-sm text-muted-foreground">
            Congratulations! You've reached the end of the portfolio game.
          </p>
          <p className="text-xl mt-2 font-bold">Thank you for visiting!</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
