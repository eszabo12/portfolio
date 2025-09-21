'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

function getDistance(x1: number, y1: number, x2: number, y2: number) {
	return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

export default function HeroSection() {
	const [showTerminal, setShowTerminal] = useState(false);
	const mouseStart = useRef<{ x: number; y: number } | null>(null);
	const transitioned = useRef(false);

	const handleMouseMove = (e: React.MouseEvent) => {
		if (showTerminal || transitioned.current) return;
		const x = e.clientX;
		const y = e.clientY;
		if (!mouseStart.current) {
			mouseStart.current = { x, y };
			return;
		}
		const dist = getDistance(mouseStart.current.x, mouseStart.current.y, x, y);
		const inch = 96;
		if (dist >= inch) {
			transitioned.current = true;
			setShowTerminal(true);
		}
	};

	return (
		<section
			className="relative min-h-screen flex items-center justify-center overflow-hidden"
			onMouseMove={handleMouseMove}
		>
			<AnimatePresence>
				{!showTerminal && (
					<motion.div
						key="spline"
						initial={{ opacity: 1 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, transition: { duration: 1.2 } }}
						className="absolute inset-0 z-20 flex items-center justify-center bg-black"
					>
						<div className="w-full h-full min-h-screen">
							<Spline scene="https://prod.spline.design/4gO5WRchV5RZKUwi/scene.splinecode" />
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{showTerminal && (
					<motion.div
						key="terminal"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1.2 }}
						className="absolute inset-0 w-full h-full"
					>
						<div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-pink-700/30 to-blue-600/20 opacity-30 pointer-events-none" />
						<motion.div
							aria-hidden
							initial={false}
							animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
							transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
							className="absolute inset-0 z-0"
							style={{ opacity: 0.5, scale: 0.95 }}
						>
							<div className="absolute inset-0 rounded-3xl blur-3xl bg-pink-500/20" />
						</motion.div>
						<div className="absolute inset-0">
							<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center bg-[length:20px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
						</div>
						<div className="absolute inset-0 flex items-center justify-center min-h-screen">
							<div className="w-full flex items-center justify-center min-h-screen">
								<div className="relative z-10 max-w-4xl w-full mx-4 flex items-center justify-center min-h-screen">
									<motion.div
										initial={false}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.8 }}
										className="bg-black/50 backdrop-blur-lg rounded-2xl border border-gray-800 p-6 shadow-2xl shadow-pink-500/20 hover:shadow-pink-400/30 transition-all duration-300 w-full max-w-2xl mx-auto"
										style={{ opacity: 1, transform: 'translateY(0px)' }}
									>
										<div className="flex items-center gap-2 mb-4">
											<div className="w-3 h-3 rounded-full bg-red-500 shadow-md shadow-red-500/40" />
											<div className="w-3 h-3 rounded-full bg-yellow-500 shadow-md shadow-yellow-500/40" />
											<div className="w-3 h-3 rounded-full bg-pink-500 shadow-md shadow-pink-500/60 animate-pulse" />
										</div>
										<div className="font-mono">
											<motion.p
												className="text-pink-500"
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
												className="text-pink-500 mb-2"
												initial={{ opacity: 0 }}
												animate={{ opacity: [0, 1, 0.7, 1] }}
												transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
											>
												$ location --current
											</motion.p>
											<div className="flex items-center gap-2 text-gray-300">
												<svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
							</div>
						</div>
						<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
							<motion.div
								animate={{ y: [0, 12, 0] }}
								transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
								className="text-pink-400"
							>
								<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
								</svg>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
