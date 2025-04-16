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
    from: "September 2023",
    to: "Dec 2023",
    description: [
      "Reduced technical debt by refactoring the front-end of internal apps using React, and Node.js to match the brand's new image",
      "Saved 4 months of development time by directly working with the UI/UX team using Figma to design and build the front-end components",
      "Maintained continuous deployment to production using Microsoft Azure and GitFlow for the CI/CD pipeline",
    ],
  },
  {
    id: 2,
    position: "Software Developer Intern",
    company: "Devfacto",
    from: "May 2023",
    to: "August 2023",
    description: [
      "Improved data accuracy by cleaning up redundant data spanning 2+ years by merging RESTful APIs using Javascript, .NET, and Docker",
      "Used Power BI and SQL to analyze data and generate accurate consultant hour reports, saving business strategy 3+ days",
      "Developed an integrate-able Microsoft Teams app using Microsoft Power Apps to simplify registering 50+ consultants’ billable hours",
    ],
  },
  {
    id: 3,
    position: "Data Analyst Intern",
    company: "Etisalat",
    from: "June 2021",
    to: "July 2021",
    description: [
      "Collaborated with the Department of Health team on Customer Relations Management applications similar to Power BI to monitor approximately 2,000+ positive COVID-19 cases",
      "Monitored COVID-19 home quarantine program files, using wearable tech to track the location of patients, ensuring 100% adherence to quarantine regulations",
      "Delivered multilingual customer support, accurately resolving inquiries and reducing response time by 80%",
    ],
  },
];

export default function Page() {

  return (
    <div className="px-4 sm:px-6 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Professional Experience</h2>

      <div className="flex flex-col gap-6 max-w-3xl">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-neutral-800 rounded-lg p-6 shadow-lg border hover:shadow-red-600 transition duration-300"
          >
            <h3 className="text-2xl font-semibold">{exp.position}</h3>
            <p className="text-red-600 font-medium">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-4">
              {exp.from} — {exp.to}
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