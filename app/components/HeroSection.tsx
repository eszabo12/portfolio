'use client';

import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

const WHOAMI = '$ whoami';
const NAME = 'Elle Szabo';

export default function HeroSection() {
	const [showTerminal, setShowTerminal] = useState(false);
	const [showName, setShowName] = useState(false);
	const [showArrow, setShowArrow] = useState(false);

	const whoamiDelay = 400;
	const nameDelay = WHOAMI.length * 90 + 600;
	const titleDelay = WHOAMI.length * 90 + 900;
	const arrowDelay = titleDelay + 1600;

	useEffect(() => {
		const timeout = setTimeout(() => setShowTerminal(true), whoamiDelay);
		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		if (showTerminal) {
			const nameTimeout = setTimeout(() => setShowName(true), nameDelay);
			return () => clearTimeout(nameTimeout);
		} else {
			setShowName(false);
		}
	}, [showTerminal, nameDelay]);

	useEffect(() => {
		if (showTerminal) {
			const arrowTimeout = setTimeout(() => setShowArrow(true), arrowDelay);
			return () => clearTimeout(arrowTimeout);
		} else {
			setShowArrow(false);
		}
	}, [showTerminal, arrowDelay]);

	return (
		<section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
			<div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
				<Spline
					scene="https://prod.spline.design/ywFUBCVbFdeRMEDX/scene.splinecode"
					style={{ width: '200vw', height: '200vh', transform: 'scale(1.5) translate(-25vw, -25vh)' }}
				/>
			</div>
			<div className="relative z-10 flex flex-col items-center justify-center w-full h-full pointer-events-none select-none" style={{ minHeight: '60vh' }}>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: showTerminal ? 1 : 0 }}
					transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
					className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-800 bg-black/50 flex flex-col items-stretch"
					style={{
						minWidth: '320px',
						maxWidth: '90vw',
						width: '38rem',
						padding: '2.5rem 2.5rem 2rem 2.5rem',
						boxShadow: '0 8px 40px 0 #0008',
						pointerEvents: 'auto',
						userSelect: 'auto',
						transform: showTerminal ? 'translateY(0)' : 'translateY(30px)',
						transition: 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)',
					}}
				>
					<div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-blue-500/5" />
					<motion.div
						aria-hidden
						initial={{ opacity: 0.4, scale: 0.98 }}
						animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.98, 1.02, 0.98] }}
						transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
						className="absolute inset-0 z-0"
					>
						<div className="absolute inset-0 rounded-3xl blur-2xl bg-pink-500/10" />
					</motion.div>
					<div className="relative z-10">
					<div className="flex items-center gap-2 mb-6">
							<div className="w-3 h-3 rounded-full bg-red-500" />
							<div className="w-3 h-3 rounded-full bg-yellow-500" />
							<div className="w-3 h-3 rounded-full bg-pink-500" />
						</div>
						<div className="font-mono">
							{showTerminal && (
								<motion.p
									className="text-pink-500 mb-2 text-lg md:text-2xl"
									initial={{ opacity: 0 }}
									animate={{ opacity: [0, 1, 0.7, 1] }}
									transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
									style={{
										letterSpacing: '0.01em',
										pointerEvents: 'none',
										userSelect: 'none',
									}}
								>
									<Typewriter
										words={[WHOAMI]}
										loop={1}
										cursor
										cursorStyle="|"
										typeSpeed={90}
										deleteSpeed={50}
										delaySpeed={1000}
									/>
								</motion.p>
							)}
							{showName && (
								<motion.h1
									className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.7, ease: 'easeOut' }}
									style={{
										color: '#fff0fa',
										textShadow: '0 0 1px #fff0fa, 0 0 1px #fff0fa, 0 0 1px #fff0fa',
										letterSpacing: '-0.05em',
										whiteSpace: 'nowrap',
										marginTop: '0em',
									}}
								>
									{NAME}
								</motion.h1>
							)}
							{showTerminal && (
								<motion.p
									className="text-pink-500 mt-2 mb-2 text-base md:text-lg"
									initial={{ opacity: 0 }}
									animate={{ opacity: [0, 1, 0.7, 1] }}
									transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse', delay: 0.2 }}
								>
									$ title --current
								</motion.p>
							)}
							{showTerminal && (
								<motion.div
									className="w-full flex justify-center mt-1"
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: titleDelay / 1000, duration: 0.7, ease: 'easeOut' }}
								>
									<span className="text-xs md:text-sm text-pink-200 tracking-widest font-mono opacity-80" style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}>
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
							filter: 'drop-shadow(0 0 12px #fff) drop-shadow(0 0 32px #fff)',
							animation: 'arrowglow 1.5s infinite alternate',
						}}
					>
						<path
							d="M18 8V28M18 28L10 20M18 28L26 20"
							stroke="#fff"
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
						from { filter: drop-shadow(0 0 12px #fff) drop-shadow(0 0 32px #fff);}
						to { filter: drop-shadow(0 0 24px #fff) drop-shadow(0 0 48px #fff);}
					}
				`}
			</style>
		</section>
	);
}

const Name = NAME;
