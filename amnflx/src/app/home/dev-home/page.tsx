import { bebas_nue } from "@/app/ui/fonts";
import React from "react";

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
      <div className="relative w-full h-[70vh] bg-black flex items-center justify-center text-center sm:text-left">
          {/* Video Container (Now Full-Width) */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
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

          {/* Text Section (Centered Above Video) */}
          <div className="absolute bottom-8 left-8 z-10 max-w-3xl px-6 sm:px-12 text-white">
            <h1 className={`${bebas_nue.className} text-4xl sm:text-5xl font-bold mb-4 text-red-600`}>
              Amaan Mohammed
            </h1>
            <p className="text-lg sm:text-xl mb-6 text-gray-300">
              Dive into an epic adventure with breathtaking visuals and an engaging storyline that will keep you on the edge of your seat.
            </p>
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
