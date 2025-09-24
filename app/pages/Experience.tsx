'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Experience() {
	const [expanded, setExpanded] = useState(false);
	const [showCount, setShowCount] = useState(4);

	const experiences = [
		{
			title: 'Dripos (YC S20)',
			description: '2024 - 2025',
			details: [
				'Led the integration of Parafin capital loans into the Dripos ecosystem',
				'Developed the accounting feature from 0 to 1, collaborating with Layer Financial',
				'Collaborated with customer facing teams to iterate on intuitive UI/UX for payroll features, driving a 44% attach rate and >100 NRR',
				'Improved accuracy and performance of sales reports by caching Redshift data and gaining clarity into the business use case',
				'Contributed #2 most lines of code to organization',

			],
			tech: ['Typescript', 'React', 'Next.js', 'Postgres', 'React Native', 'Javascript', 'Go', 'AWS'],
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

	const handleExpand = () => {
		setShowCount(experiences.length);
		setExpanded(true);
	};

	const visibleExperiences = expanded ? experiences.slice(0, showCount) : experiences.slice(0, 4);

	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold mb-12 text-center text-gray-200">
					Experience
				</h2>

				<div className="grid grid-cols-1 gap-8">
					{visibleExperiences.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.4,
								delay: expanded && index >= 4 ? (index - 4) * 0.18 : 0,
							}}
							className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-800 bg-black/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 cursor-pointer"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5" />
							<div className="relative z-10">
								<h3 className="text-2xl font-bold mb-2 text-gray-200">{project.title}</h3>
								<p className="text-green-400 mb-4 font-mono">{project.description}</p>
								<div className="mb-6">
									<ul className="list-disc list-inside space-y-2 text-gray-300">
										{project.details.map((detail, i) => (
											<li key={i}>{detail}</li>
										))}
									</ul>
								</div>
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
							</div>
						</motion.div>
					))}
				</div>
				{!expanded && (
					<div className="flex justify-center mt-8">
						<button
							onClick={handleExpand}
							aria-label="Show more experience"
							className="flex items-center justify-center w-12 h-12 rounded-full border border-white bg-white/20 hover:bg-white/30 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-white"
						>
							<svg
								className="w-7 h-7 text-white transition-transform duration-200"
								fill="none"
								stroke="white"
								strokeWidth={1}
								viewBox="0 0 24 24"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
							</svg>
						</button>
					</div>
				)}
				
			</div>
		</section>
	);
}
