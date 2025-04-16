"use client"

import Link from "next/link";
import { useState } from "react";

type Education = {
  id: number
  degree: string
  faculty: string
  to: string
  description: string[]
}

const experiences: Education[] = [
  {
    id: 1,
    degree: "BSc Computing Science with Specialization - Software Practice",
    faculty: "Faculty of Science",
    to: "December 2024",
    description: [
      "Relevant courses: Data Structures & Algorithms, Search & Planning in AI, Predictive Business Analytics",
    ],
  },
];

export default function Page() {

  return (
    <div className="px-4 sm:px-6 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">My Education</h2>

      <div className="flex flex-col gap-6 max-w-3xl">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-neutral-800 rounded-lg p-6 shadow-lg border hover:shadow-red-600 transition duration-300"
          >
            <h3 className="text-2xl font-semibold">{exp.degree}</h3>
            <p className="text-red-600 font-medium">{exp.faculty}</p>
            <p className="text-sm text-gray-500 mb-4">
              {exp.to}
            </p>
            <ul className="list-disc list-inside text-xl space-y-1">
              {exp.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}