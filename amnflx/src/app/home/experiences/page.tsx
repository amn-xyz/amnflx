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
    { id: 1, title: "Experiences", image: "/experiences", description:"desc 1" },
    { id: 2, title: "Projects", image: "/projects.png", description:"desc 2" },
    { id: 3, title: "Education", image: "/education.jpg", description:"desc 3" },
    { id: 4, title: "Volunteering", image: "/volunteering.jpg", description:"desc 4" },
    { id: 5, title: "Hobbies", image: "/hobbies.jpg", description:"desc 5" },
  ];

export default function Page() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    return(
        <div className="px-4 sm:px-6 py-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Professional Experience</h2>

            
        </div>

    );
}