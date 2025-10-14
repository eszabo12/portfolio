import { useState, useEffect } from 'react';

export function useIsMobile(breakpoint = 640) {
	const [isMobile, setIsMobile] = useState(() => {
		if (typeof window === 'undefined') return false;
		return window.innerWidth < breakpoint;
	});

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < breakpoint);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [breakpoint]);

	return isMobile;
}

export function useIsDesktop(breakpoint = 1024) {
	const [isDesktop, setIsDesktop] = useState(() => {
		if (typeof window === 'undefined') return false;
		return window.innerWidth >= breakpoint;
	});

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= breakpoint);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [breakpoint]);

	return isDesktop;
}
