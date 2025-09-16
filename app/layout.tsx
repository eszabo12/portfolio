import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google'
import { Head } from "next/document";

import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Elle Szabo Portfolio',
	description:
		'Welcome to my portfolio! I am a passionate developer specializing in building scalable server architectures, robust APIs, and high-performance distributed systems. With expertise in cloud infrastructure and database optimization, I create efficient and reliable backend solutions.',
	keywords: [
		'Fullstack Developer',
		'Software Engineer',
		'System Architecture',
		'API Development',
		'Database Design',
		'Cloud Computing',
		'Microservices',
		'DevOps',
		'Elle Szabo Portfolio',
		'Node.js',
		'Python',
		'Java',
		'Distributed Systems',
		'System Design',
		'Backend Architecture',
	],
	authors: [{ name: 'Elle Szabo Portfolio' }],
	creator: 'Elle Szabo Portfolio',
	openGraph: {
		title: 'Elle Szabo Portfolio Portfolio',
		description: 'Passionate developer crafting scalable and efficient server architectures. Explore my projects and technical expertise.',
		url: 'https://elleszabo.com',
		siteName: 'Elle Szabo Portfolio',
		images: [
			{
				url: '/icon.png',
				width: 1200,
				height: 630,
				alt: 'Elle Szabo Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Elle Szabo Portfolio',
		description: 'Passionate developer crafting scalable and efficient server architectures. Explore my projects and technical expertise.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
			<link rel="icon" href="/favicon.png" sizes="any" />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
				<GoogleAnalytics gaId="G-PDQXKNVQSX" />
			</body>
		</html>
	);
}