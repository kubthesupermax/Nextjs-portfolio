"use client";

import type React from "react";

import { useTheme } from "@/context/theme-context";
import {
  Code,
  Server,
  Database,
  Globe,
  Layout,
  Terminal,
  Cloud,
  Cpu,
  FileCode,
  Layers,
  Workflow,
  TestTube,
  Boxes,
  GitBranch,
  Send,
  Wind,
} from "lucide-react";
import { FadeIn, StaggerContainer } from "./animations";

interface SkillProps {
  name: string;
  icon: React.ReactNode;
}

const skills: SkillProps[] = [
  { name: "Next.js", icon: <Code size={24} /> },
  { name: "React", icon: <Layers size={24} /> },
  { name: "Express", icon: <Server size={24} /> },
  { name: "Node", icon: <FileCode size={24} /> },
  { name: "JavaScript", icon: <Cpu size={24} /> },
  { name: "Docker", icon: <Boxes size={24} /> },
  { name: "Cloud", icon: <Cloud size={24} /> },
  { name: "Linux", icon: <Terminal size={24} /> },
  { name: "Testing", icon: <TestTube size={24} /> },
  { name: "MongoDB", icon: <Database size={24} /> },
  { name: "Python", icon: <Code size={24} /> },
  { name: "Flask", icon: <Server size={24} /> },
  { name: "Django", icon: <Workflow size={24} /> },
  { name: "APIs", icon: <Globe size={24} /> },
  { name: "WordPress", icon: <Layout size={24} /> },
  { name: "TypeScript", icon: <Code size={24} /> },
  { name: "Sql", icon: <Database size={24} /> },
  { name: "Git", icon: <GitBranch size={24} /> },
  { name: "Postman", icon: <Send size={24} /> },
  { name: "Tailwind", icon: <Wind size={24} /> },
];

export default function SkillsSection() {
  const { theme } = useTheme();

  return (
    <section id="skills" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Skills
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-center justify-center p-6 rounded-lg 
                transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg
                ${
                  theme === "light"
                    ? "bg-white border border-gray-200 shadow-sm hover:border-blue-300"
                    : "bg-gray-800 border border-gray-700 hover:border-blue-500"
                }
              `}
            >
              <div
                className={`mb-3 transition-colors duration-300 ${
                  theme === "light"
                    ? "text-blue-600 group-hover:text-blue-700"
                    : "text-blue-400 group-hover:text-blue-300"
                }`}
              >
                {skill.icon}
              </div>
              <span className="font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
