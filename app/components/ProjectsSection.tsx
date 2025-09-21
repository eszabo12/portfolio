'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function ProjectsSection() {
	const projects = [
		{
			img: '/ios_app.png',
			title: 'iOS Rental Application',
			date: 'Dec 2020 – Present',
			description: [
				'Designed and developed Citibike-esque rental application in Swift using UIKit',
				'Implemented backend with Heroku, map with Google API, and checkout with Stripe APIs',
			],
			skills: ['Swift', 'UIKit', 'Heroku', 'Google Maps API', 'Stripe'],
			gh: true,
			ghLink: 'https://github.com/eszabo12/Mobile_iOS_Bird-esque_Application',
		},
		{
			img: '/stock.jpg',
			title: 'Stock Trading Bot',
			date: 'Aug 2022 – Present',
			description: [
				'Developed a random forest approach to predicting the buy / sell windows of APPL stock with 95% accuracy',
				'Used pandas dataframe to structure the raw csv historical data',
			],
			skills: ['Python', 'pandas', 'scikit-learn', 'Random Forest'],
			gh: false,
		},
		{
			img: '/stream.png',
			title: 'Twitch Chat Sentiment Analysis',
			date: 'Feb 2022',
			description: [
				'Developed a chrome extension for HackSC that scrapes Twitch chat data and visualizes sentiment in real time',
				'Connected nltk sentiment library via socketing to browser client',
			],
			skills: ['JavaScript', 'Chrome Extension', 'nltk', 'Socket.io', 'Flask'],
			gh: true,
			ghLink: 'https://github.com/likhity/twitch-stream-chat-analyzer',
		},
		{
			img: '/daily_insights.gif',
			title: 'Automated Email',
			date: '2025',
			description: [
				'Designed and shipped a daily insights email for Dripos, aggregating key business metrics and trends for coffee shop owners',
				'Automated data pipeline and templated email delivery to thousands of users',
			],
			skills: ['TypeScript','Node.js', 'AWS SMS', 'MySQL'],
			gh: false,
		},
		{
			img: '/report.gif',
			title: 'Report Improvements',
			date: '2025',
			description: [
				'Sped up the ticket type sales report by 10x by optimizing SQL queries and caching strategies',
				'Improved reliability and user experience for high-volume merchants',
			],
			skills: ['Javascript', 'AWS Redshift', 'React', 'Next.js', 'MySQL', 'AWS'],
			gh: false,
		},
	];

	const looped = [...projects, ...projects, ...projects];
	const middleStart = projects.length;

	const scrollRef = useRef<HTMLDivElement>(null);
	const [index, setIndex] = useState(middleStart);
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		const mql = window.matchMedia('(min-width: 1024px)');
		const handler = (e: MediaQueryListEvent | MediaQueryList) => setIsDesktop('matches' in e ? e.matches : (e as MediaQueryList).matches);
		handler(mql);
		mql.addEventListener?.('change', handler as (e: MediaQueryListEvent) => void);
		return () => mql.removeEventListener?.('change', handler as (e: MediaQueryListEvent) => void);
	}, []);

	const scrollToIndex = (i: number, smooth: boolean) => {
		const container = scrollRef.current;
		if (!container) return;
		const target = container.children[i] as HTMLElement | undefined;
		if (!target) return;
		container.scrollTo({ left: target.offsetLeft - 24, behavior: smooth ? 'smooth' : 'auto' });
	};

	useEffect(() => { scrollToIndex(middleStart, false); }, []);

	useEffect(() => {
		const id = setInterval(() => {
			setIndex((prev) => {
				let next = prev + 1;
				if (next >= middleStart * 2 + projects.length) {
					next = middleStart + ((next - middleStart) % projects.length);
					scrollToIndex(next, false);
					return next;
				}
				scrollToIndex(next, true);
				return next;
			});
		}, 5000);
		return () => clearInterval(id);
	}, [middleStart, projects.length]);

	const currentDot = ((index - middleStart) % projects.length + projects.length) % projects.length;

	return (
		<section className="py-20 px-4">
			<div className="projects-container">
				<h2 className="projects-title">Projects</h2>
				<div className="carousel">
					<div className="carousel-fade-left" />
					<div className="carousel-fade-right" />
					<div ref={scrollRef} className="carousel-track" style={{ scrollbarWidth: 'none' as any }}>
						{looped.map((p: any, idx: number) => (
							<motion.article key={idx} whileHover={{ scale: 1.02 }} className="project-card" style={{ width: isDesktop ? 520 : 320 }}>
								<div className="project-card-gradient" />
								<div className="project-card-inner">
									<div className="project-image">
										<Image src={p.img} alt={p.title} fill className="object-cover" />
									</div>
									<h3 className="project-title">{p.title}</h3>
									{p.date && <p className="text-pink-400 font-mono text-xs mb-2">{p.date}</p>}
									{Array.isArray(p.description) ? (
										<ul className="list-disc list-inside text-gray-300 text-sm mb-4 space-y-1">
											{p.description.map((d: string, i: number) => (
												<li key={i}>{d}</li>
											))}
										</ul>
									) : (
										<p className="project-desc">{p.description}</p>
									)}
									<div className="project-chips">
										{p.skills.map((s: string, i: number) => (
											<span key={i} className="project-chip">{s}</span>
										))}
									</div>
									<div className="project-actions">
										{p.gh && (
											<motion.a href={p.ghLink} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} className="btn-pink">
												<span>GitHub</span>
											</motion.a>
										)}
										{'demoLink' in p && p.demoLink && (
											<motion.a href={p.demoLink} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} className="btn-blue">
												<span>Demo</span>
											</motion.a>
										)}
									</div>
								</div>
							</motion.article>
						))}
					</div>
					<div className="flex justify-center mt-6">
						<div className="flex gap-2">
							{projects.map((_, i) => (
								<span
									key={i}
									className={`h-2 w-2 rounded-full transition-all duration-200 ${i === currentDot ? 'bg-pink-400/80 scale-125' : 'bg-pink-400/30'}`}
									style={{ display: 'inline-block' }}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
