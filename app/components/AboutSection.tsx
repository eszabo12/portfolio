'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import GitHubContributions from './GitHubContributions';

export default function AboutSection() {
	return (
		<section className="py-12 px-4">
			<div className="max-w-4xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl font-bold mb-8 text-center text-gray-200"
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
						<div className="relative p-6 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-800 bg-black/50 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-300 w-full h-full flex flex-col items-center justify-center">
							<div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-blue-500/5" />

									<Image
										src="/portrait.jpeg"
										alt="Elle Szabo"
										fill
										className="object-cover w-full h-full"
									/>

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
							<div className="relative p-6 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-800 bg-black/50 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-300 h-full flex flex-col justify-center">
								<div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-blue-500/5" />
								<div className="relative z-10">
									<div>
										<p className="text-gray-300 leading-relaxed mb-4">
											Hi!👋 I'm a software engineer based in New York. I have developed an aptitude and passion for creating beautiful fullstack applications that suit business requirements! Very excited about solving customer problems with solid UI/UX understanding and building performant backend systems.
										</p>
										<p className="text-gray-300 leading-relaxed">
											When I'm not coding, you'll find me reading a good book, in the pilates studio, curating a playlist, and tending to my two houseplants.
										</p>
									</div>
								</div>
							</div>
						</motion.div>
						<div className="mt-6 w-full">
							<GitHubContributions />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
