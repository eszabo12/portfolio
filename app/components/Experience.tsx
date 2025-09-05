'use client';

import { motion } from 'framer-motion';

export default function Experience() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold mb-12 text-center text-gray-200">
					Experience
				</h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'Dripos (YC S20)',
							description: '2024 - 2025',
							details: [
								'Collaborated with customer facing teams to iterate on intuitive UI/UX for payroll features, driving a 44% attach rate and >100 NRR',
								'Proactively fixed frontend bugs in complex financial reports, improving reliability and user trust across platforms',
								'Improved accuracy and performance of sales reports by caching Redshift data and gaining clarity into the business use case',
							],
							tech: ['Typescript', 'React.JS', 'React Native', 'Javascript', 'Go', 'AWS'],
						},
						{
							title: 'Otea',
							description: '2023 - 2024',
							details: [
								'Co-Founded a marketplace app company, raised an angel round from investors and led 11 partnerships across the NYC ',
								'Led design and development a fullstack app in Flutter for Android, iOS, and web using Firebase as the backend',
								'Recruited and led a team of 6 across engineering, design, and marketing',
								'Featured in top press such as TechCrunch, Inc. Magazine, and Morning Brew',
						],
							tech: ['Dart', 'Flutter', 'React.js', 'Firebase'],
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
					].map((project, index) => (
						<motion.div
							key={index}
							whileHover={{ 
								scale: 1.02,
								transition: { duration: 0.2 }
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
			</div>
		</section>
	);
}
