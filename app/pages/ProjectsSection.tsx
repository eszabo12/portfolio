'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { projects } from './Constants';
import { Skeleton } from "@/components/ui/skeleton";

interface ProjectsSectionProps {
  isMobile: boolean;
  isDesktop: boolean;
}

export default function ProjectsSection({ isMobile, isDesktop }: ProjectsSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [imageLoadingStates, setImageLoadingStates] = useState<{ [key: string]: boolean }>({});
  const [cardTransforms, setCardTransforms] = useState<Record<number, { x: number; y: number }>>({});
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    slidesToScroll: 1,
    dragFree: false,
    direction: 'ltr',
    containScroll: 'trimSnaps',
    inViewThreshold: 0.7,
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollTo = useCallback(
    (idx: number) => {
      if (emblaApi) emblaApi.scrollTo(idx);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
    emblaApi.on('reInit', () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || !isAutoplay) return;
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(autoplay);
  }, [emblaApi, isAutoplay]);

  const handlePrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const handleNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const toggleAutoplay = () => {
    setIsAutoplay(!isAutoplay);
  };

  const handleImageLoad = (projectId: string) => {
    setImageLoadingStates(prev => ({
      ...prev,
      [projectId]: true
    }));
  };

  const handleImageError = (projectId: string) => {
    setImageLoadingStates(prev => ({
      ...prev,
      [projectId]: true
    }));
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const moveX = -mouseX * 0.005;
    const moveY = -mouseY * 0.005;
    
    setCardTransforms(prev => ({ ...prev, [index]: { x: moveX, y: moveY } }));
  };

  const handleCardMouseLeave = (index: number) => {
    setCardTransforms(prev => ({ ...prev, [index]: { x: 0, y: 0 } }));
  };

  useEffect(() => {
    const initialStates: { [key: string]: boolean } = {};
    projects.forEach((p: any) => {
      initialStates[p.title] = false;
    });
    setImageLoadingStates(initialStates);
  }, []);

  if (!isLoaded) {
    return (
      <section className="py-20 px-4 bg-gray-50">
        <div className="projects-container">
          <h2 className="projects-title">Projects</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="projects-container">
        <div className="flex items-center justify-center mb-10">
          <h2 className="projects-title">Projects</h2>
        </div>
        <div className="carousel">
          <div ref={emblaRef} className="embla overflow-hidden">
            <div
              className={`embla__container flex ${
                isDesktop
                  ? 'flex-row gap-6'
                  : 'flex-row gap-4'
              }`}
            >
              {projects.map((p: any, idx: number) => (
                <div
                  key={idx}
                  className={`embla__slide embla-slide flex-shrink-0 ${
                     idx === 0 && isDesktop
                      ? 'ml-6'
                      : ''
                  } ${
                    selectedIndex === idx ? 'is-selected' : ''
                  } ${
                    isDesktop
                      ? 'h-[600px] max-h-[700px] min-h-[500px] w-[600px] max-w-[700px] min-w-[500px]'
                      : 'h-[520px] max-h-[600px] min-h-[400px] w-[90%] max-w-[320px] min-w-[220px]'
                  }`}
                >
                  <article 
                    className="project-card card-hover-effect h-full flex flex-col"
                    onMouseMove={(e) => handleCardMouseMove(e, idx)}
                    onMouseLeave={() => handleCardMouseLeave(idx)}
                    style={{
                      transform: `translate(${cardTransforms[idx]?.x || 0}px, ${cardTransforms[idx]?.y || 0}px)`
                    }}
                  >
                    <div className="project-card-gradient" />
                    <div className="project-card-inner flex flex-col h-full">
                      <div className={`project-image relative rounded-xl w-full mb-4 ${
                        isDesktop ? 'h-112' : 'h-48'
                      }`}>
                        {!imageLoadingStates[p.title] && (
                          <Skeleton className="absolute inset-0 rounded-xl bg-gray-100" />
                        )}
                        {<Image 
                          src={p.img} 
                          alt={p.title} 
                          fill 
						  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className={`object-cover rounded-xl transition-opacity duration-300
                          }`}
						  loading="eager"
                          onLoadingComplete={() => handleImageLoad(p.title)}
                          onError={() => handleImageError(p.title)}
                        />}
                      </div>
                        <h3 className="project-title">{p.title}</h3>
                      {p.date && <p className="text-green-400 font-mono text-xs mb-2">{p.date}</p>}
                      {Array.isArray(p.description) ? (
                        <ul className="list-disc list-inside text-sm mb-4 space-y-1 project-desc">
                          {p.description.map((d: string, i: number) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="project-desc">{p.description}</p>
                      )}
                      <div className="project-chips mb-2">
                        {p.skills.map((s: string, i: number) => (
                          <span key={i} className="project-chip">{s}</span>
                        ))}
                      </div>
                      <div className="project-actions mt-auto flex flex-wrap gap-2">
                        {p.gh && (
                          <motion.a href={p.ghLink} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} className="btn-green">
                            <span>GitHub</span>
                          </motion.a>
                        )}
                        {'demoLink' in p && p.demoLink && (
                          <motion.a href={p.demoLink} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} className="btn-blue">
                            <span>Demo</span>
                          </motion.a>
                        )}
                        {Array.isArray(p.buttons) && p.buttons.map((btn: any, i: any) => (
                          <motion.a
                            key={i}
                            href={btn.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className={btn.className}
                          >
                            <span>{btn.label}</span>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
        {isDesktop ? (
          <div className="flex justify-between items-center mt-8 px-4">
            <div className="flex gap-2">
              {scrollSnaps.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot-button w-3 h-3 rounded-full p-0 border-2 flex items-center justify-center transition-all duration-150 ${
                    selectedIndex === idx
                      ? 'border-white'
                      : ''
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => scrollTo(idx)}
                  tabIndex={0}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                className={`icon-btn ${!isDesktop ? 'icon-btn-mobile' : 'icon-btn-desktop'}`}
                aria-label="Toggle autoplay"
                onClick={toggleAutoplay}
                tabIndex={0}
                type="button"
              >
                {isAutoplay ? (
                  <svg className={isDesktop ? "icon-svg-desktop" : "icon-svg-mobile"} fill="none" viewBox="0 0 20 20">
                    <path d="M6 4h2v12H6V4zM12 4h2v12h-2V4z" stroke="#22c55e" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg className={isDesktop ? "icon-svg-desktop" : "icon-svg-mobile"} fill="none" viewBox="0 0 20 20">
                    <path d="M6 4l8 6-8 6V4z" stroke="#22c55e" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
              <button
                className={`icon-btn ${!isDesktop ? 'icon-btn-mobile' : 'icon-btn-desktop'}`}
                aria-label="Previous"
                onClick={handlePrev}
                tabIndex={0}
                type="button"
              >
                <svg className={isDesktop ? "icon-svg-desktop" : "icon-svg-mobile"} fill="none" viewBox="0 0 20 20">
                  <path d="M13 15l-5-5 5-5" stroke="#22c55e" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className={`icon-btn ${!isDesktop ? 'icon-btn-mobile' : 'icon-btn-desktop'}`}
                aria-label="Next"
                onClick={handleNext}
                tabIndex={0}
                type="button"
              >
                <svg className={isDesktop ? "icon-svg-desktop" : "icon-svg-mobile"} fill="none" viewBox="0 0 20 20">
                  <path d="M7 5l5 5-5 5" stroke="#22c55e" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 mt-8 px-4">
            <div className="flex gap-2">
              {scrollSnaps.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot-button w-3 h-3 rounded-full p-0 border-2 flex items-center justify-center transition-all duration-150 ${
                    selectedIndex === idx
                      ? 'border-white'
                      : ''
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => scrollTo(idx)}
                  tabIndex={0}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                className="icon-btn icon-btn-mobile"
                aria-label="Toggle autoplay"
                onClick={toggleAutoplay}
                tabIndex={0}
                type="button"
              >
                {isAutoplay ? (
                  <svg className="icon-svg-mobile" fill="none" viewBox="0 0 20 20">
                    <path d="M6 4h2v12H6V4zM12 4h2v12h-2V4z" stroke="#22c55e" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg className="icon-svg-mobile" fill="none" viewBox="0 0 20 20">
                    <path d="M6 4l8 6-8 6V4z" stroke="#22c55e" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
              <button
                className="icon-btn icon-btn-mobile"
                aria-label="Previous"
                onClick={handlePrev}
                tabIndex={0}
                type="button"
              >
                <svg className="icon-svg-mobile" fill="none" viewBox="0 0 20 20">
                  <path d="M13 15l-5-5 5-5" stroke="#22c55e" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className="icon-btn icon-btn-mobile"
                aria-label="Next"
                onClick={handleNext}
                tabIndex={0}
                type="button"
              >
                <svg className="icon-svg-mobile" fill="none" viewBox="0 0 20 20">
                  <path d="M7 5l5 5-5 5" stroke="#22c55e" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
