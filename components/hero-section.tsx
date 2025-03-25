// "use client";

// import { useTheme } from "@/context/theme-context";
// import { Github, Linkedin, Twitter, Mail } from "lucide-react";

// export default function HeroSection() {
//   const { theme } = useTheme();

//   return (
//     <section className="py-12 md:py-20">
//       <h1 className="text-6xl font-bold mb-4 text-center">
//         Full Stack Developer
//       </h1>
//       <p
//         className={`text-lg max-w-[600px] mx-auto mb-5 text-center ${
//           theme === "light" ? "text-gray-600" : "text-gray-300"
//         }`}
//       >
//         Building digital experiences with modern technologies. Focused on
//         creating elegant solutions to complex problems.
//       </p>

//       <div className="flex justify-center mt-5">
//         <div className="flex gap-5">
//           <a
//             href="https://github.com/kubthesupermax"
//             target="_blank"
//             aria-label="GitHub"
//             className={`
//               flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors
//               ${
//                 theme === "light"
//                   ? "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
//                   : "border-white text-white hover:bg-white hover:text-gray-800"
//               }
//             `}
//             rel="noreferrer"
//           >
//             <Github size={20} />
//           </a>

//           <a
//             href="https://www.linkedin.com/in/franklin-kuba/"
//             target="_blank"
//             aria-label="LinkedIn"
//             className={`
//               flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors
//               ${
//                 theme === "light"
//                   ? "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
//                   : "border-white text-white hover:bg-white hover:text-gray-800"
//               }
//             `}
//             rel="noreferrer"
//           >
//             <Linkedin size={20} />
//           </a>

//           <a
//             href="https://x.com/kubthesupermax"
//             target="_blank"
//             aria-label="Twitter"
//             className={`
//               flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors
//               ${
//                 theme === "light"
//                   ? "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
//                   : "border-white text-white hover:bg-white hover:text-gray-800"
//               }
//             `}
//             rel="noreferrer"
//           >
//             <Twitter size={20} />
//           </a>

//           <a
//             href="mailto:hello@example.com"
//             aria-label="Mail"
//             className={`
//               flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors
//               ${
//                 theme === "light"
//                   ? "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
//                   : "border-white text-white hover:bg-white hover:text-gray-800"
//               }
//             `}
//           >
//             <Mail size={20} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useTheme } from "@/context/theme-context";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { FadeIn, FloatingAnimation } from "./animations";

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <section className="py-12 md:py-20">
      <FadeIn>
        <h1 className="text-6xl font-bold mb-4 text-center relative">
          Full Stack Developer
          <span className="absolute -top-10 -right-10 text-5xl animate-pulse-slow hidden md:inline">
            ✨
          </span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p
          className={`text-lg max-w-[600px] mx-auto mb-5 text-center ${
            theme === "light" ? "text-gray-600" : "text-gray-300"
          }`}
        >
          Building digital experiences with modern technologies. Focused on
          creating elegant solutions to complex problems.
        </p>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div className="flex justify-center mt-5">
          <div className="flex gap-5">
            <a
              href="https://github.com"
              target="_blank"
              aria-label="GitHub"
              className={`
                flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300
                hover:scale-110 hover:rotate-6
                ${
                  theme === "light"
                    ? "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-gray-800"
                }
              `}
              rel="noreferrer"
            >
              <Github size={20} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              className={`
                flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300
                hover:scale-110 hover:rotate-6
                ${
                  theme === "light"
                    ? "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-gray-800"
                }
              `}
              rel="noreferrer"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
              className={`
                flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300
                hover:scale-110 hover:rotate-6
                ${
                  theme === "light"
                    ? "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-gray-800"
                }
              `}
              rel="noreferrer"
            >
              <Twitter size={20} />
            </a>

            <a
              href="mailto:hello@example.com"
              aria-label="Mail"
              className={`
                flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300
                hover:scale-110 hover:rotate-6
                ${
                  theme === "light"
                    ? "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-gray-800"
                }
              `}
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </FadeIn>

      <FloatingAnimation className="mt-16 flex justify-center">
        <div
          className={`px-6 py-3 rounded-full ${
            theme === "light"
              ? "bg-blue-100 text-blue-800"
              : "bg-blue-900/30 text-blue-300"
          }`}
        >
          <span className="text-sm font-medium">
            Scroll down to explore my work
          </span>
        </div>
      </FloatingAnimation>
    </section>
  );
}
