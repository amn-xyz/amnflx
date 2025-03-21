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
      {/* Hero Section */}
      <div className="relative h-[70vh] flex flex-col items-center justify-center text-center bg-cover bg-center px-6 sm:px-12" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900/?movie')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Unlimited movies, TV shows, and more</h1>
          <p className="text-lg sm:text-xl mb-6">Watch anywhere. Cancel anytime.</p>
          <button className="bg-red-600 hover:bg-red-700 text-white text-lg px-6 py-3 rounded font-bold">Get Started</button>
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
