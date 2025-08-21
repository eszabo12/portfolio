'use client';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Experience from './components/Experience';
import ContactSection from './components/ContactSection';
import ProjectsSection from './components/ProjectsSection';

export default function BackendPortfolio() {
	return (
		<main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
			<HeroSection />
			<AboutSection />
			<Experience />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}
