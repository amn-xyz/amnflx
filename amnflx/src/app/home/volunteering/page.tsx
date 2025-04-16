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
        title: "Volunteer Management App", 
        image: "/bhasLogo.png",
        description:"After working with Bleeding Heart Art Space to develop the app in my class, I have furthur volunteered to help them deploy it to their main webpage and run some alpha testing within the organization before they launch it.",
    },
    { 
        id: 2, 
        title: "UACS President", 
        image: "/uacs.png", 
        description:"As the President of the Undergraduate Association of Computing Science, I worked to bridge the gap between students and the tech industry, addressing modern challenges. Additionally, I was previously the VP Interal and the VP External before that, securing our club and its activities funding over 3000 CAD.",
    },
    { 
        id: 3, 
        title: "Dodgeball Liaison", 
        image: "/AllStars.png", 
        description:"I was the team captain of my university residence floor’s dodgeball team. As the liaison I acted as the middleman between my team and the executives of the organization, attending biweekly meetings with executives and weekly meetings with my team to update them about rules and help new residents experience the culture of dodgeball in Lister Residence. ", 
    },
  ];

export default function Page() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    return(
        <div className="px-4 sm:px-6 py-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Volunteering</h2>

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