"use client"

import Link from "next/link";
import { useState } from "react";

type Experience = {
  id: number
  position: string
  company: string
  from: string
  to: string
  description: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    position: "Software Developer Intern",
    company: "Lantern",
    from: "May 2023",
    to: "Dec 2023",
    description: [
      "Built and optimized internal web tools using React and TypeScript",
      "Collaborated in Agile teams to ship features bi-weekly",
      "Led performance improvements reducing load time by 30%",
    ],
  },
  {
    id: 2,
    position: "Data Analyst Intern",
    company: "Grocery Co.",
    from: "Jan 2023",
    to: "Apr 2023",
    description: [
      "Analyzed sales data to generate actionable insights",
      "Automated reports saving 10+ hours/week",
    ],
  },
];

export default function Page() {

  return (
    <div className="px-4 sm:px-6 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Professional Experience</h2>

      <div className="flex flex-col gap-6 max-w-2xl">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-white rounded-lg p-6 shadow-lg border hover:shadow-red-600 transition duration-300"
          >
            <h3 className="text-xl font-semibold">{exp.position}</h3>
            <p className="text-red-600 font-medium">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-4">
              {exp.from} — {exp.to}
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
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