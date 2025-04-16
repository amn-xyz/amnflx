"use client"

import Link from "next/link";
import { useState } from "react";

type Project = {
    id: number
    title: string
    image: string
    description: string
  }

const projects: Project[] = [
    { 
        id: 1, 
        title: "Powerlifting", 
        image: "/powerlift.png",
        description:"I started my Powerlifting journey in May 2024, and competed in my first competition in November 2024, securing a total weight of 442.5kg, a summation of my squat, bench, and deadlift.",
    },
    { 
        id: 2, 
        title: "Soccer", 
        image: "/soccer.png", 
        description:"I've played soccer through majority of my childhood. It's been my main sport until powerlifting came into my life. I still play soccer recreationally and won second place in a competitive futsal league due to a funny story (Ask me sometime).",
    },
    { 
        id: 3, 
        title: "Gaming", 
        image: "/gaming.png", 
        description:"I've been a console gamer all my life and recently was blessed with the opportunity of buliding my own PC. I love single player adventure games spanning indie games like Hades to major triple A games like Elden Ring which I'm currently pushing through. ", 
    },
  ];

export default function Page() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    return(
        <div className="px-4 sm:px-6 py-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">My Hobbies</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {projects.map((project) => (
                <div 
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer group relative rounded-lg overflow-hidden bg-background border border-neutral-800 transition-transform duration-300 hover:-translate-y-2"
                >
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    </div>
                </div>
                ))}
            </div>

            {/* Pop-up Card */}
            {selectedProject && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                    className="bg-background text-foreground p-6 rounded-lg max-w-3xl w-full relative shadow-[0_8px_30px_rgba(220,38,38,1)]"
                    onClick={(e) => e.stopPropagation()} // prevents modal from closing when clicking inside
                    >
                    <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-2 right-2 text-2xl"
                    >
                        &times;
                    </button>

                    <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>

                    {/* Video Section */}
                    <div className="mb-4 rounded overflow-hidden rounded-lg px-10">
                        <img src={selectedProject.image} />
                    </div>

                    <p className="text-xl text-muted-foreground py-5">{selectedProject.description}</p>
                    </div>
                </div>
            )}
        </div>

    );
}