'use client';

import { useState, useEffect } from 'react';

export default function ScrollProgress() {
	const [scrollProgress, setScrollProgress] = useState(0);
	const [currentSection, setCurrentSection] = useState(0);

	// Define page sections
	const sections = [
		{ id: 'hero', name: 'Hero' },
		{ id: 'about', name: 'About' },
		{ id: 'experience', name: 'Experience' },
		{ id: 'projects', name: 'Projects' },
		{ id: 'contact', name: 'Contact' }
	];

	useEffect(() => {
		const updateScrollProgress = () => {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			const scrollPercent = (scrollTop / docHeight) * 100;
			setScrollProgress(scrollPercent);

			// Determine current section based on scroll position
			const sectionElements = sections.map(section => 
				document.getElementById(section.id)
			).filter(Boolean);

			let current = 0;
			sectionElements.forEach((element, index) => {
				if (element) {
					const rect = element.getBoundingClientRect();
					if (rect.top <= window.innerHeight / 2) {
						current = index;
					}
				}
			});

			setCurrentSection(current);
		};

		window.addEventListener('scroll', updateScrollProgress);
		updateScrollProgress(); // Initial call

		return () => window.removeEventListener('scroll', updateScrollProgress);
	}, []);

	const handleSectionClick = (index: number) => {
		const sectionId = sections[index].id;
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<>
			<div className="fixed bottom-2 left-16 right-16 z-50 h-2 bg-gradient-to-r from-gray-800/30 via-blue-500/20 to-gray-800/30 rounded-full shadow-lg backdrop-blur-sm border border-blue-300/20">
				{/* Progress bar - glass effect */}
				<div 
					className="h-full bg-green-500 rounded-full shadow-green-400/30 shadow-lg backdrop-blur-sm border border-green-300/20 transition-all duration-150 ease-out"
					style={{ width: `${(currentSection / (sections.length - 1)) * 100}%` }}
				/>
				
				{/* Section notches - glass spheres */}
				<div className="absolute inset-0 flex justify-between items-center">
					{sections.map((section, index) => (
						<button
							key={section.id}
							onClick={() => handleSectionClick(index)}
							className={`w-4 h-4 rounded-full transition-all duration-200 backdrop-blur-sm border ${
								index <= currentSection
									? 'bg-gradient-to-br from-green-400/40 via-green-300/50 to-green-500/40 border-green-300/30 shadow-green-400/40 shadow-lg'
									: 'bg-gradient-to-br from-gray-500/20 via-blue-400/30 to-gray-600/20 border-blue-400/20 hover:border-blue-300/30 hover:shadow-blue-400/20 hover:shadow-lg'
							}`}
							title={section.name}
						/>
					))}
				</div>
			</div>

		</>
	);
}
