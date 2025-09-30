'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function GitHubContributions() {
	const MIN_COLS = 14;
	const MAX_COLS_DESKTOP = 30;
	const MAX_COLS_MOBILE = 20;

	const [contributions, setContributions] = useState<{
		contributions: Array<{ count: number; date: string; level: number }>;
	} | null>(null);
	const [numCols, setNumCols] = useState(MIN_COLS);

	function calculateCols(width: number) {
		const isMobile = width < 640;
		const maxCols = isMobile ? MAX_COLS_MOBILE : MAX_COLS_DESKTOP;
		return Math.min(Math.max(MIN_COLS, Math.floor(width / 25)), maxCols);
	}

	useEffect(() => {
		const fetchContributions = async () => {
			const res = await fetch(
				"https://github-contributions-api.jogruber.de/v4/eszabo12?y=last",
			);

			if (!res.ok) {
				throw new Error(`HTTP error! status: ${res.status}`);
			}

			const data = await res.json();
			setContributions(data);
		};

		fetchContributions();
	}, []);

	useEffect(() => {
		function handleResize() {
			setNumCols(calculateCols(window.innerWidth));
		}
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const contributionElements = useMemo(() => {
		if (!contributions) return null;
		const datedContributions = contributions.contributions.slice(0, numCols * 7);

		return datedContributions.map(
			(contribution, index) => (
				<motion.div
					key={index}
					className={`${
						contribution.count > 0 ? "bg-[#7BFD79] opacity-80" : "bg-gray-700"
					} w-3 h-3 rounded-sm`}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.7, delay: 0.01 * index }}
				/>
			),
		);
	}, [contributions, numCols]);

	const skeletonGrid = (
		<div className="grid grid-rows-7 grid-flow-col gap-1">
			{Array.from({ length: numCols * 7 }).map((_, idx) => (
				<Skeleton key={idx} className="w-3 h-3 rounded-sm bg-gray-800" />
			))}
		</div>
	);

	return (
		<a
			href="https://github.com/eszabo12"
			target="_blank"
			rel="noopener noreferrer"
			className="block group"
			tabIndex={-1}
		>
			<motion.div
				className="w-full max-w-[38rem] mx-auto mt-6"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					type: "spring",
					stiffness: 300,
					damping: 24,
					delay: 0
				}}
			>
				<Card className="rounded-[25px] border-2 border-gray-200 bg-white shadow-lg flex flex-col justify-center p-4 hover:border-green-400 transition-all duration-300">
					<CardContent className="p-0">
						<div className="flex items-center mb-2">
							<svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="mr-2">
								<path fill="#1a1a1a" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/>
							</svg>
							<span className="text-gray-600 font-mono text-sm opacity-80">eszabo12</span>
						</div>
						{contributions ? (
							<div className="grid grid-rows-7 grid-flow-col gap-1">
								{contributionElements}
							</div>
						) : (
							skeletonGrid
						)}
					</CardContent>
				</Card>
			</motion.div>
		</a>
	);
}
