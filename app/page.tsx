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
			<main className="min-h-screen text-white relative z-10">
				<CustomCursor />

				<section id="hero" className="hero-section">
					<HeroSection />
				</section>
				<div className="floating-background">
					<section id="about">
						<AboutSection />
					</section>
					<section id="experience">
						<Experience />
					</section>
					<section id="projects">
						<ProjectsSection />
					</section>
					<section id="contact">
						<ContactSection />
					</section>
				</div>
			</main>
		</>
	);
}
