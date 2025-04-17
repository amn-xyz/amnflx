"use client"

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

type Project = {
    id: number
    title: string
    image: string
    description: string
    video: string
    repo: string
  }

const projects: Project[] = [
    { 
        id: 1, 
        title: "Volunteer Management App", 
        image: "/bhasLogo.png",
        description:"This is a volunteer management web application, designed to simplify managing and coordinating volunteers for events. This platform offers a seamless experience for creating events, managing shift schedules, and signing up volunteers and artists.",
        video: "/bhasDemo.mp4", 
        repo: "https://github.com/UAlberta-CMPUT401/f24project-Bleeding-Heart-Art-Space" 
    },
    { 
        id: 2, 
        title: "qrGO", image: "/qrgo.png", 
        description:"An Android game similar to Pokemon GO, except you gotta catch all the QR codes scattered around the city. With maps and camera integration, gather around with your friends to explore the city and build your collection",
        video: "/comingSoon.mp4", 
        repo: "https://github.com/CMPUT301W23T24/QRGo" 
    },
    { 
        id: 3, 
        title: "StudyBuddy", 
        image: "/studyBuddy.png", 
        description:"A Chrome-based extension powered by Bionic Reading and AI to help people focus and read webpages.", 
        video: "/studyBuddyDemo.mp4", 
        repo: "https://github.com/x-ab-y/StudyBuddy" 
    },
    { 
        id: 4, 
        title: "AMNFLX", 
        image: "/amnflxLogo.png", 
        description:"The portfolio you're visiting! Inspired by the Netflix webpage, I plan to add new features that would make it easier to find more information about my software development journey", 
        video: "/amnflxDemo.mp4", 
        repo: "https://github.com/amn-xyz/amnflx" 
    },
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
                    <Image src={project.image} alt={project.title} className="w-full h-48 object-cover" width={640} height={360} />
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
                    <div className="mb-4 rounded overflow-hidden rounded-lg">
                        <video
                        src={selectedProject.video}
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-auto rounded-lg"
                        />
                    </div>

                    <p className="text-xl text-muted-foreground py-5">{selectedProject.description}</p>
                    <Link
                        className="rounded border border-solid border-transparent transition-colors flex items-center justify-center bg-neutral-600 text-foreground gap-2 hover:bg-neutral-600 dark:hover:bg-neutral-700 font-bold text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                        href={selectedProject.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Visit Repository
                        </Link>
                    </div>
                </div>
            )}
        </div>

    );
}