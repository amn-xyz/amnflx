import { bebas_nue } from "@/app/ui/fonts";
import React from "react";
import Link from "next/link";
import { Info } from "lucide-react";

const movies = [
  { id: 1, title: "Resume", image: "/resumeIcon.png" },
  { id: 2, title: "Movie 2", image: "https://via.placeholder.com/300x450" },
  { id: 3, title: "Movie 3", image: "https://via.placeholder.com/300x450" },
  { id: 4, title: "Movie 4", image: "https://via.placeholder.com/300x450" },
  { id: 5, title: "Movie 5", image: "https://via.placeholder.com/300x450" },
];

const projects = [
  { id: 1, title: "BHAS", image: "/bhasLogo.png" },
  { id: 2, title: "Movie 2", image: "https://via.placeholder.com/300x450" },
  { id: 3, title: "Movie 3", image: "https://via.placeholder.com/300x450" },
  { id: 4, title: "Movie 4", image: "https://via.placeholder.com/300x450" },
  { id: 5, title: "Movie 5", image: "https://via.placeholder.com/300x450" },
];
export default function Page() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section with GIF and Movie Bio */}
      <div className="relative w-full h-[75vh] bg-black flex flex-col items-center justify-center text-center sm:text-left">
          {/* Video Container */}
          <div className="relative w-full h-full overflow-hidden">
            <video 
              src="/powerlift.mov" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
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
              I am a new powerlifter that finds joy in solving difficult problems. I practice software development with the same principles of lifting, even though you start with an empty bar which can be embarrasing, every one starts somewhere. This is where consistency is key, you add weight week by week and before you know it you're a decent powerlifter.
            </p>
            <div className="flex mt-10 space-x-4">
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
      
      {/* Movies Section */}
      <div className="px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Trending Documents</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <div key={movie.id} className="rounded overflow-hidden">
              <img src={movie.image} alt={movie.title} className="w-full h-auto rounded-lg hover:opacity-80 transition duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Projects section */}
      <div className="px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Top Projects</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {projects.map((projects) => (
            <div key={projects.id} className="rounded overflow-hidden">
              <img src={projects.image} alt={projects.title} className="w-full h-auto rounded-lg hover:opacity-80 transition duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
