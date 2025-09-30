'use client';

import { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Experience() {
  const [open, setOpen] = useState(false);

  const experiences = [
    {
      title: 'Dripos (YC S20)',
      description: '2024 - 2025',
      details: [
        'Led the integration of Parafin capital loans into the Dripos ecosystem',
        'Developed the accounting feature from 0 to 1, collaborating with Layer Financial',
        'Collaborated with customer facing teams to iterate on intuitive UI/UX for payroll features, driving a 44% attach rate and >100 NRR',
        'Improved performance of sales reports by creating Redshift data warehouses and debugged fatal SQL errors',
        'Contributed #2 most lines of code to organization',
      ],
      tech: ['Typescript', 'React', 'Next.js', 'Redis', 'Postgres', 'React Native', 'Javascript', 'Go', 'AWS'],
    },
    {
      title: 'Lucendo Labs, Inc.',
      description: '2023 - 2024',
      details: [
        'Co-Founded a marketplace app company, raised an angel round from investors, and led 11 partnerships across the NYC ',
        'Led design and development a fullstack app in Flutter for Android, iOS, and web using Firebase as the backend',
        'Featured in top press such as TechCrunch, Inc. Magazine, and Morning Brew',
      ],
      tech: ['Dart', 'Flutter', 'React', 'Firebase'],
    },
    {
      title: 'Microsoft',
      description: '2021',
      details: [
        'Proved the feasibility of a fullstack proof-of-concept search indexing process for the Windows file explorer',
        'Demoed to stakeholders and led adoption into the Windows 11 release'
      ],
      tech: ['C#', 'C/C++'],
    },
    {
      title: 'NASA',
      description: '2020',
      details: [
        'Built a navigation pipeline for an autonomous inspection rover',
      ],
      tech: ['C/C++', 'ROS', 'Python'],
    },
    {
      title: 'Lucid Circuit',
      description: '2020 - 2021',
      details: [
        'Simulated a machine learning model for satellite telemetry using Python TensorBoard Lite',
        'Developed an API for electrical engineers that stores all information about architecture hardware parsed from JSON',
      ],
      tech: ['Python', 'TensorBoard', 'OpenCV', 'C/C++'],
    },
    {
      title: 'Totall Metal Recycling',
      description: '2019',
      details: [
        'Built Java web applications backed by a relational MySQL database',
        'Created a VBScript-to-Java transpiler in Python to translate thousands of stored procedures',
      ],
      tech: ['Java Swing', 'MySQL', 'Python'],
    },
  ];

  const visibleExperiences = open ? experiences : experiences.slice(0, 4);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Experience
        </h2>
        <Collapsible open={open} onOpenChange={setOpen}>
          <div className="grid grid-cols-1 gap-8">
            {visibleExperiences.map((project, index) => (
              <Card
                key={index}
                className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-lg hover:border-green-400 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white pointer-events-none" />
                <div className="relative z-10">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-800">{project.title}</CardTitle>
                    <CardDescription className="text-green-400 font-mono">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                      {project.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-sm px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20 text-green-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <CollapsibleTrigger asChild>
              <button
                aria-label={open ? "Show less experience" : "Show more experience"}
                className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 bg-white hover:bg-gray-50 hover:border-green-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-green-600 active:border-gray-300"
              >
                {open ? (
                  <svg
                    className="w-7 h-7 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
}
