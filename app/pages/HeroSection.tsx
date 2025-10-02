'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { TruckElectricIcon } from 'lucide-react';
const WHOAMI = '$ whoami';
const NAME = 'Elle Szabo';

export default function HeroSection() {
	const [showTerminal, setShowTerminal] = useState(false);
	const [showArrow, setShowArrow] = useState(false);

	const whoamiDelay = 400;
	const titleDelay = WHOAMI.length * 90 + 1000;
	const arrowDelay = titleDelay + 1600;

	useEffect(() => {
		const timeout = setTimeout(() => setShowTerminal(true), whoamiDelay);
		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		if (showTerminal) {
			const arrowTimeout = setTimeout(() => setShowArrow(true), arrowDelay);
			return () => clearTimeout(arrowTimeout);
		} else {
			setShowArrow(false);
		}
	}, [showTerminal, arrowDelay]);

	return (
		<section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden" style={{ 
			backgroundImage: `
				linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px),
				linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)
			`,
			backgroundSize: '20px 20px'
		}}>
			<div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden"></div>
			<div className="relative z-10 flex flex-col items-center justify-center w-full h-full pointer-events-none select-none" style={{ minHeight: '60vh' }}>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: showTerminal ? 1 : 0, y: showTerminal ? 0 : 30 }}
					transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
					className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-200 bg-white/60 hover:border-green-400 flex flex-col items-stretch shadow-lg"
					style={{
						minWidth: '320px',
						maxWidth: '90vw',
						width: '38rem',
						padding: '2.5rem 2.5rem 2rem 2.5rem',
						boxShadow: '0 8px 40px 0 #0008',
						pointerEvents: 'auto',
						userSelect: 'auto',
					}}
				>
					<div className="absolute inset-0 bg-white/60" />
					<div className="absolute inset-0 z-0">
						<div className="absolute inset-0 rounded-3xl blur-2xl bg-white" />
					</div>
					<div className="relative z-10">
						<div className="flex items-center gap-2 mb-6">
							<div className="w-3 h-3 rounded-full bg-red-500" />
							<div className="w-3 h-3 rounded-full bg-yellow-500" />
							<div className="w-3 h-3 rounded-full bg-green-500" />
						</div>
						<div className="font-mono">
							{showTerminal && (
								<motion.p
									className="text-green-500 mb-2 text-lg md:text-2xl"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 1.2 }}
									style={{
										letterSpacing: '0.01em',
										pointerEvents: 'none',
										userSelect: 'none',
									}}
								>
									<Typewriter
										words={[WHOAMI]}
										cursor={true}
									/>
								</motion.p>
							)}
							<div style={{
								minHeight: '1.2em',
								marginBottom: '1rem',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'flex-start'
							}}>
								<motion.h1
									className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.7, ease: 'easeOut' }}
									style={{
										color: '#1a1a1a',
										textShadow: '0 0 1px #1a1a1a, 0 0 1px #1a1a1a, 0 0 1px #1a1a1a',
										letterSpacing: '-0.05em',
										whiteSpace: 'nowrap',
										marginTop: '.3em',
									}}
								>
									{NAME}
								</motion.h1>
							</div>
							{showTerminal && (
								<motion.p
									className="text-green-500 mt-2 mb-2 text-base md:text-lg"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 1.2, delay: 0.2 }}
								>
									$ title --current
								</motion.p>
							)}
							{showTerminal && (
								<motion.div
									className="w-full flex justify-center mt-4"
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 1.7, ease: 'easeOut' }}
								>
									<span className="text-green-400 font-bold text-lg mb-1 font-mono" style={{ fontSize: '1.1rem', letterSpacing: '0.04em' }}>
										Software Engineer
									</span>
								</motion.div>
							)}
						</div>
					</div>
				</motion.div>
			</div>
			{showArrow && (
				<div className="w-full flex justify-center z-20 pointer-events-none select-none" style={{ position: 'absolute', left: 0, right: 0, bottom: '2.5rem' }}>
					<svg
						width="36"
						height="36"
						viewBox="0 0 36 36"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						style={{
							filter: 'drop-shadow(0 0 12px #22c55e) drop-shadow(0 0 32px #22c55e)',
							animation: 'arrowglow 1.5s infinite alternate, arrowbounce 1.2s infinite cubic-bezier(0.4, 0, 0.2, 1)',
						}}
					>
						<path
							d="M18 8V28M18 28L10 20M18 28L26 20"
							stroke="#22c55e"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			)}
			<style>
				{`
					@keyframes fadein {
						from { opacity: 0; transform: translateY(10px);}
						to { opacity: 1; transform: translateY(0);}
					}
					@keyframes arrowglow {
						from { filter: drop-shadow(0 0 12px #22c55e) drop-shadow(0 0 32px #22c55e);}
						to { filter: drop-shadow(0 0 24px #22c55e) drop-shadow(0 0 48px #22c55e);}
					}
					@keyframes arrowbounce {
						0% { transform: translateY(0);}
						50% { transform: translateY(16px);}
						100% { transform: translateY(0);}
					}
				`}
			</style>
		</section>
	);
}

const Name = NAME;
