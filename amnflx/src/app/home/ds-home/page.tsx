'use client'

import { bebas_nue } from "@/app/ui/fonts";
import React, { useRef } from "react";
import Link from "next/link";
import { Info } from "lucide-react";
import Image from "next/image";

const projects = [
  { id: 1, title: "Resume", image: "/bhasLogo.png" },
  { id: 2, title: "project 2", image: "/qrgo.webp" },
  { id: 3, title: "project 3", image: "/marquee.png" },
  { id: 4, title: "project 4", image: "/AMNFLX.png" },
];

const skills = [
  { id: 1, title: "BHAS", image: "/reactLogo.png" },
  { id: 2, title: "skill 2", image: "/nodejsLogo.png" },
  { id: 3, title: "skill 3", image: "/nextjsLogo.png" },
  { id: 4, title: "skill 4", image: "/pyLogo.png" },
  { id: 5, title: "skill 5", image: "/sqlLogo.png" },
];
export default function Page() {
  const scrollContainerRef1 = useRef<HTMLDivElement>(null);
  const scrollContainerRef2 = useRef<HTMLDivElement>(null);

  // Function to handle scrolling to the left
  const scrollLeft = (scrollRef: React.RefObject<HTMLDivElement | null>) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  // Function to handle scrolling to the right
  const scrollRight = (scrollRef: React.RefObject<HTMLDivElement | null>) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section with GIF and project Bio */}
      <div className="relative w-full h-[75vh] bg-black flex flex-col items-center justify-center text-center sm:text-left">
          {/* Video Container */}
          <div className="relative w-full h-full overflow-hidden">
            <video 
              src="/presentation.mp4"
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover object-top"
            />
            
            {/* Gradient Fade at Bottom */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
          </div>

          {/* Text Section */}
          <div className="w-full max-w-3xl px-6 text-center sm:text-left mt-6">
            <h1 className={`${bebas_nue.className} text-4xl sm:text-5xl font-bold mb-4 text-red-600`}>
              Amaan Mohammed
            </h1>
            <p className="text-lg sm:text-xl mb-6 text-gray-300">
              Data. Clean. Extrapolate. Visualize. Predict. Do something. Find out what Amaan, a new grad, is facing on his journey to become "The Data Scientist."
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link
                  className="rounded border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                  href="https://drive.google.com/file/d/1HKW7CuesgZLSDH7EjLMfNcnMVmD3_GT1/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </Link>
                <Link
                  className="rounded border border-solid border-transparent transition-colors flex items-center justify-center bg-gray-600 text-foreground gap-2 hover:bg-[#111] dark:hover:bg-[#111] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                  href="https://www.linkedin.com/in/amnmohd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Info className="text-lg" />
                  LinkedIn
                </Link>
            </div>
          </div>
      </div>
      
      {/* Projects Section */}
      <div className="px-4 sm:px-6 pt-12 relative">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Top Projects</h2>
        <div className="flex overflow-x-auto gap-4 scrollbar-hide px-12" ref={scrollContainerRef1}>
          {projects.map((project) => (
            <div key={project.id} className="flex-shrink-0 w-48 rounded overflow-hidden">
              <Image src={project.image} alt={project.title} className="w-full h-auto rounded-lg hover:opacity-80 transition duration-300" width={300} height={300}/>
            </div>
          ))}
        </div>
        {/* Left Scroll Button */}
        <button
          onClick={() => scrollLeft(scrollContainerRef1)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-950 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          {"<"}
        </button>

        {/* Right Scroll Button */}
        <button
          onClick={() => scrollRight(scrollContainerRef1)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-950 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          {">"}
        </button>
      </div>

      {/* Skills section */}
      <div className="px-4 sm:px-6 py-12 relative">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Trending Technical Skills</h2>
        <div className="flex overflow-x-auto gap-4 scrollbar-hide px-12" ref={scrollContainerRef2}>
          {skills.map((skill) => (
            <div key={skill.id} className="flex-shrink-0 w-48 rounded overflow-hidden">
              <Image src={skill.image} alt={skill.title} className="w-full h-auto rounded-lg hover:opacity-80 transition duration-300" width={300} height={450}/>
            </div>
          ))}
        </div>
        {/* Left Scroll Button */}
        <button
          onClick={() => scrollLeft(scrollContainerRef2)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-950 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          {"<"}
        </button>

        {/* Right Scroll Button */}
        <button
          onClick={() => scrollRight(scrollContainerRef2)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-950 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
