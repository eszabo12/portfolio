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
							title: 'Dripos',
							description: '2024 - 2025',
							details: [
								'Developed a fully end-to-end fullstack accounting feature 0-1, collaborating with Layer Financial',
								'Designed, deployed, and architected fullstack 0-1 payroll features (e.g., post-tax deductions), which grew to a 44% attach rate and drove >100 NRR',
								'Enabled instant loading of major reports using custom Redshift data warehouses across mobile, web, and tablet',
								'Architected a custom CI/CD pipeline for the web dashboard using GitHub Actions and AWS S3 Buckets',
							],
							tech: ['AWS', 'Redshift', 'React', 'GitHub Actions', 'S3'],
						},
						{
							title: 'Lucendo Labs, Inc.',
							description: 'Founder | 2023 - 2024',
							details: [
								'Featured in top press such as TechCrunch, Inc. Magazine, and Morning Brew',
						],
							tech: ['Flutter', 'React.js', 'AWS', 'PostgreSQL'],
						},
						{
							title: 'Microsoft',
							description: '2021',
							details: [
								'Developed a proof-of-concept search indexing process for the Windows operating system',
						],
							tech: ['C#', 'Windows APIs'],
						},
						{
							title: 'NASA',
							description: '2020',
							details: [
								'Built a navigation pipeline for an autonomous inspection rover',
						],
							tech: ['ROS', 'Python', 'Computer Vision'],
						},
						{
							title: 'Lucid Circuit',
							description: 'May 2020 - Jan 2021',
							details: [
								'Simulated a machine learning model for satellite telemetry using Python TensorBoard Lite',
								'Developed an API for electrical engineers that stores all information about architecture hardware parsed from JSON',
						],
							tech: ['Python', 'TensorBoard', 'OpenCV', 'C++'],
						},
						{
							title: 'Totall Metal Recycling',
							description: 'May 2019 - Aug 2019',
							details: [
								'Built Java web applications backed by a relational MySQL database',
								'Created a VBScript-to-Java transpiler in Python to translate thousands of stored procedures',
						],
							tech: ['Java', 'MySQL', 'Python'],
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
