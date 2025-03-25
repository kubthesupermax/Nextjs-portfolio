"use client";

import { useTheme } from "@/context/theme-context";
import { FadeIn } from "./animations";
import { Send } from "lucide-react";

export default function ContactSection() {
  const { theme } = useTheme();

  return (
    <section id="contact" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Contact Me
          </h2>
        </FadeIn>

        <div className="max-w-md mx-auto">
          <FadeIn direction="up" delay={0.2}>
            <form
              action="https://formsubmit.co/a623d543a1f5d16028a7b2823eb88535"
              method="POST"
              className="space-y-6"
            >
              <div className="group">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  required
                  className={`w-full p-3 rounded-md border transition-all duration-300 ${
                    theme === "light"
                      ? "border-gray-300 bg-white text-gray-900 focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                      : "border-gray-700 bg-gray-800 text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-800"
                  } outline-none`}
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                  className={`w-full p-3 rounded-md border transition-all duration-300 ${
                    theme === "light"
                      ? "border-gray-300 bg-white text-gray-900 focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                      : "border-gray-700 bg-gray-800 text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-800"
                  } outline-none`}
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  required
                  rows={5}
                  className={`w-full p-3 rounded-md border transition-all duration-300 ${
                    theme === "light"
                      ? "border-gray-300 bg-white text-gray-900 focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                      : "border-gray-700 bg-gray-800 text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-800"
                  } outline-none`}
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className={`w-full py-3 px-4 rounded-md transition-all duration-300 flex items-center justify-center gap-2 ${
                    theme === "light"
                      ? "bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-[1.02]"
                      : "bg-blue-500 hover:bg-blue-600 text-white transform hover:scale-[1.02]"
                  } font-medium`}
                >
                  <Send size={18} className="animate-pulse-slow" />
                  Send
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
