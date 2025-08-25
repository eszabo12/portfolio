'use client';
import { Spinner, Center } from "@chakra-ui/react"

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-xl sm:text-2xl font-bold text-gray-200 mb-6 sm:mb-8 text-center">
					Featured Projects
				</h2>
				<Center>
					<Spinner className="center">hi </Spinner>
				</Center>

				{/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{[1, 2, 3, 4].map((project) => (
						<motion.div 
							key={project} 
							whileHover={{ 
								scale: 1.02,
								transition: { duration: 0.2 }
							}}
							className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-800 bg-black/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 cursor-pointer"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5" />
							<div className="relative z-10">
								<div className="aspect-video bg-gray-100 relative rounded-lg overflow-hidden mb-6">
									<Image src={`/code.jpg`} alt={`Project ${project}`} fill className="object-cover" />
								</div>
								<h3 className="text-2xl font-bold mb-2 text-gray-200">Project Title {project}</h3>
								<p className="text-green-400 mb-4 font-mono">Web Application</p>
								<div className="mb-6">
									<p className="text-gray-300 leading-relaxed">
										A brief description of the project and the technologies used in its development. This project demonstrates full-stack development capabilities with modern frameworks and best practices.
									</p>
								</div>
								<div className="flex flex-wrap gap-2 mb-6">
									{['React', 'Node.js', 'MongoDB', 'AWS'].map((tech, i) => (
										<span
											key={i}
											className="text-sm px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20 text-green-400"
										>
											{tech}
										</span>
									))}
								</div>
								<div className="flex gap-2">
									<motion.a 
										href="#" 
										whileHover={{ scale: 1.05 }}
										className="inline-block px-6 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors"
									>
										View Project →
									</motion.a>
								</div>
							</div>
						</motion.div>
					))}
				</div> */}
			</div>
		</section>
	);
}
