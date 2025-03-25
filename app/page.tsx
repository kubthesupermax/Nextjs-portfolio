import Navbar from "@/components/navbar";
import ThemeSwitcher from "@/components/theme-switcher";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import ContactSection from "@/components/contact-section";
import AboutSection from "@/components/about-section";
import ResumeSection from "@/components/resume-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center text-2xl font-medium mb-8">Portfolio V4</h1>

        <ThemeSwitcher />

        <div className="container mx-auto px-4">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ResumeSection />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
