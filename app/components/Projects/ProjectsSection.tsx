import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton.tsx'
import {
	PrevButton,
	NextButton,
	usePrevNextButtons
} from './EmblaCarouselArrowButtons.tsx'
import useEmblaCarousel from 'embla-carousel-react'

export default function ProjectsSection() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
	const [isDesktop, setIsDesktop] = useState(false);
	useEffect(() => {
		const mql = window.matchMedia('(min-width: 1024px)');
		const handler = (e: MediaQueryListEvent | MediaQueryList) => setIsDesktop('matches' in e ? e.matches : (e as MediaQueryList).matches);
		handler(mql);
		mql.addEventListener?.('change', handler as (e: MediaQueryListEvent) => void);
		return () => mql.removeEventListener?.('change', handler as (e: MediaQueryListEvent) => void);
	}, []);


	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi)

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick
	} = usePrevNextButtons(emblaApi)

	const projects = [
		{
			img: '/codenames.jpg',
			title: 'Codenames',
			date: '2022',
			description: [
				'Programmed and trained an NLP agent to play Codenames, a popular word association game',
				'Added a penalty into the evaluation for black card tokens',
				'The first multi-agent (two-player) AI implementation of Codenames to my knowledge',
			],
			skills: ['Python', 'OpenAI Gym', 'numpy'],
			gh: true,
			ghLink: 'https://github.com/eszabo12/codenames_project',
		},
		{
			img: '/citibike.jpg',
			title: 'iOS Rental Application',
			date: '2020',
			description: [
				'Designed and developed Citibike-esque rental application in Swift using UIKit',
				'Implemented backend with Heroku, map with Google API, and checkout with Stripe APIs',
				'Developed for iOS Programming class',
			],
			skills: ['Swift', 'UIKit', 'Heroku', 'Google Maps API', 'Stripe'],
			gh: true,
			ghLink: 'https://github.com/eszabo12/Mobile_iOS_Bird-esque_Application',
		},
		// {
		// 	img: '/stock.jpg',
		// 	title: 'Stock Trading Bot',
		// 	date: '2022',
		// 	description: [
		// 		'Developed a random forest approach to predicting the price of APPL stock with 95% accuracy',
		// 		'Used pandas dataframe to structure the raw csv historical data',
		// 	],
		// 	skills: ['Python', 'pandas', 'scikit-learn', 'Random Forest'],
		// 	gh: false,
		// },
		{
			img: '/stream.png',
			title: 'Streaming Chrome Extension',
			date: '2022',
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
			title: 'Daily Insights - Dripos',
			date: '2025',
			description: [
				'Designed and developed a mobile and desktop-responsive daily insights email template for Dripos, aggregating key business metrics and trends for coffee shop owners',
				'Automated a high-throughput scheduled event for timely delivery to thousands of users',
				'Tracked send and open rates with a MongoDB collection',

			],
			skills: ['TypeScript', 'Node.js', 'AWS SMS', 'MySQL'],
			gh: false,
		},
		{
			img: '/report.gif',
			title: 'Report Improvements - Dripos',
			date: '2025',
			description: [
				'Enable instant loading of several reports by creating Redshift data warehouses',
				'Improved accuracy of SQL queries by debugging with years of sales data',
				'Enabled full availability of product sales report for immediate restocking insights',
			],
			skills: ['AWS Redshift', 'React', 'Next.js', 'MySQL', 'AWS'],
			gh: false,
		},
		{
			img: '/lunar_lander.gif',
			title: 'Pyribs',
			date: '2022',
			description: [
				'Contributed to open-source Python machine learning library for exploring the latent spaces in diffusion models',
				'Library used by thousands of researchers worldwide'
			],
			skills: ['Python', 'Jax'],
			gh: true,
			ghLink: 'https://github.com/icaros-usc/pyribs/pull/208',
		},
		{
			img: '/oculus.jpg',
			title: 'Mind Palace',
			date: '2023',
			description: [
				'Created a VR game with an avatar which prompted Alzheimer\'s patients to discuss their memories',
				'Transcribed the text from voice, summarized, and generated AI images of their memories in realtime'
			],
			skills: ['C#', 'OpenAI'],
			gh: true,
			ghLink: 'https://github.com/puentesca/newtreehacks2023',
		},
		{
			img: '/flask.gif',
			title: 'VLN-CE Research',
			date: '2023',
			description: [
				'Innovated on the unique use of contrast sets in my first author AI + Robotics paper as an undergrad. Project highlighted by CoRL and later by NVIDIA Jetson Lab via the continuation of Abrar Anwar',
				'As top 15% of workshop submissions, gave a spotlight presentation at The Conference on Robot Learning (CoRL) in Atlanta, Georgia October 2023'
			],
			skills: ['Python', 'NLP'],
			gh: true,
			ghLink: 'https://github.com/eszabo12/VLN-CE',
			buttons: [
				{
					label: 'Paper',
					href: 'https://openreview.net/forum?id=uABEHp6tjy',
					className: 'btn-blue'
				}
			]
		},
		{
			img: '/capture.png',
			title: 'Image Capturing Pipeline',
			date: '2023',
			description: [
				'First open source application for capturing images, not just videos, from the Intel Realsense Camera',
				'Used by researchers in Japan and Korea to create custom datasets',

			],
			skills: ['C/C++'],
			gh: true,
			ghLink: 'https://github.com/eszabo12/image_capturing_pipeline',
		},
	];

	return (
		<section className="py-20 px-4">
			<h2 className="projects-title">Projects</h2>
			<div className="embla">
				<div className="embla__viewport" ref={emblaRef}>

					<div className="embla__container">
						{projects.map((p: any, idx: number) => (
							<article
								key={idx}
								className="project-card embla__slide"
								style={{ flex: isDesktop ? "0 0 40%" : "0 0 100%" }}
							>
								<div className="project-card-gradient" />
								<div className="project-card-inner">
									<div className="project-image">
										<Image src={p.img} alt={p.title} fill className="object-cover" />
									</div>
									<h3 className="project-title">{p.title}</h3>
									{p.date && <p className="text-green-400 font-mono text-xs mb-2">{p.date}</p>}
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
											<a
												href={p.ghLink}
												target="_blank"
												rel="noopener noreferrer"
												className="btn-green"
											>
												<span>GitHub</span>
											</a>
										)}
										{'demoLink' in p && p.demoLink && (
											<a
												href={p.demoLink}
												target="_blank"
												rel="noopener noreferrer"
												className="btn-blue"
											>
												<span>Demo</span>
											</a>
										)}
										{Array.isArray(p.buttons) && p.buttons.map((btn: any, i: any) => (
											<a
												key={i}
												href={btn.href}
												target="_blank"
												rel="noopener noreferrer"
												className={btn.className}
											>
												<span>{btn.label}</span>
											</a>
										))}
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>

			<div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
		</section>
	);
}
