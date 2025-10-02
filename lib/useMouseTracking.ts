import { useState, useRef, useCallback } from 'react';

export const useMouseTracking = () => {
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate the opposite direction movement (inverted)
    const moveX = -mouseX * 0.005; // Reduced intensity for subtle effect
    const moveY = -mouseY * 0.005;
    
    setTransform({ x: moveX, y: moveY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransform({ x: 0, y: 0 });
  }, []);

  return {
    cardRef,
    transform,
    handleMouseMove,
    handleMouseLeave
  };
};
