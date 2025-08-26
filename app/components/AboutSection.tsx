'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl font-bold mb-12 text-center text-gray-200"
				>
					About Me
				</motion.h2>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Photo Section */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="lg:col-span-1"
					>
						<div className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-800 bg-black/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300">
							<div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5" />
							<div className="relative z-10">
								<div className="aspect-square bg-gray-800 relative rounded-lg overflow-hidden mb-6">
									<Image
										src="/portrait.jpeg"
										alt="Elle Szabo"
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</div>
					</motion.div>

					{/* About Content */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="lg:col-span-2"
					>
						<div className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-800 bg-black/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300">
							<div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5" />
							<div className="relative z-10">
								<div className="mb-8">
									<p className="text-gray-300 leading-relaxed mb-4">
										I'm a software engineer based in New York. I started my career in backend systems and have developed an aptitude and passion for creating beautiful fullstack applications that suit business requirements!
									</p>
									<p className="text-gray-300 leading-relaxed">
										When I'm not coding, you'll find me reading a good book, putting together new fashion looks, in the pilates studio, curating a playlist, and tending to my two houseplants. 							</p>
								</div>

								{/* Favorites Grid */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{/* Favorite Books */}
									<div>
										<h4 className="text-lg font-semibold mb-3 text-green-400">📚 Favorite Books of All Time</h4>
										<ul className="space-y-2">
											{[
												'Ender\'s Game',
												'The Hitchhiker\'s Guide to the Galaxy',
												'Clean Code',
												'Elon Musk by Ashlee Vance'
											].map((book, index) => (
												<li key={index} className="text-gray-300 text-sm flex items-center gap-2">
													<span className="w-1 h-1 bg-green-400 rounded-full"></span>
													{book}
												</li>
											))}
										</ul>
									</div>
									{/* Favorite Movies */}
									<div>
										<h4 className="text-lg font-semibold mb-3 text-green-400">🪣 Bucket List </h4>
										<ul className="space-y-2">
											{[
												'Visit every continent at least once',
												'Hike the Redwood forests',
												'Perfect the art of sourdough',
												'Run an official half marathon'
											].map((book, index) => (
												<li key={index} className="text-gray-300 text-sm flex items-center gap-2">
													<span className="w-1 h-1 bg-green-400 rounded-full"></span>
													{book}
												</li>
											))}
										</ul>
									</div>

									{/* Favorite Tools */}
									<div>
										<h4 className="text-lg font-semibold mb-3 text-green-400">🛠️ Comfortable With</h4>
										<ul className="space-y-2">
											{[
												'Linear',
												'Notion',
												'Figma',
												'Cursor'
											].map((book, index) => (
												<li key={index} className="text-gray-300 text-sm flex items-center gap-2">
													<span className="w-1 h-1 bg-green-400 rounded-full"></span>
													{book}
												</li>
											))}
										</ul>
									</div>

								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
