"use client";

import { useTheme } from "@/context/theme-context";
import { FadeIn } from "./animations";
import { FileText, Download, ExternalLink } from "lucide-react";

export default function ResumeSection() {
  const { theme } = useTheme();

  // You can replace this with your actual resume URL
  const resumeUrl = "/Franklin-kuba-new-dev-resume.docx";

  return (
    <section id="resume" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Resume
          </h2>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div
              className={`
              p-8 rounded-lg border relative overflow-hidden
              ${
                theme === "light"
                  ? "bg-white border-gray-200 shadow-lg"
                  : "bg-gray-800 border-gray-700"
              }
            `}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-grid-pattern"></div>
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                <div
                  className={`
                  w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0
                  ${theme === "light" ? "bg-blue-100" : "bg-blue-900/30"}
                `}
                >
                  <FileText
                    size={40}
                    className={
                      theme === "light" ? "text-blue-600" : "text-blue-400"
                    }
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">
                    My Professional Resume
                  </h3>
                  <p
                    className={`mb-6 ${
                      theme === "light" ? "text-gray-600" : "text-gray-300"
                    }`}
                  >
                    View my complete work history, education, and skills.
                    Download a copy for your records or view it online.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a
                      href={resumeUrl}
                      download
                      className={`
                        flex items-center justify-center gap-2 px-6 py-3 rounded-md transition-all duration-300
                        ${
                          theme === "light"
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }
                        transform hover:scale-105
                      `}
                    >
                      <Download size={18} />
                      Download Resume
                    </a>

                    <a
                      href={resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex items-center justify-center gap-2 px-6 py-3 rounded-md transition-all duration-300
                        ${
                          theme === "light"
                            ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                            : "bg-gray-700 text-gray-200 hover:bg-gray-600"
                        }
                        transform hover:scale-105
                      `}
                    >
                      <ExternalLink size={18} />
                      View Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="mt-8 text-center">
            <p
              className={`text-sm ${
                theme === "light" ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Last updated: March 2025
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
