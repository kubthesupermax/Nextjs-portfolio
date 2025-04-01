"use client";
import { FadeIn } from "./animations";
import ProjectCard from "./project-card";

const projects = [
  {
    id: 1,
    title: "BrolyFitness",
    description:
      "A dynamic and interactive fitness web application that offers users the ability to create and manage workout routines, explore different exercises, and track their fitness journey with ease.",
    // image: "/placeholder.svg?height=400&width=600",
    image: "/brolyfitness.png",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    link: "https://brolyfitness.vercel.app/",
  },
  {
    id: 2,
    title: "Text to Speech & translation App",
    description:
      "A real-time text to Speech & translation application. Users can convert text into speech and translate text from one language to another using the Google Translate API and the Javascript Speech API.",
    image: "/Screenshot 2025-02-21 173917.png",
    tags: ["Vercel", "Javascript", "Api"],
    link: "https://chatter-cove-app.vercel.app/",
  },
  {
    id: 3,
    title: "Multi user chat application",
    description:
      "A real-time multi-user chat application built with Javascript on the frontend and Python with SocketIO on the backend. Users can send messages to each other in real-time, change their username, join and leave the chat.",
    image: "/fs-chat-app.png",
    tags: ["Python", "Javascript", "SocketIO"],
    link: "https://python-javascript-chat-app.onrender.com/",
  },
  {
    id: 4,
    title: "Gym Ecommerce Store",
    description:
      "A mock eCommerce app showcasing gym equipment and accessories, built with Next.js, TypeScript, and Tailwind. Features product listings, a shopping cart, and checkout flow.",
    image: "/gym-ecommerce.png",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://gym-ecommerce-store.vercel.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Projects
          </h2>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
