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
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						(function() {
							fetch('https://ipapi.co/json/')
								.then(function(response) { return response.json(); })
								.then(function(data) {
									var zip = data.postal || '';
									gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
										page_path: window.location.pathname,
										user_zip_code: zip
									});
								})
								.catch(function() {
									gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
										page_path: window.location.pathname
									});
								});
						})();
					`,
				}}
			/>
			<main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
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
