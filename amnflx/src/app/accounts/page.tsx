import React from "react";
import Link from "next/link";

const profiles = [
  { id: 1, name: "Software Recruiter", image: "/profile1.png" },
  { id: 2, name: "Data Science Recruiter", image: "/profile2.png" },
  { id: 3, name: "Powerlifter", image: "/profile3.png" },
  { id: 4, name: "Guest", image: "/profile4.png" },
];

const AccountsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
      {/* Title */}
      <h1 className="flex text-5xl sm:text-4xl font-bold mb-8">Who's Watching?</h1>

      {/* Profile Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {profiles.map((profile) => (
          <div key={profile.id} className="flex flex-col items-center group">
            {/* Profile Image */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-lg overflow-hidden border-2 border-transparent group-hover:border-gray-400 transition">
              <Link href="/home/dev-home">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
            {/* Profile Name */}
            <p className="mt-3 text-lg font-medium group-hover:text-gray-400 transition">
              {profile.name}
            </p>
          </div>
        ))}
      </div>

      {/* Account & Sign Out Options */}
      <div className="mt-10 space-y-4">
        <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/"
          >
            Sign Out
          </Link>
      </div>
    </div>
  );
};

export default AccountsPage;
