'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import GitHubContributions from './GitHubContributions';

interface AboutSectionProps {
	isMobile: boolean;
}

export default function AboutSection({ isMobile }: AboutSectionProps) {
	const [cardTransforms, setCardTransforms] = useState<Record<number, { x: number; y: number }>>({});

	const handleCardMouseMove = (e: React.MouseEvent<HTMLElement>, index: number) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		
		const mouseX = e.clientX - centerX;
		const mouseY = e.clientY - centerY;
		
		const moveX = -mouseX * 0.005;
		const moveY = -mouseY * 0.005;
		
		setCardTransforms(prev => ({ ...prev, [index]: { x: moveX, y: moveY } }));
	};

	const handleCardMouseLeave = (index: number) => {
		setCardTransforms(prev => ({ ...prev, [index]: { x: 0, y: 0 } }));
	};

	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl font-bold mb-12 text-center text-gray-800 relative z-20"
				>
					About Me
				</motion.h2>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="flex flex-col items-center"
					>
							<div 
								className="relative p-6 rounded-2xl overflow-hidden backdrop-blur-lg border-2 border-gray-200 bg-white/50 shadow-lg hover:border-green-400 transition-all duration-300 w-full h-full flex flex-col items-center justify-center card-hover-effect"
								onMouseMove={(e) => handleCardMouseMove(e, 0)}
								onMouseLeave={() => handleCardMouseLeave(0)}
								style={{
									transform: `translate(${cardTransforms[0]?.x || 0}px, ${cardTransforms[0]?.y || 0}px)`
								}}
							>
							<div className="absolute inset-0 bg-white/50" />
							<div className="relative w-full h-full min-h-[320px] sm:min-h-[400px]">
								<Image
									src="/headshot.jpeg"
									alt="Elle Szabo"
									fill
									className="object-cover w-full h-full rounded-xl"
								/>
							</div>
							</div>
					</motion.div>

					<div className="flex flex-col">
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="flex-1 flex flex-col justify-center"
						>
							<div 
								className="relative p-6 rounded-2xl overflow-hidden backdrop-blur-lg border-2 border-gray-200 bg-white/50 shadow-lg hover:border-green-400 transition-all duration-300 h-full flex flex-col justify-center card-hover-effect"
								onMouseMove={(e) => handleCardMouseMove(e, 1)}
								onMouseLeave={() => handleCardMouseLeave(1)}
								style={{
									transform: `translate(${cardTransforms[1]?.x || 0}px, ${cardTransforms[1]?.y || 0}px)`
								}}
							>
								<div className="absolute inset-0 bg-white/50" />
								<div className="relative z-10">
									<div>
										<p className="text-gray-600 leading-relaxed mb-4 typewriter-description">
											Hi! 👋 I'm Elle. I have developed an aptitude for creating beautiful fullstack applications that suit business requirements! 💻 . 
											I offer 0-1 founding experience and workflow insights from big tech as well as a background in ML research. 🏢
										</p>

										 <p className="text-gray-600 leading-relaxed typewriter-description">
When I'm not coding, you'll find me reading a good book 📚, on a run 🏃‍♀️, curating a playlist🎶.
									</p>
									</div>
								</div>
							</div>
						</motion.div>
						<div className="mt-6 w-full">
							<GitHubContributions isMobile={isMobile} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}