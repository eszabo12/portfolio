'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
	return (
		<div>
		<section className="py-20 px-4 bg-white">
			<div className="max-w-6xl mx-auto">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-200 bg-white/40 shadow-lg hover:border-green-500 transition-all duration-300"
				>
					<div className="absolute inset-0" />
					<motion.div
						aria-hidden
						initial={{ opacity: 0.4, scale: 0.98 }}
						animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.98, 1.02, 0.98] }}
						transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
						className="absolute inset-0 z-0"
					>
						<div className="absolute inset-0 rounded-3xl blur-2xl bg-white" />
					</motion.div>
					<div className="relative z-10">
						<div className="flex items-center gap-2 mb-6">
							<div className="w-3 h-3 rounded-full bg-red-500" />
							<div className="w-3 h-3 rounded-full bg-yellow-500" />
							<div className="w-3 h-3 rounded-full bg-green-500" />
						</div>
						<div className="font-mono">
							<motion.p
								className="text-green-500 mb-2"
								initial={{ opacity: 0 }}
								animate={{ opacity: [0, 1, 0.7, 1] }}
								transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
							>
								$ contact --info
							</motion.p>
							<h2 className="text-3xl font-bold mb-8 text-gray-800 ">Let&apos;s Connect</h2>
						
							<motion.p
								className="text-green-500 mt-8 mb-2"
								initial={{ opacity: 0 }}
								animate={{ opacity: [0, 1, 0.7, 1] }}
								transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse', delay: 0.3 }}
							>
								$ schedule --chat
							</motion.p>
							<motion.a
								href="https://cal.com/elleszabo/30min"
								target="_blank"
								rel="noopener noreferrer"
								
								className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-600 rounded-2xl border border-green-500/30 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-200 cursor-pointer mb-2"
							>
								<svg className="w-5 h-5 rounded-xl " fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<rect x="3" y="4" width="18" height="18" rx="4" strokeWidth="2" />
									<path d="M16 2v4M8 2v4M3 10h18" strokeWidth="2" />
								</svg>
								<span>Let's Chat!</span>
							</motion.a>
							<motion.p
								className="text-green-500 mt-8 mb-2 "
								initial={{ opacity: 0 }}
								animate={{ opacity: [0, 1, 0.7, 1] }}
								transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse', delay: 0.4 }}
							>
								$ contact --email
							</motion.p>
							<motion.a
								href="mailto:elleszabo77@gmail.com?subject=hi%20I%27d%20like%20to%20hire%20you"
								
								className="inline-block px-6 py-3 bg-white text-green-600 rounded-xl border border-green-500/30 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-200"
							>
								elleszabo77@gmail.com
							</motion.a>
							<motion.p
								className="text-green-500 mt-8 mb-2"
								initial={{ opacity: 0 }}
								animate={{ opacity: [0, 1, 0.7, 1] }}
								transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse', delay: 0.6 }}
							>
								$ cat resume.pdf
							</motion.p>
							<motion.a
								onClick={() => {
									const anchor = document.createElement('a');
									anchor.setAttribute('href', '/Elle_Szabo_Resume.pdf');
									anchor.setAttribute('download', '');
									document.body.appendChild(anchor);
									anchor.click();
									document.body.removeChild(anchor);
								}}
								
								className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-600 rounded-xl border border-green-500/30 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-200 cursor-pointer"
								tabIndex={0}
								role="button"
								onKeyDown={e => {
									if (e.key === 'Enter' || e.key === ' ') {
										const anchor = document.createElement('a');
										anchor.setAttribute('href', '/Elle_Szabo_Resume.pdf');
										anchor.setAttribute('download', '');
										document.body.appendChild(anchor);
										anchor.click();
										document.body.removeChild(anchor);
									}
								}}
							>
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
									<path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
								</svg>
								<span>Download Resume</span>
							</motion.a>
							<motion.p className="text-green-500 mt-8 mb-4"
								initial={{ opacity: 0 }}
								animate={{ opacity: [0, 1, 0.7, 1] }}
								transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse', delay: 0.8 }}
							>
								$ ls ./social-links
							</motion.p>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
								<motion.a
									href="https://github.com/eszabo12"
									
									className="inline-flex items-center gap-3 px-6 py-3 bg-white text-green-600 rounded-xl border border-green-500/30 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-200 cursor-pointer"
								>
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
									<span>GitHub</span>
								</motion.a>
								<motion.a
									href="https://www.linkedin.com/in/elle-75b6o5m/"
									
									className="inline-flex items-center gap-3 px-6 py-3 bg-white text-green-600 rounded-xl border border-green-500/30 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-200 cursor-pointer"
								>
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
									</svg>
									<span>LinkedIn</span>
								</motion.a>
								<motion.a
									href="https://x.com/ElleSzabo"
									
									className="inline-flex items-center gap-3 px-6 py-3 bg-white text-green-600 rounded-xl border border-green-500/30 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-200 cursor-pointer"
								>
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
									</svg>
									<span>X</span>
								</motion.a>
								<motion.a
									href="https://open.spotify.com/user/liztheunicorn"
									
									className="inline-flex items-center gap-3 px-6 py-3 bg-white text-green-600 rounded-xl border border-green-500/30 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-200 cursor-pointer"
								>
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 0C5.371 0 0 5.371 0 12c0 6.627 5.371 12 12 12s12-5.373 12-12c0-6.629-5.371-12-12-12zm5.297 17.348a.749.749 0 0 1-1.03.246c-2.824-1.729-6.389-2.119-10.594-1.155a.75.75 0 1 1-.326-1.464c4.522-1.008 8.418-.574 11.522 1.292a.75.75 0 0 1 .246 1.081zm1.47-2.934a.937.937 0 0 1-1.287.307c-3.234-2.01-8.168-2.594-12.003-1.414a.938.938 0 1 1-.537-1.8c4.25-1.267 9.617-.627 13.278 1.646a.937.937 0 0 1 .309 1.261zm.13-2.999c-3.88-2.297-10.293-2.507-14.01-1.364a1.125 1.125 0 1 1-.646-2.154c4.168-1.25 11.17-1.008 15.507 1.572a1.125 1.125 0 0 1-1.12 1.946z"/>
									</svg>
									<span>Spotify</span>
								</motion.a>
								<motion.a
									href="https://www.strava.com/athletes/109112515"
									
									className="inline-flex items-center gap-3 px-6 py-3 bg-white text-green-600 rounded-xl border border-green-500/30 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-200 cursor-pointer"
								>
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path d="M6.5 17L12 7l5.5 10h-3.1L12 13.2l-2.4 3.8z"/>
									</svg>
									<span>Strava</span>
								</motion.a>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
		<section>
			<div className="flex flex-col items-center justify-center py-4">
				<div className="flex items-center gap-2 text-gray-400 text-sm">
				<div className="flex flex-col items-center gap-1 text-gray-400 text-sm">
						<span>© 2025 Elle Szabo</span>
						<span>
							Built with{' '}
							<a href="https://nextjs.org" className="underline hover:text-green-400" target="_blank" rel="noopener noreferrer">Next.js</a>
							{', '}
							<a href="https://vercel.com" className="underline hover:text-green-400" target="_blank" rel="noopener noreferrer">Vercel</a>
							{', and '}
							<a href="https://ui.shadcn.com" className="underline hover:text-green-400" target="_blank" rel="noopener noreferrer">Shadcn</a>
						</span>
					</div>
				</div>
			</div>
		</section>
		</div>
	);
}
