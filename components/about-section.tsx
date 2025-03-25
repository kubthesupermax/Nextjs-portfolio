"use client";

import { useTheme } from "@/context/theme-context";
import { Code, Server, Globe, BookOpen } from "lucide-react";
import { FadeIn, StaggerContainer } from "./animations";

export default function AboutSection() {
  const { theme } = useTheme();

  return (
    <section id="about" className="py-12 md:py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
            About Me
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Professional Summary */}
          <div
            className={`p-6 rounded-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 ${
              theme === "light"
                ? "bg-white border border-gray-200 shadow-sm"
                : "bg-gray-800 border border-gray-700"
            }`}
          >
            <div
              className={`mb-4 ${
                theme === "light" ? "text-blue-600" : "text-blue-400"
              }`}
            >
              <Code size={28} className="animate-pulse-slow" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Web Developer</h3>
            <p
              className={theme === "light" ? "text-gray-600" : "text-gray-300"}
            >
              Motivated web developer with over 2 years of experience building
              modern full-stack applications. Skilled in creating
              enterprise-level documentation and problem-solving.
            </p>
          </div>

          {/* Expertise */}
          <div
            className={`p-6 rounded-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 ${
              theme === "light"
                ? "bg-white border border-gray-200 shadow-sm"
                : "bg-gray-800 border border-gray-700"
            }`}
          >
            <div
              className={`mb-4 ${
                theme === "light" ? "text-blue-600" : "text-blue-400"
              }`}
            >
              <Server size={28} className="animate-pulse-slow" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expertise</h3>
            <p
              className={theme === "light" ? "text-gray-600" : "text-gray-300"}
            >
              Specializing in React.js, Node.js, and Python development.
              Experienced with modern frameworks, testing frameworks like Jest
              and Cypress and writing clean and efficient code.
            </p>
          </div>

          {/* Background */}
          <div
            className={`p-6 rounded-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 ${
              theme === "light"
                ? "bg-white border border-gray-200 shadow-sm"
                : "bg-gray-800 border border-gray-700"
            }`}
          >
            <div
              className={`mb-4 ${
                theme === "light" ? "text-blue-600" : "text-blue-400"
              }`}
            >
              <BookOpen size={28} className="animate-pulse-slow" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Background</h3>
            <p
              className={theme === "light" ? "text-gray-600" : "text-gray-300"}
            >
              Based in Winnipeg, MB. Education in Aircraft Maintenance
              Engineering from RRC Polytech. Have some maths and physics
              background. Previous experience in technical, email and sales
              support.
            </p>
          </div>
        </StaggerContainer>

        <FadeIn delay={0.6} className="mt-10 text-center">
          <p
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${
              theme === "light"
                ? "bg-gray-100 text-gray-800"
                : "bg-gray-800 text-gray-200"
            }`}
          >
            <Globe size={18} className="animate-spin-slow" />
            <span>Open to remote opportunities and collaborations</span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
