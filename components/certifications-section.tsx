"use client";

import { useTheme } from "@/context/theme-context";
import { FadeIn, StaggerContainer } from "./animations";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
  url: string;
}

const certifications: CertificationProps[] = [
  {
    title: "Uplimit SRE Fundamentals with Google certification",
    issuer: "Uplimit",
    date: "November 15, 2024",
    image: "/Uplimit-SRE-Fundamentals-with-Google-certification.png",
    url: "https://www.credential.net/1b061825-208e-40e1-88e0-7d75e5f5a80b#acc.vcsWuq3P",
  },
  // You can add more certifications here
];

export default function CertificationsSection() {
  const { theme } = useTheme();

  return (
    <section id="certifications" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Certifications
          </h2>
        </FadeIn>

        {/* Center the certification card */}
        <div className="flex justify-center">
          <StaggerContainer className="max-w-md">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`
                  rounded-lg overflow-hidden border transition-all duration-300
                  hover:-translate-y-2 hover:shadow-xl
                  ${
                    theme === "light"
                      ? "bg-white border-gray-200 shadow-sm hover:border-blue-300"
                      : "bg-gray-800 border-gray-700 hover:border-blue-500"
                  }
                `}
              >
                <div className="relative h-[180px] w-full overflow-hidden group">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    objectPosition="center top"
                  />
                  <div
                    className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    flex items-center justify-center
                    ${theme === "light" ? "bg-white/80" : "bg-black/80"}
                  `}
                  >
                    <a
                      href={cert.url}
                      className={`
                        text-sm px-6 py-2 rounded-full font-medium transition-all duration-300
                        transform scale-90 group-hover:scale-100 flex items-center gap-2
                        ${
                          theme === "light"
                            ? "bg-blue-600 text-white"
                            : "bg-blue-500 text-white"
                        }
                      `}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Award size={16} />
                      View Credential
                    </a>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <div className="flex justify-between items-center">
                    <p
                      className={`text-sm ${
                        theme === "light" ? "text-gray-600" : "text-gray-300"
                      }`}
                    >
                      {cert.issuer}
                    </p>
                    <p
                      className={`text-xs ${
                        theme === "light" ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {cert.date}
                    </p>
                  </div>

                  <a
                    href={cert.url}
                    className={`
                      mt-4 flex items-center gap-2 text-sm font-medium transition-colors duration-300
                      ${
                        theme === "light"
                          ? "text-blue-600 hover:text-blue-800"
                          : "text-blue-400 hover:text-blue-300"
                      }
                    `}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View credential <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>

        {/* Add more button if there are many certifications */}
        {certifications.length > 3 && (
          <FadeIn delay={0.6} className="mt-10 text-center">
            <a
              href="#"
              className={`
                inline-flex items-center gap-2 px-6 py-3 rounded-md transition-all duration-300
                ${
                  theme === "light"
                    ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    : "bg-gray-700 text-gray-200 hover:bg-gray-600"
                }
                transform hover:scale-105
              `}
            >
              View all certifications
            </a>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
