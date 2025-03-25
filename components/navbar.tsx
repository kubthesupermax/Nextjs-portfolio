"use client";

import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ensure smooth scrolling globally on mount
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Smooth scroll handler
  const handleScroll = (id: string) => {
    // Convert the section name to lowercase to match potential ID naming
    const targetId = id.toLowerCase();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMenu();
    }
  };

  return (
    <>
      <nav
        className={`sticky top-0 flex justify-between items-center px-8 py-5 shadow-sm z-50 border-b ${
          theme === "light"
            ? "bg-white/70 border-gray-200"
            : "bg-[#070707]/70 border-gray-700"
        }`}
      >
        <Link
          href="/"
          className={`text-2xl font-bold ${
            theme === "light" ? "text-[#070707]" : "text-white"
          }`}
        >
          FK
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          type="button"
        >
          {isMenuOpen ? (
            <X
              size={24}
              className={theme === "light" ? "text-[#070707]" : "text-white"}
            />
          ) : (
            <Menu
              size={24}
              className={theme === "light" ? "text-[#070707]" : "text-white"}
            />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {["about", "skills", "projects", "Resume", "Certifications"].map(
            (section) => (
              <button
                key={section}
                onClick={() => handleScroll(section)}
                className={`text-sm transition-colors ${
                  theme === "light"
                    ? "text-gray-600 hover:text-[#070707]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            )
          )}
          {/* Contact Me button with special styling */}
          <button
            onClick={() => handleScroll("contact")}
            className={`text-sm px-4 py-2 rounded-md transition-colors ${
              theme === "light"
                ? "bg-[#070707] text-white hover:bg-[#1a1a1a] hover:text-gray-100"
                : "bg-white text-[#1a1a1a] hover:bg-gray-100 hover:text-black"
            }`}
          >
            Contact Me
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`fixed inset-0 top-[73px] z-40 md:hidden ${
            theme === "light" ? "bg-white" : "bg-[#070707]"
          }`}
        >
          <div className="flex flex-col items-center pt-10 gap-8">
            {["about", "skills", "projects", "Resume", "Certifications"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => handleScroll(section)}
                  className={`text-lg font-medium transition-colors ${
                    theme === "light"
                      ? "text-gray-800 hover:text-black"
                      : "text-gray-200 hover:text-white"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              )
            )}
            {/* Contact Me button in mobile menu */}
            <button
              onClick={() => handleScroll("contact")}
              className={`text-lg px-6 py-2 rounded-md transition-colors ${
                theme === "light"
                  ? "bg-[#070707] text-white hover:bg-[#1a1a1a]"
                  : "bg-white text-[#1a1a1a] hover:bg-gray-100"
              }`}
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </>
  );
}
