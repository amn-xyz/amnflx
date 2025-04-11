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
    { id: 1, title: "Volunteer Management App", image: "/bhasLogo.png", description:"desc 1" },
    { id: 2, title: "qrGO", image: "/qrgo.png", description:"desc 2" },
    { id: 3, title: "StudyBuddy", image: "/studyBuddy.png", description:"desc 3" },
    { id: 4, title: "AMNFLX", image: "/amnflxLogo.png", description:"desc 4" },
  ];

export default function Page() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    return(
        <div className="px-4 sm:px-6 py-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">My Projects</h2>

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
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50" onClick={() => setSelectedProject(null)}>
                <div className="bg-background text-foreground p-6 rounded-lg max-w-md w-full relative shadow-[0_8px_30px_rgba(220,38,38,1)]">
                    
                    <button 
                    onClick={() => setSelectedProject(null)} 
                    className="absolute top-2 right-2 text-2xl"
                    >
                    &times;
                    </button>

                    <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                    <p className="text-sm text-muted-foreground">{selectedProject.description}</p>
                </div>
                </div>
            )}
        </div>

    );
}