'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function ProjectsSection() {
	const projects = [
		{
			img: '/Assets/Projects/Mind_Palace.gif',
			title: "VR Therapy for Alzheimer's",
			description:
				'Developed an app for Oculus Quest to converse with an avatar, save stories, summarize, and generate images',
			skills: ['C#', 'Unity', 'OpenAI API'],
			gh: true,
			ghLink: 'https://github.com/eszabo12/VR_Alzheimer-s_Therapy',
		},
		{
			img: '/Assets/vex_robot.gif',
			title: 'Autonomous Robot',
			description:
				"Programmed vision-based autonomous scoring using an optical sensor to place rings on goals' branches. Built RGB-D frame capture and custom object recognition",
			skills: ['Python', 'YOLOv5', 'Roboflow', 'C/C++'],
			gh: true,
			ghLink: 'https://github.com/uscvex/RobotCode/tree/master/TowerTakeover',
		},
		{
			img: '/Assets/lunar_lander.gif',
			title: 'PyRibs',
			description:
				'Contributor to PyRibs, an open-source library for exploring the latent space of ML models. Used by researchers globally',
			skills: ['Python', 'JAX', 'numba', 'numpy', 'OpenAI Gym'],
			gh: true,
			ghLink: 'https://github.com/icaros-usc/pyribs/graphs/contributors',
			demoLink: 'https://docs.pyribs.org/en/stable/tutorials/lunar_lander.html',
		},
		{
			img: '/Assets/Projects/stream.png',
			title: 'Twitch Chat Sentiment Analysis',
			description:
				'Developed a Chrome extension that scrapes Twitch chat data and visualizes sentiment in real time',
			skills: ['JavaScript', 'CSS', 'HTML', 'Flask', 'Socket.io', 'numpy'],
			gh: true,
			ghLink: 'https://github.com/likhity/twitch-stream-chat-analyzer',
		},
		{
			img: '/Assets/capture.png',
			title: 'Image Capturing Pipeline',
			description:
				'First open-source 3D image capturing pipeline for Intel Realsense. Used by ISAE-Supaero for ROBOTIS OpenManipulator project',
			skills: ['C/C++', 'Make', 'Boost', 'librealsense2'],
			gh: true,
			ghLink: 'https://github.com/eszabo12/image_capturing_pipeline',
		},
		{
			img: '/Assets/Projects/traffic.png',
			title: 'Computer Vision Projects',
			description:
				'Detected common street signs using Haar Cascade classifiers with 96% accuracy in Python, etc.',
			skills: ['keras', 'tensorflow', 'opencv', 'pillow', 'sklearn'],
			gh: true,
			ghLink: 'https://github.com/eszabo12/machine_learning_projects/tree/main/camera_stuff',
		},
		{
			img: '/Assets/logo.png',
			title: 'Mobile iOS Bird-esque Application',
			description:
				'An iOS app that displays objects for rental with realtime Firebase queries and Stripe checkout',
			skills: ['Swift', 'Xcode', 'Firebase', 'Heroku', 'Stripe', 'Cocoapods'],
			gh: true,
			ghLink: 'https://github.com/eszabo12/Mobile_iOS_Bird-esque_Application',
		},
		{
			img: '/Assets/logo.png',
			title: 'Smart Mirror',
			description:
				'Designed a smart mirror from the ground up, streaming weather and news via Raspberry Pi',
			skills: ['Raspberry Pi', 'Python', 'Embedded', 'Woodworking'],
			gh: false,
		},
		{
			img: '/Assets/logo.png',
			title: 'Multi-Headed Encoder-Decoder Model',
			description:
				'Takes ALFRED instructions for an entire episode and predicts the sequence of actions and target objects',
			skills: ['matplotlib', 'torch', 'sklearn', 'numpy'],
			gh: true,
			ghLink:
				'https://github.com/eszabo12/CSCI499_NaturalLanguageforInteractiveAI/tree/main/hw3',
		},
	];

	// Triplicate list for seamless infinite loop
	const looped = [...projects, ...projects, ...projects];
	const middleStart = projects.length;

	const scrollRef = useRef<HTMLDivElement>(null);
	const [index, setIndex] = useState(middleStart);
	const [isDesktop, setIsDesktop] = useState(false);

	// Track breakpoint for desktop (2 visible with peeks)
	useEffect(() => {
		const mql = window.matchMedia('(min-width: 1024px)');
		const handler = (e: MediaQueryListEvent | MediaQueryList) => setIsDesktop('matches' in e ? e.matches : (e as MediaQueryList).matches);
		handler(mql);
		mql.addEventListener?.('change', handler as (e: MediaQueryListEvent) => void);
		return () => mql.removeEventListener?.('change', handler as (e: MediaQueryListEvent) => void);
	}, []);

	// Helper to scroll to an item index within looped array
	const scrollToIndex = (i: number, smooth: boolean) => {
		const container = scrollRef.current;
		if (!container) return;
		const target = container.children[i] as HTMLElement | undefined;
		if (!target) return;
		container.scrollTo({ left: target.offsetLeft - 24, behavior: smooth ? 'smooth' : 'auto' });
	};

	// On mount, position at the middle set
	useEffect(() => {
		scrollToIndex(middleStart, false);
	}, []);

	// Auto-scroll every 5 seconds
	useEffect(() => {
		const id = setInterval(() => {
			setIndex((prev) => {
				let next = prev + 1;
				// If we are about to leave the right set, jump back to equivalent in middle
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

	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold text-gray-200 mb-10 text-center">Projects</h2>
				{/* Horizontal carousel with peeking sides and infinite loop */}
				<div className="relative">
					{/* gradient fades left/right for preview cue */}
					<div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#1A1A1A] to-transparent z-20" />
					<div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#1A1A1A] to-transparent z-20" />

					<div
						ref={scrollRef}
						className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 scroll-smooth"
						style={{ scrollbarWidth: 'none' as any }}
					>
						{looped.map((p, idx) => (
							<motion.article
								key={idx}
								whileHover={{ scale: 1.02 }}
								className="relative shrink-0 snap-center p-6 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-800 bg-black/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300"
								style={{ width: isDesktop ? 520 : 320 }}
							>
								<div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5" />
								<div className="relative z-10 flex flex-col">
									<div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4 bg-gray-900/40">
										<Image src={(p as any).img} alt={(p as any).title} fill className="object-cover" />
									</div>
									<h3 className="text-xl font-bold text-gray-200 mb-1">{(p as any).title}</h3>
									<p className="text-gray-300 text-sm mb-4">{(p as any).description}</p>
									<div className="flex flex-wrap gap-2 mb-5">
										{(p as any).skills.map((s: string, i: number) => (
											<span key={i} className="text-xs px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20 text-green-400">
												{s}
											</span>
										))}
									</div>
									<div className="mt-auto flex items-center gap-3">
										{(p as any).gh && (
											<motion.a
												href={(p as any).ghLink}
												target="_blank"
												rel="noopener noreferrer"
												whileHover={{ scale: 1.05 }}
												className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors text-sm"
											>
												<span>GitHub</span>
											</motion.a>
										)}
										{'demoLink' in (p as any) && (p as any).demoLink && (
											<motion.a
												href={(p as any).demoLink}
												target="_blank"
												rel="noopener noreferrer"
												whileHover={{ scale: 1.05 }}
												className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-300 rounded-lg border border-blue-500/20 hover:bg-blue-500/20 transition-colors text-sm"
											>
												<span>Demo</span>
											</motion.a>
										)}
									</div>
								</div>
							</motion.article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
