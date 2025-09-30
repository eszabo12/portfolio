'use client';

import HeroSection from './pages/HeroSection';
import AboutSection from './pages/AboutSection';
import Experience from './pages/Experience';
import ContactSection from './pages/ContactSection';
import Script from 'next/script';
import ProjectsSection from './pages/ProjectsSection';
import CustomCursor from './pages/CustomCursor';

export default function BackendPortfolio() {
	return (
		<>
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
			/>
			<main className="min-h-screen bg-white text-white overflow-x-hidden">
				<CustomCursor />

				<HeroSection />
				<AboutSection />
				<Experience />
				<ProjectsSection />
				<ContactSection />
			</main>
		</>
	);
}
