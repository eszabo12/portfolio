'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-xl sm:text-2xl font-bold text-gray-200 mb-6 sm:mb-8 text-center">
					Featured Projects
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{[1, 2, 3, 4].map((project, index) => (
						<motion.div 
							key={project} 
							whileHover={{ 
								scale: 1.02,
								transition: { duration: 0.2 }
							}}
							className="relative rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-800 bg-black/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 cursor-pointer"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5" />
							<div className="relative z-10">
								<div className="aspect-video bg-gray-100 relative">
									<Image src={`/code.jpg`} alt={`Project ${project}`} fill className="object-cover" />
								</div>
								<div className="p-4 sm:p-6">
									<h3 className="text-base sm:text-lg font-semibold text-gray-200 mb-2">Project Title {project}</h3>
									<p className="text-sm sm:text-base text-gray-300 mb-4">A brief description of the project and the technologies used in its development.</p>
									<div className="flex gap-2">
										<motion.a 
											href="#" 
											whileHover={{ scale: 1.05 }}
											className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base transition-colors"
										>
											View Project →
										</motion.a>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
