'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Glowing green background gradient */}
			<div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-green-700/30 to-blue-600/20 opacity-30 pointer-events-none" />
			{/* Animated green glow effect */}
			<motion.div
				aria-hidden
				initial={{ opacity: 0.5, scale: 0.95 }}
				animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
				transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
				className="absolute inset-0 z-0"
			>
				<div className="absolute inset-0 rounded-3xl blur-3xl bg-green-500/20" />
			</motion.div>
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center bg-[length:20px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
			</div>

			<div className="relative z-10 max-w-4xl w-full mx-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="bg-black/50 backdrop-blur-lg rounded-2xl border border-gray-800 p-6 shadow-2xl shadow-green-500/20 hover:shadow-green-400/30 transition-all duration-300"
				>
					<div className="flex items-center gap-2 mb-4">
						<div className="w-3 h-3 rounded-full bg-red-500 shadow-md shadow-red-500/40" />
						<div className="w-3 h-3 rounded-full bg-yellow-500 shadow-md shadow-yellow-500/40" />
						<div className="w-3 h-3 rounded-full bg-green-500 shadow-md shadow-green-500/60 animate-pulse" />
					</div>
					<div className="font-mono">
						{/* Cool loading effect for the name */}
						<motion.p
							className="text-green-500"
							initial={{ opacity: 0 }}
							animate={{ opacity: [0, 1, 0.7, 1] }}
							transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
						>
							$ whoami
						</motion.p>
						<h1
							className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white"
						>
							Elle Szabo
						</h1>
						<p className="text-gray-400 mb-2">Software Engineer</p>
						<motion.p
							className="text-green-500 mb-2"
							initial={{ opacity: 0 }}
							animate={{ opacity: [0, 1, 0.7, 1] }}
							transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
						>
							$ location --current
						</motion.p>
						<div className="flex items-center gap-2 text-gray-300">
							<svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
							<span>New York, New York</span>
						</div>
					</div>
				</motion.div>
			</div>
			{/* Animated down arrow for loading/cool effect */}
			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
				<motion.div
					animate={{ y: [0, 12, 0] }}
					transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
					className="text-green-400"
				>
					<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</motion.div>
			</div>
		</section>
	);
}
