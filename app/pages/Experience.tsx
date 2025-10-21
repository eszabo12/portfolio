'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { experiences, type ExperienceDetail } from './Constants';

interface ExperienceProps {
	isMobile: boolean;
}

export default function Experience({ isMobile }: ExperienceProps) {
  const [open, setOpen] = useState(false);
  const [cardTransforms, setCardTransforms] = useState<Record<number, { x: number; y: number }>>({});


  const visibleExperiences = open ? experiences : experiences.slice(0, 4);

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

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 relative z-20">
          Experience
        </h2>
        <Collapsible open={open} onOpenChange={setOpen}>
          <div className="relative">
            {/* Progress Line */}
            <motion.div 
              className="absolute left-8 top-0 w-1 bg-green-400 rounded-full z-10"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>
            
            <div className="grid grid-cols-1 gap-8">
              {visibleExperiences.map((project: ExperienceDetail, index: number) => (
                <div key={index} className="relative flex items-start">
                  {/* Progress Dot */}
                  <motion.div 
                    className="absolute left-6 w-4 h-4 bg-green-400 rounded-full z-20 border-2 border-white shadow-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2,
                      ease: "easeOut"
                    }}
                  ></motion.div>
                  
                  <div className="ml-16 flex-1">
                    <Card 
                      className="card-hover-effect relative rounded-2xl overflow-hidden border-2 border-gray-200 bg-white/50 hover:bg-green-800 hover:text-white hover:border-green-400 transition-all duration-300"
                      onMouseMove={(e) => handleCardMouseMove(e, index)}
                      onMouseLeave={() => handleCardMouseLeave(index)}
                      style={{
                        transform: `translate(${cardTransforms[index]?.x || 0}px, ${cardTransforms[index]?.y || 0}px)`
                      }}
                    >
                      <div className="absolute inset-0 bg-white/50 pointer-events-none" />
                      <div className="relative z-10">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-800 hover:text-white font-mono transition-colors duration-300">{project.title}</CardTitle>
                    <CardDescription className="text-green-400 hover:text-white font-mono transition-colors duration-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 hover:text-white mb-6 font-mono transition-colors duration-300">
                      {project.details.map((detail: string | React.ReactElement, i: number) => (
                        <li key={i}>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech: string, i: number) => (
                        <span
                          key={i}
                          className="project-chip"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <CollapsibleTrigger asChild>
              <button
                aria-label={open ? "Show less experience" : "Show more experience"}
                className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 bg-white hover:bg-gray-50 hover:border-green-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 text-green-600 active:border-gray-300"
              >
                {open ? (
                  <svg
                    className="w-7 h-7 transition-transform duration-200"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth={1}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7 transition-transform duration-200"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth={1}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
}
