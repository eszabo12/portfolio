'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {projects} from './Constants';
import FilterModal from '../../components/FilterModal';
export default function ProjectsSection() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
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
    const mql = window.matchMedia('(min-width: 1024px)');
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsDesktop('matches' in e ? e.matches : (e as MediaQueryList).matches);
      setIsLoaded(true);
    };
    handler(mql);
    mql.addEventListener?.('change', handler as (e: MediaQueryListEvent) => void);
    return () => mql.removeEventListener?.('change', handler as (e: MediaQueryListEvent) => void);
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


  const handlePrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const handleNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.tag === filter));
    }
    setIsFilterOpen(false);
  };

  if (!isLoaded) {
    return (
      <section className="py-20 px-4">
        <div className="projects-container">
          <h2 className="projects-title">Projects</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4">
      <div className="projects-container">
        <div className="relative flex items-center justify-center mb-10">
          <h2 className="projects-title mx-auto">Projects</h2>
          <button
            onClick={() => setIsFilterOpen(true)}
            className="filter-btn absolute right-0"
            aria-label="Filter projects"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <line x1="7" y1="4" x2="7" y2="20" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
              <circle cx="7" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.1" fill="none"/>
              <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
              <circle cx="12" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.1" fill="none"/>
              <line x1="17" y1="4" x2="17" y2="20" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
              <circle cx="17" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.1" fill="none"/>
            </svg>
          </button>
        </div>
        <div className="carousel pl-8">
          {filteredProjects.length > 1 && <div className="carousel-fade-left" />}
          {filteredProjects.length > 1 && <div className="carousel-fade-right" />}
          <div ref={emblaRef} className="embla overflow-hidden">
            <div
              className={`embla__container flex ${
                isDesktop
                  ? 'flex-row gap-6'
                  : 'flex-row gap-4'
              }`}
            >
              {filteredProjects.map((p: any, idx: number) => (
                <div
                  key={idx}
                  className={`embla__slide embla-slide flex-shrink-0 ${
                    isDesktop
                      ? 'w-[60%] max-w-[600px] min-w-[500px] h-[420px]'
                      : 'w-[90%] max-w-[400px] min-w-[260px] h-[520px]'
                  }`}
                >
                  <article className="project-card h-full flex flex-col">
                    <div className="project-card-gradient" />
                    <div className="project-card-inner flex flex-col h-full">
                      <div className={`project-image relative w-full mb-4 ${
                        isDesktop ? 'h-112' : 'h-48'
                      }`}>
                        <Image src={p.img} alt={p.title} fill className="object-cover rounded-lg" />
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
        <div className="flex justify-between items-center mt-8 px-4">
          <div className="flex gap-2">
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                className={`dot-button w-3 h-3 rounded-full p-0 border-2 flex items-center justify-center transition-all duration-150 ${
                  selectedIndex === idx
                    ? 'border-white'
                    : 'border-white/60'
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
              aria-label="Previous"
              onClick={handlePrev}
              tabIndex={0}
              type="button"
            >
              <svg className={isDesktop ? "icon-svg-desktop" : "icon-svg-mobile"} fill="none" viewBox="0 0 20 20">
                <path d="M13 15l-5-5 5-5" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
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
                <path d="M7 5l5 5-5 5" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        selectedFilter={selectedFilter}
        onFilterChange={handleFilterChange}
      />
    </section>
  );
}
