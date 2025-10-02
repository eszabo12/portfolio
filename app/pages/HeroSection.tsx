'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { TruckElectricIcon } from 'lucide-react';
import Spline from '@splinetool/react-spline';
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
			{/* Spline 3D Scene */}
			<div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
				<Spline 
					scene="https://prod.spline.design/V1U2zZdjZu2MvXSu/scene.splinecode"
					style={{ width: '100%', height: '100%' }}
				/>
			</div>
			<div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden"></div>
			<div className="relative z-10 flex flex-col items-center justify-center w-full h-full pointer-events-none select-none" style={{ minHeight: '60vh' }}>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
					className="text-center"
				>
					<motion.h1
						className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 text-white"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.7, ease: 'easeOut' }}
						style={{
							letterSpacing: '-0.05em',
							textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
						}}
					>
						{NAME}
					</motion.h1>
					<motion.div
						className="text-2xl md:text-3xl font-light text-white/90 mb-8 font-mono"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
						style={{
							textShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
						}}
					>
						<Typewriter
							words={['Software Engineer']}
							cursor={true}
							cursorStyle='|'
							cursorColor='white'
							typeSpeed={100}
							deleteSpeed={50}
							delaySpeed={1000}
						/>
					</motion.div>
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
							filter: 'drop-shadow(0 0 12px white) drop-shadow(0 0 32px white)',
							animation: 'arrowglow 1.5s infinite alternate, arrowbounce 1.2s infinite cubic-bezier(0.4, 0, 0.2, 1)',
						}}
					>
						<path
							d="M18 8V28M18 28L10 20M18 28L26 20"
							stroke="white"
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
						from { filter: drop-shadow(0 0 12px white) drop-shadow(0 0 32px white);}
						to { filter: drop-shadow(0 0 24px white) drop-shadow(0 0 48px white);}
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
