"use client";

import { useTheme } from "@/context/theme-context";
import Image from "next/image";
import { FadeIn } from "./animations";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
  };
}

export default function ProjectCard({ project }: ProjectProps) {
  const { theme } = useTheme();

  return (
    <FadeIn>
      <div
        className={`
        border rounded-lg overflow-hidden transition-all duration-500 
        hover:-translate-y-2 hover:shadow-xl
        ${
          theme === "light"
            ? "border-gray-200 hover:border-blue-300"
            : "border-gray-700 hover:border-blue-500"
        }
      `}
      >
        <div className="relative h-[200px] w-full overflow-hidden group">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            objectPosition="top center"
          />
          <div
            className={`
            absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
            flex items-center justify-center
            ${theme === "light" ? "bg-white/80" : "bg-black/80"}
          `}
          >
            <a
              href={project.link}
              className={`
                text-sm px-6 py-2 rounded-full font-medium transition-all duration-300
                transform scale-90 group-hover:scale-100
                ${
                  theme === "light"
                    ? "bg-blue-600 text-white"
                    : "bg-blue-500 text-white"
                }
              `}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-2 px-4 py-1">
          {project.title}
        </h3>

        <p
          className={`text-sm px-4 mb-4 ${
            theme === "light" ? "text-gray-600" : "text-gray-300"
          }`}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 px-4 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={`
                text-xs px-2 py-1 rounded transition-all duration-300
                ${
                  theme === "light"
                    ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    : "bg-gray-800 text-gray-200 hover:bg-gray-700"
                }
              `}
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          className={`
            block text-center text-sm py-3 transition-colors duration-300
            ${
              theme === "light"
                ? "bg-gray-100 text-gray-800 hover:bg-blue-600 hover:text-white"
                : "bg-gray-800 text-gray-200 hover:bg-blue-600 hover:text-white"
            }
          `}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </FadeIn>
  );
}

// objectFit="cover"
//           objectPosition="top center"
